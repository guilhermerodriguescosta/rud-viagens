const phone = '5519999287766';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const message = link.dataset.message || 'Olá! Quero falar com a RUD Viagens.';
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const quickContacts = document.createElement('nav');
quickContacts.className = 'quick-contacts';
quickContacts.setAttribute('aria-label', 'Canais de contato rápido');
const assetPrefix = location.pathname.includes('/roteiros/') ? '../' : '';
const isRoutePage = location.pathname.includes('/roteiros/');
if (isRoutePage) {
  const routeImagePaths = {
    'chapada-diamantina.jpg': '../assets/galerias/chapada-diamantina/capa.jpg',
    'chapada-mesas.png': '../assets/galerias/chapada-das-mesas/capa.png',
    'jalapao.png': '../assets/galerias/jalapao/capa.png',
    'msc-musica.png': '../assets/galerias/msc-musica/capa.png',
    'costa-diadema.png': '../assets/galerias/costa-diadema/capa.png',
    'seguro-viagem.png': '../assets/galerias/seguro-viagem/capa.png',
  };
  document.querySelectorAll('main img').forEach((image) => {
    const filename = image.getAttribute('src')?.split('/').pop();
    if (routeImagePaths[filename]) image.src = routeImagePaths[filename];
  });
  const routeHeader = document.querySelector('header');
  routeHeader.className = 'route-header';
  routeHeader.innerHTML = `
    <a class="brand" href="../index.html" aria-label="Voltar para a página inicial da RUD Viagens"><img class="brand-logo" src="../assets/logo-rud-instagram.jpg" alt="RUD Viagens"></a>
    <nav class="route-nav" aria-label="Navegação do roteiro">
      <a class="route-back" href="../index.html#roteiros"><span aria-hidden="true">←</span> Todos os roteiros</a>
      <a class="route-message" href="https://wa.me/${phone}?text=${encodeURIComponent('Olá! Quero tirar uma dúvida sobre este roteiro.')}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp <span aria-hidden="true">→</span></a>
    </nav>`;
}
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = `<img class="brand-logo" src="${assetPrefix}assets/logo-rud-instagram.jpg" alt="RUD Viagens">`;
  brand.setAttribute('aria-label', 'RUD Viagens — início');
});
document.querySelectorAll('header > a:first-child:not(.brand)').forEach((brand) => {
  brand.classList.add('brand');
  brand.innerHTML = `<img class="brand-logo" src="${assetPrefix}assets/logo-rud-instagram.jpg" alt="RUD Viagens">`;
  brand.setAttribute('aria-label', 'RUD Viagens — início');
});
quickContacts.innerHTML = `
  <a class="quick-contact quick-contact--instagram" href="https://www.instagram.com/rud.viagens/" target="_blank" rel="noopener noreferrer" aria-label="Acessar Instagram da RUD Viagens" title="Instagram">
    <img src="${assetPrefix}assets/icons/instagram.svg" alt="" aria-hidden="true"><span>Instagram</span>
  </a>
  <a class="quick-contact quick-contact--whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent('Olá! Quero falar com a RUD Viagens.')}" target="_blank" rel="noopener noreferrer" aria-label="Falar com a RUD Viagens no WhatsApp" title="WhatsApp">
    <img src="${assetPrefix}assets/icons/whatsapp.svg" alt="" aria-hidden="true"><span>WhatsApp</span>
  </a>`;
document.body.append(quickContacts);

