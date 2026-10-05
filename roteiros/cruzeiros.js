const escapeCruiseText = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function renderPhotoCard(name, image, kind) {
  const label = kind === 'ships' ? `Ver fotos do navio ${name}` : `Ver fotos de ${name}`;
  return `<li><button class="cruise-photo-card" type="button" data-photo-kind="${kind}" data-photo-name="${escapeCruiseText(name)}" aria-label="${escapeCruiseText(label)}">
    <img src="${escapeCruiseText(image)}" alt="" loading="lazy">
    <span>${escapeCruiseText(name)}</span>
  </button></li>`;
}

function distinctRoutes(routes) {
  const seen = new Set();
  return routes.filter(route => {
    const key = JSON.stringify([route.nights, route.ports, route.note || '']);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderCruiseCompany(company) {
  const ships = company.ships.map(ship => renderPhotoCard(ship.name, ship.image, 'ships')).join('');
  const routes = distinctRoutes(company.routes);
  const routeList = routes.map(route => `
    <li class="cruise-route">
      <span class="cruise-route__path">${escapeCruiseText(route.ports.join(' → '))}${route.note ? `<small>${escapeCruiseText(route.note)}</small>` : ''}</span>
      <span class="cruise-route__nights">${route.nights} noites</span>
    </li>`).join('');
  const destinationNames = [...new Set(routes.flatMap(route => route.ports.filter(port => port !== 'Santos')))];
  const destinations = destinationNames.map(name => renderPhotoCard(name, RUD_CRUISE_PHOTOS.destinations[name][0], 'destinations')).join('');

  return `<section class="cruise-company" id="${escapeCruiseText(company.id)}" aria-labelledby="${escapeCruiseText(company.id)}-title">
    <div class="container">
      <div class="cruise-company__heading"><p class="eyebrow">CRUZEIROS 2026/27</p><h2 id="${escapeCruiseText(company.id)}-title">${escapeCruiseText(company.name)}</h2><p>Saídas com embarque em Santos.</p></div>
      <div class="cruise-subsection"><h3>Navios</h3><ul class="cruise-photo-grid">${ships}</ul></div>
      <div class="cruise-subsection"><div class="cruise-subsection__heading"><h3>Roteiros</h3><span>${routes.length} percursos distintos</span></div><ul class="cruise-routes" aria-label="Roteiros da ${escapeCruiseText(company.name)}">${routeList}</ul></div>
      <div class="cruise-subsection"><h3>Destinos</h3><ul class="cruise-photo-grid">${destinations}</ul></div>
      <a class="button button-primary cruise-company__contact" data-whatsapp data-message="${escapeCruiseText(company.message)}">Conversar sobre a ${escapeCruiseText(company.name)} no WhatsApp →</a>
    </div>
  </section>`;
}

const cruiseRoot = document.querySelector('[data-cruise-companies]');
cruiseRoot.innerHTML = RUD_CATALOG.cruiseCompanies.map(renderCruiseCompany).join('');

const cruiseDialog = document.createElement('dialog');
cruiseDialog.className = 'cruise-carousel';
cruiseDialog.setAttribute('aria-labelledby', 'cruise-carousel-title');
cruiseDialog.innerHTML = `<div class="cruise-carousel__panel">
  <div class="cruise-carousel__header"><div><p class="eyebrow">GALERIA DE FOTOS</p><h2 id="cruise-carousel-title"></h2></div><button type="button" class="cruise-carousel__close" aria-label="Fechar galeria">×</button></div>
  <div class="cruise-carousel__stage"><button type="button" class="cruise-carousel__prev" aria-label="Foto anterior">←</button><img alt=""><button type="button" class="cruise-carousel__next" aria-label="Próxima foto">→</button></div>
  <p class="cruise-carousel__count" aria-live="polite"></p>
</div>`;
document.body.append(cruiseDialog);

let activePhotos = [];
let activeName = '';
let activeIndex = 0;
let opener = null;
const carouselImage = cruiseDialog.querySelector('.cruise-carousel__stage img');
function showCruisePhoto() {
  carouselImage.src = activePhotos[activeIndex];
  carouselImage.alt = `${activeName}, foto ${activeIndex + 1} de ${activePhotos.length}`;
  cruiseDialog.querySelector('.cruise-carousel__count').textContent = `${activeIndex + 1} de ${activePhotos.length}`;
}
function moveCruisePhoto(step) {
  activeIndex = (activeIndex + step + activePhotos.length) % activePhotos.length;
  showCruisePhoto();
}
cruiseRoot.addEventListener('click', event => {
  const card = event.target.closest('[data-photo-kind]');
  if (!card) return;
  const {photoKind, photoName} = card.dataset;
  activePhotos = RUD_CRUISE_PHOTOS[photoKind][photoName];
  if (!activePhotos?.length) return;
  activeName = photoName;
  activeIndex = 0;
  opener = card;
  cruiseDialog.querySelector('#cruise-carousel-title').textContent = photoName;
  showCruisePhoto();
  cruiseDialog.showModal();
  cruiseDialog.querySelector('.cruise-carousel__close').focus();
});
cruiseDialog.querySelector('.cruise-carousel__close').addEventListener('click', () => cruiseDialog.close());
cruiseDialog.querySelector('.cruise-carousel__prev').addEventListener('click', () => moveCruisePhoto(-1));
cruiseDialog.querySelector('.cruise-carousel__next').addEventListener('click', () => moveCruisePhoto(1));
cruiseDialog.addEventListener('click', event => { if (event.target === cruiseDialog) cruiseDialog.close(); });
cruiseDialog.addEventListener('close', () => opener?.focus());
cruiseDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') moveCruisePhoto(-1);
  if (event.key === 'ArrowRight') moveCruisePhoto(1);
});
let touchStartX = 0;
carouselImage.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].screenX; }, {passive:true});
carouselImage.addEventListener('touchend', event => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 45) moveCruisePhoto(distance < 0 ? 1 : -1);
}, {passive:true});
