const phone = '5519999287766';
const currentPage = location.pathname.split('/').pop();

const setupWhatsAppLinks = (scope = document) => {
  scope.querySelectorAll('[data-whatsapp]').forEach((link) => {
    const message = link.dataset.message || 'Olá! Quero falar com a RUD Viagens.';
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.classList.add('whatsapp-action');
  });
};

setupWhatsAppLinks();

const quickContacts = document.createElement('nav');
quickContacts.className = 'quick-contacts';
quickContacts.setAttribute('aria-label', 'Canais de contato rápido');
const assetPrefix = location.pathname.includes('/roteiros/') ? '../' : '';
const isRoutePage = location.pathname.includes('/roteiros/');

const routeCardImages = {
  'chapada-diamantina.html': 'assets/galerias/chapada-diamantina/foto-1.jpg',
  'chapada-das-mesas.html': 'assets/galerias/chapada-das-mesas/foto-1.jpg',
  'jalapao.html': 'assets/galerias/jalapao/foto-1.jpg',
};
document.querySelectorAll('.route-card').forEach((card) => {
  const routeLink = [...card.querySelectorAll('a[href]')].find((link) => link.getAttribute('href')?.includes('roteiros/'));
  const image = card.querySelector('img');
  const page = routeLink?.getAttribute('href')?.split('/').pop();
  if (image && routeCardImages[page]) image.src = routeCardImages[page];
});