const contactStyles = document.createElement('style');
contactStyles.textContent = `.brand-logo{display:block;width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #fff;box-shadow:0 2px 8px #093a6240}.route-header{min-height:74px;padding:.75rem max(1.5rem,calc((100vw - 1120px)/2));background:#fff;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 14px #092a4020;position:relative;z-index:10}.route-nav{display:flex;align-items:center;gap:1.35rem;font:700 .86rem/1 Arial,sans-serif}.route-back{color:#355268}.route-back span{color:#f36c21;font-size:1.2rem;margin-right:.3rem}.route-message{padding:.72rem 1rem;border-radius:999px;background:#093a62;color:#fff;box-shadow:0 3px 10px #093a6233}.route-message:hover{background:#075caa}.quick-contacts{position:fixed;top:88px;right:20px;left:auto;z-index:20;display:flex;flex-direction:row;align-items:center;gap:.15rem;padding:.32rem;background:#ffffffed;border:1px solid #ffffff99;border-radius:999px;box-shadow:0 10px 28px #092a4038;backdrop-filter:blur(10px)}.quick-contact{display:flex;align-items:center;gap:.48rem;padding:.54rem .76rem;border-radius:999px;color:#16384d;font:700 .78rem/1 Arial,sans-serif;transition:background .2s,transform .2s}.quick-contact:hover{background:#edf5f7;transform:translateY(-1px)}.quick-contact img{width:19px;height:19px;display:block}.quick-contact--instagram:hover{color:#c13584}.quick-contact--whatsapp:hover{color:#16854d}@media(max-width:760px){.brand-logo{width:42px;height:42px}.route-header{min-height:64px;padding:.55rem 1rem}.route-nav{gap:.65rem;font-size:.75rem}.route-message{padding:.62rem .72rem}.quick-contacts{position:fixed!important;top:74px!important;right:12px!important;left:auto!important;display:flex!important;flex-direction:row!important;align-items:center!important;gap:.1rem!important;padding:.25rem!important;background:#ffffffed!important}.quick-contact{width:38px;height:38px;justify-content:center;padding:0}.quick-contact img{width:20px;height:20px}.quick-contact span{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}}`;
document.head.append(contactStyles);

const featuredCardStyles = document.createElement('style');
featuredCardStyles.textContent = `.feature-image{position:relative;height:230px;isolation:isolate}.feature-image>img:first-child{width:100%;height:100%;object-fit:cover;filter:saturate(1.08)}.feature-shade{position:absolute;inset:0;background:linear-gradient(135deg,#063a6260,#f36c2145);z-index:1}.feature-image .feature-logo{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%);width:88px!important;height:88px!important;object-fit:cover;border-radius:50%;border:4px solid #fff;box-shadow:0 10px 24px #061f3480}.route-card--feature:hover .feature-logo{transform:translate(-50%,-50%) scale(1.06)}@media(max-width:760px){.feature-image{height:245px}}`;
document.head.append(featuredCardStyles);