if (isRoutePage) {
  const routeImagePaths = {
    'chapada-diamantina.jpg': '../assets/galerias/chapada-diamantina/foto-1.jpg',
    'chapada-mesas.png': '../assets/galerias/chapada-das-mesas/foto-1.jpg',
    'jalapao.png': '../assets/galerias/jalapao/foto-1.jpg',
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
      <a class="route-message whatsapp-action" href="https://wa.me/${phone}?text=${encodeURIComponent('Olá! Quero tirar uma dúvida sobre este roteiro.')}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp <span aria-hidden="true">→</span></a>
    </nav>`;

  const cruisePages = {
    'msc-musica.html': {
      title: 'MSC Música', price: 'R$ 2.606 por pessoa', nights: '3 noites', route: 'Santos • Búzios • Santos', image: '../assets/galerias/msc-musica/capa.png',
      intro: 'Uma experiência em alto-mar com conforto, gastronomia e entretenimento para aproveitar todos os momentos a bordo.',
      features: ['Café da manhã, almoço e jantar', 'Taxas portuárias', 'Piscinas e festas temáticas', 'Shows e entretenimento'],
      message: 'Olá! Quero cotar cabine e próxima saída do MSC Música.'
    },
    'costa-diadema.html': {
      title: 'Costa Diadema', price: 'R$ 3.116 por pessoa', nights: '4 noites', route: 'Santos • Ilhabela • Itajaí • Santos', image: '../assets/galerias/costa-diadema/capa.png',
      intro: 'Conforto, diversão e paisagens em uma viagem para relaxar e descobrir novos destinos pelo mar.',
      features: ['Restaurantes e opções de lazer', 'Shows e programação de entretenimento', 'Piscinas e áreas de convivência', 'Cabines para diferentes perfis'],
      message: 'Olá! Quero cotar a próxima saída do Costa Diadema.'
    }
  };
  const cruise = cruisePages[currentPage];
  if (cruise) {
    document.querySelector('main').innerHTML = `
      <section class="cruise-hero"><div class="cruise-wrap"><div class="cruise-image"><img src="${cruise.image}" alt="Arte do cruzeiro ${cruise.title}"></div><div class="cruise-copy"><p class="eyebrow">CRUZEIRO EM DESTAQUE</p><h1>${cruise.title}</h1><p class="cruise-intro">${cruise.intro}</p><p class="cruise-price">A partir de <strong>${cruise.price}</strong></p><a class="button whatsapp-action" data-whatsapp data-message="${cruise.message}">Quero este cruzeiro <span>→</span></a></div></div></section>
      <section class="cruise-details"><div class="cruise-wrap"><div class="cruise-facts"><article><span>NOITES</span><strong>${cruise.nights}</strong></article><article><span>ROTA</span><strong>${cruise.route}</strong></article><article><span>EMBARQUE</span><strong>Santos — SP</strong></article></div><div class="cruise-content"><div><p class="eyebrow">A EXPERIÊNCIA A BORDO</p><h2>Seu tempo no mar, do seu jeito.</h2><p>Escolha sua cabine e aproveite uma estrutura pensada para famílias, casais e viajantes que buscam uma pausa completa.</p></div><ul>${cruise.features.map((feature) => `<li>${feature}</li>`).join('')}</ul></div><p class="cruise-notice">Datas, cabines, preços e condições de parcelamento variam conforme disponibilidade. Confirme a próxima saída pelo WhatsApp.</p><div class="cruise-cta"><div><p>PRONTO PARA EMBARCAR?</p><h2>Vamos encontrar a melhor cabine para você.</h2></div><a class="button whatsapp-action" data-whatsapp data-message="${cruise.message}">Falar no WhatsApp <span>→</span></a></div></div></section>`;
    setupWhatsAppLinks(document.querySelector('main'));
  }
}
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = `<img class="brand-logo" src="${assetPrefix}assets/logo-rud-instagram.jpg" alt="RUD Viagens"><span class="brand-name">RUD <b>VIAGENS</b></span>`;
  brand.setAttribute('aria-label', 'RUD Viagens — início');
});
document.querySelectorAll('header > a:first-child:not(.brand)').forEach((brand) => {
  brand.classList.add('brand');
  brand.innerHTML = `<img class="brand-logo" src="${assetPrefix}assets/logo-rud-instagram.jpg" alt="RUD Viagens"><span class="brand-name">RUD <b>VIAGENS</b></span>`;
  brand.setAttribute('aria-label', 'RUD Viagens — início');
});
document.querySelectorAll('.whatsapp-action').forEach((link) => {
  if (!link.querySelector('.whatsapp-action-icon')) {
    link.insertAdjacentHTML('afterbegin', `<img class="whatsapp-action-icon" src="${assetPrefix}assets/icons/whatsapp.svg" alt="" aria-hidden="true">`);
  }
});
document.querySelectorAll('.card-footer > span').forEach((price) => {
  if (!price.querySelector('.price-disclaimer')) price.insertAdjacentHTML('beforeend', '<small class="price-disclaimer">Valor referencial.</small>');
});
document.querySelectorAll('.detail-price, .cruise-price').forEach((price) => {
  if (price.firstChild.nodeType === Node.TEXT_NODE) price.firstChild.nodeValue = 'A partir de ';
  if (!price.querySelector('.price-disclaimer')) price.insertAdjacentHTML('beforeend', '<small class="price-disclaimer">Valor referencial, sujeito a data e disponibilidade.</small>');
});
document.querySelectorAll('.route-content h2').forEach((heading) => {
  if (!heading.textContent.includes('R$')) return;
  heading.textContent = heading.textContent.replace('Diárias a partir de', 'Seguro a partir de');
  if (!heading.nextElementSibling?.classList.contains('price-disclaimer')) heading.insertAdjacentHTML('afterend', '<p class="price-disclaimer">Valor referencial, sujeito ao destino, período, idade e plano escolhido.</p>');
});
document.querySelectorAll('footer a[data-whatsapp], footer a[href*="instagram.com"]').forEach((link) => link.remove());
document.querySelectorAll('footer div').forEach((group) => {
  if (!group.textContent.trim()) group.remove();
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
contactStyles.textContent = `.brand{display:inline-flex;align-items:center;gap:.65rem}.brand-logo{display:block;width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #fff;box-shadow:0 2px 8px #093a6240}.brand-name{font:700 .95rem/1 Arial,sans-serif;letter-spacing:.12em;color:#093a62}.brand-name b{color:#f36c21}.route-header{min-height:74px;padding:.75rem max(1.5rem,calc((100vw - 1120px)/2));background:#fff;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 14px #092a4020;position:relative;z-index:10}.route-nav{display:flex;align-items:center;gap:1.35rem;font:700 .86rem/1 Arial,sans-serif}.route-back{color:#355268}.route-back span{color:#f36c21;font-size:1.2rem;margin-right:.3rem}.route-message{padding:.72rem 1rem;border-radius:999px;background:#093a62;color:#fff;box-shadow:0 3px 10px #093a6233}.route-message:hover{background:#075caa}.quick-contacts{position:fixed;top:88px;right:20px;left:auto;z-index:20;display:flex;flex-direction:row;align-items:center;gap:.15rem;padding:.32rem;background:#ffffffed;border:1px solid #ffffff99;border-radius:999px;box-shadow:0 10px 28px #092a4038;backdrop-filter:blur(10px)}.quick-contact{display:flex;align-items:center;gap:.48rem;padding:.54rem .76rem;border-radius:999px;color:#16384d;font:700 .78rem/1 Arial,sans-serif;transition:background .2s,transform .2s}.quick-contact:hover{background:#edf5f7;transform:translateY(-1px)}.quick-contact img{width:19px;height:19px;display:block}.quick-contact--instagram:hover{color:#c13584}.quick-contact--whatsapp:hover{color:#16854d}@media(max-width:760px){.brand-logo{width:42px;height:42px}.brand-name{font-size:.78rem;letter-spacing:.08em}.route-header{min-height:64px;padding:.55rem 1rem}.route-nav{gap:.65rem;font-size:.75rem}.route-message{padding:.62rem .72rem}.quick-contacts{position:fixed!important;top:74px!important;right:12px!important;left:auto!important;display:flex!important;flex-direction:row!important;align-items:center!important;gap:.1rem!important;padding:.25rem!important;background:#ffffffed!important}.quick-contact{width:38px;height:38px;justify-content:center;padding:0}.quick-contact img{width:20px;height:20px}.quick-contact span{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}}`;
document.head.append(contactStyles);

const featuredCardStyles = document.createElement('style');
featuredCardStyles.textContent = `.feature-image{position:relative;height:230px;isolation:isolate}.feature-image>img:first-child{width:100%;height:100%;object-fit:cover;filter:saturate(1.08)}.feature-shade{position:absolute;inset:0;background:linear-gradient(135deg,#063a6260,#f36c2145);z-index:1}.feature-image .feature-logo{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%);width:88px!important;height:88px!important;object-fit:cover;border-radius:50%;border:4px solid #fff;box-shadow:0 10px 24px #061f3480}.route-card--feature:hover .feature-logo{transform:translate(-50%,-50%) scale(1.06)}@media(max-width:760px){.feature-image{height:245px}}`;
document.head.append(featuredCardStyles);

const whatsappStyles = document.createElement('style');
whatsappStyles.textContent = `.whatsapp-action{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:.5rem!important;background:#fff!important;color:#16384d!important;border:1px solid #d5e4e2!important;border-radius:999px!important;box-shadow:0 7px 18px #093a6226!important;text-shadow:none!important;font-weight:700!important}.whatsapp-action:hover{background:#f3fbf7!important;color:#087f42!important;border-color:#8ad9aa!important;transform:translateY(-1px)}.whatsapp-action-icon{width:19px!important;height:19px!important;flex:0 0 19px!important}.whatsapp-action span{color:inherit!important}.button.whatsapp-action{padding:.9rem 1.35rem}.nav-cta.whatsapp-action{background:#fff!important}.route-nav .route-message{color:#16384d!important;background:#fff!important}@media(max-width:760px){.route-nav .route-message{font-size:.72rem;padding:.65rem .75rem}.button.whatsapp-action{width:100%}}`;
document.head.append(whatsappStyles);

const priceStyles = document.createElement('style');
priceStyles.textContent = `.price-disclaimer{display:block;margin-top:.25rem;color:#68808d;font-size:.68rem;font-weight:500;letter-spacing:0;text-transform:none;line-height:1.35}.card-footer .price-disclaimer{font-size:.62rem}.route-card--insurance .price-disclaimer{color:#d9e8f1}.cruise-price .price-disclaimer{color:#b9d8e4}.route-content .price-disclaimer{margin:.25rem 0 1.5rem;color:#526a78;font-size:.88rem}`;
document.head.append(priceStyles);

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

const cruiseStyles = document.createElement('style');
cruiseStyles.textContent = `
  .cruise-hero{padding:4.5rem 0;background:radial-gradient(circle at 82% 12%,#2d85ad 0,#093a62 40%,#062944 100%);color:#fff}.cruise-wrap{width:min(1120px,calc(100% - 3rem));margin:auto}.cruise-hero .cruise-wrap{display:grid;grid-template-columns:minmax(290px,.88fr) minmax(340px,1fr);gap:4.5rem;align-items:center}.cruise-image{padding:.65rem;background:#ffffff20;border:1px solid #ffffff30;border-radius:22px;box-shadow:0 22px 48px #001d3380}.cruise-image img{display:block;width:100%;max-height:600px;object-fit:contain;border-radius:14px;background:#fff}.cruise-copy .eyebrow,.cruise-content .eyebrow{color:#ffb16d;font-weight:700;font-size:.74rem;letter-spacing:.15em}.cruise-copy h1{font:700 clamp(3rem,5.4vw,5.2rem)/.98 Georgia,serif;color:#fff;margin:.4rem 0 1.1rem}.cruise-intro{max-width:560px;font-size:1.1rem;line-height:1.65;color:#e5f2f6}.cruise-price{margin:1.8rem 0;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:#b9d8e4}.cruise-price strong{display:block;margin-top:.3rem;font:700 2.25rem Georgia,serif;letter-spacing:0;text-transform:none;color:#ffb16d}.cruise-details{padding:4.5rem 0;background:#f5f8f8}.cruise-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:4rem}.cruise-facts article{padding:1.3rem 1.4rem;background:#fff;border-top:4px solid #f36c21;border-radius:0 0 12px 12px;box-shadow:0 12px 24px #093a6212}.cruise-facts span{display:block;color:#f36c21;font-size:.68rem;font-weight:700;letter-spacing:.13em}.cruise-facts strong{display:block;margin-top:.45rem;color:#093a62;line-height:1.35}.cruise-content{display:grid;grid-template-columns:1fr .85fr;gap:4rem;align-items:start}.cruise-content h2,.cruise-cta h2{font:700 clamp(2rem,3vw,3rem)/1.08 Georgia,serif;color:#093a62;margin:.45rem 0 1rem}.cruise-content p{color:#526a78;line-height:1.75}.cruise-content ul{list-style:none;margin:0;padding:0;display:grid;gap:.75rem}.cruise-content li{padding:.95rem 1rem;border-radius:10px;background:#e5f1f3;color:#16384d;font-weight:700}.cruise-content li:before{content:'✓';margin-right:.7rem;color:#087f42}.cruise-notice{margin:3rem 0;padding:1rem 1.2rem;border-left:4px solid #f36c21;background:#fff4e8;color:#6f553f;line-height:1.6}.cruise-cta{display:flex;gap:2rem;align-items:center;justify-content:space-between;padding:2.4rem;background:linear-gradient(110deg,#e95d17,#f88032);border-radius:16px}.cruise-cta p{margin:0;color:#fff;font-size:.72rem;letter-spacing:.14em;font-weight:700}.cruise-cta h2{margin:.4rem 0 0;color:#fff;max-width:600px}.cruise-cta .whatsapp-action{flex:0 0 auto;white-space:nowrap}
  @media(max-width:760px){.cruise-hero,.cruise-details{padding:2.5rem 0}.cruise-wrap{width:min(100% - 2rem,1120px)}.cruise-hero .cruise-wrap,.cruise-content{grid-template-columns:1fr;gap:2rem}.cruise-copy h1{font-size:3rem}.cruise-facts{grid-template-columns:1fr;margin-bottom:2.5rem}.cruise-cta{display:block;padding:1.6rem}.cruise-cta .whatsapp-action{margin-top:1.4rem;width:100%}}
`;
document.head.append(cruiseStyles);

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
  'chapada-diamantina.html': ['chapada-diamantina/foto-2.jpg', 'chapada-diamantina/foto-3.jpg', 'chapada-diamantina/foto-4.jpg', 'chapada-diamantina/foto-5.jpg'],
  'chapada-das-mesas.html': ['chapada-das-mesas/foto-2.jpg', 'chapada-das-mesas/foto-3.jpg', 'chapada-das-mesas/foto-4.jpg', 'chapada-das-mesas/foto-5.jpg'],
  'jalapao.html': ['jalapao/foto-2.jpg', 'jalapao/foto-3.jpg', 'jalapao/foto-4.jpg', 'jalapao/foto-5.jpg'],
};

if (galleryImages[currentPage]) {
  const gallery = document.createElement('section');
  gallery.setAttribute('aria-label', 'Galeria do destino');
  gallery.style.cssText = 'padding:3rem max(1rem,calc((100vw - 900px)/2));background:#f7f1e9;';
  gallery.innerHTML = `<p style="color:#f36c21;font-weight:700;font-size:.75rem;letter-spacing:.12em">FOTOS DO DESTINO</p><h2 style="font-family:Georgia,serif;color:#093a62;font-size:2rem;margin:.3rem 0 1.5rem">Veja o que espera por você</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem">${galleryImages[currentPage].map((image, index) => `<img src="../assets/galerias/${image}" alt="Foto ${index + 1} do destino" style="width:100%;height:230px;object-fit:cover;border-radius:4px">`).join('')}</div>`;
  document.querySelector('main').append(gallery);
}