if (isRoutePage) {
  document.body.classList.add('route-page');
  const compactRoute = document.querySelector('main.container');
  if (compactRoute) compactRoute.classList.add('route-content');

  const routeStyles = document.createElement('style');
  routeStyles.textContent = `
    .route-page{background:#f6f8f8;color:#16384d}.route-page main{padding-bottom:0}.route-page .detail-hero{padding:4.5rem 0;background:linear-gradient(135deg,#eef6f7 0%,#fff7ee 100%)}
    .route-page .detail-grid{width:min(1120px,calc(100% - 3rem));margin:auto;display:grid;grid-template-columns:minmax(280px,.85fr) minmax(340px,1fr);gap:4.5rem;align-items:center}.route-page .detail-art{width:100%;max-height:640px;object-fit:contain;background:#fff;border-radius:18px;box-shadow:0 20px 45px #093a6228}
    .route-page .detail-hero h1,.route-page .route-content h1{font:700 clamp(2.8rem,5vw,4.9rem)/1.02 Georgia,serif;color:#093a62;margin:.2rem 0 1rem}.route-page .detail-lead,.route-page .route-content>p{font-size:1.06rem;color:#526a78;max-width:620px}.route-page .detail-price{font-size:.84rem;letter-spacing:.05em;text-transform:uppercase;color:#68808d;margin:1.7rem 0}.route-page .detail-price strong{display:block;margin-top:.2rem;font:700 2.35rem Georgia,serif;letter-spacing:0;text-transform:none;color:#f36c21}
    .route-page .detail-body,.route-page .route-content{width:min(900px,calc(100% - 3rem));margin:0 auto;padding:4.5rem 0}.route-page .detail-body h2,.route-page .route-content h2{font:700 2rem/1.15 Georgia,serif;color:#093a62;margin:2.6rem 0 .8rem}.route-page .detail-body p,.route-page .detail-body li,.route-page .route-content p,.route-page .route-content li{color:#526a78;line-height:1.7}.route-page .facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:0 0 2.8rem}.route-page .facts div{padding:1.15rem;border-radius:12px;background:#fff;box-shadow:0 8px 20px #093a6210}.route-page .facts strong,.route-page .facts span{display:block}.route-page .facts strong{font:700 .68rem Arial,sans-serif;letter-spacing:.12em;color:#f36c21}.route-page .facts span{font-weight:700;color:#093a62;margin-top:.35rem}.route-page .included{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.65rem 2rem;padding-left:1.3rem}.route-page .notice{margin:2rem 0;padding:1rem 1.15rem;border-left:4px solid #f36c21;background:#fff4e8;border-radius:0 8px 8px 0;color:#6f553f;font-size:.9rem}.route-page .detail-cta{margin-top:3rem;padding:2.5rem;border-radius:16px;background:linear-gradient(120deg,#093a62,#075caa);color:#fff;box-shadow:0 18px 35px #093a6235}.route-page .detail-cta h2{color:#fff;margin:0 0 1rem}.route-page .route-content{margin-top:2.5rem;margin-bottom:3rem;padding:3rem;background:#fff;border-radius:18px;box-shadow:0 12px 32px #093a6214}.route-page .route-content>img{float:right;width:min(42%,430px)!important;height:auto;margin:0 0 1.5rem 2.5rem;border-radius:14px;box-shadow:0 14px 28px #093a6226}.route-page .route-content:after{content:'';display:block;clear:both}.route-page .route-content>.button{margin-top:1.5rem}
    @media(max-width:760px){.route-page .detail-hero{padding:2.5rem 0}.route-page .detail-grid{width:min(100% - 2rem,1120px);grid-template-columns:1fr;gap:2rem}.route-page .detail-art{max-height:520px}.route-page .detail-body,.route-page .route-content{width:min(100% - 2rem,900px);padding:2.5rem 0}.route-page .route-content{margin-top:1.5rem;margin-bottom:2rem;padding:1.5rem}.route-page .route-content>img{float:none;width:100%!important;margin:0 0 1.5rem}.route-page .facts,.route-page .included{grid-template-columns:1fr}.route-page .detail-cta{padding:1.5rem}.route-page .detail-hero h1,.route-page .route-content h1{font-size:2.7rem}}
  `;
  document.head.append(routeStyles);
}

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
if (menuButton && menu) menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuButton.textContent = isOpen ? '×' : '☰';
});

if (menuButton && menu) menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  menuButton.textContent = '☰';
}));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const galleryImages = {
  'chapada-diamantina.html': ['chapada-diamantina/chapada-1.jpg', 'chapada-diamantina/chapada-2.jpg', 'chapada-diamantina/chapada-3.jpg', 'chapada-diamantina/chapada-4.jpg'],
  'chapada-das-mesas.html': ['chapada-das-mesas/mesas-1.jpg', 'chapada-das-mesas/mesas-2.jpg', 'chapada-das-mesas/mesas-3.jpg', 'chapada-das-mesas/mesas-4.jpg'],
  'jalapao.html': ['jalapao/jalapao-1.png', 'jalapao/jalapao-2.png', 'jalapao/jalapao-3.png'],
};

const currentPage = location.pathname.split('/').pop();
if (galleryImages[currentPage]) {
  const gallery = document.createElement('section');
  gallery.setAttribute('aria-label', 'Galeria do destino');
  gallery.style.cssText = 'padding:3rem max(1rem,calc((100vw - 900px)/2));background:#f7f1e9;';
  gallery.innerHTML = `<p style="color:#f36c21;font-weight:700;font-size:.75rem;letter-spacing:.12em">FOTOS DO DESTINO</p><h2 style="font-family:Georgia,serif;color:#093a62;font-size:2rem;margin:.3rem 0 1.5rem">Veja o que espera por você</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem">${galleryImages[currentPage].map((image, index) => `<img src="../assets/galerias/${image}" alt="Foto ${index + 1} do destino" style="width:100%;height:230px;object-fit:cover;border-radius:4px">`).join('')}</div>`;
  document.querySelector('main').append(gallery);
}
