// Cada coleção tem seis fotografias distintas. A primeira também é a capa do cartão.
const cruiseLocalPhotos = (folder, order = [1, 2, 3, 4, 5, 6]) =>
  order.map(number => `../assets/galerias/cruzeiros/${folder}/foto-${number}.jpg`);
const RUD_CRUISE_PHOTOS = {
  ships: {
    'MSC Virtuosa': [
      'https://www.datocms-assets.com/55385/1756986748-msc-virtuosa.jpg?auto=format',
      'https://www.datocms-assets.com/55385/1641402796-irtuosa.png?auto=format',
      'https://cruiseweb.com/api/media/file/msc-virtuosa-cruise-ship-exterior.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Msc_virtuosa_2021.JPG',
      'https://images.dreamlines.de/TV3t0LRQpVBUM52tjUvVXLWvBC0%3D/600x400/smart/pims/0d2973ed0ae3a8fe9a069ae52382fae9/msc21006502%5B1%5D.jpg',
      'https://www.msccruzeiros.com.br/-/media/global-contents/ships/fleet/virtuosa/entertainment/savannah-aquapark.jpg?as=1&bc=transparent&hash=F96C7B691BB22DB038E39616E1E9ADC4&mh=600&mw=952'
    ],
    'MSC Divina': [
      'https://www.datocms-assets.com/55385/1760977766-msc-divina-1.jpg?auto=format',
      'https://www.datocms-assets.com/55385/1644273832-msc-divina.png?auto=format&w=820',
      'https://images.canusa.de/img/kreuzfahrt/msc-1/divina/exterior-schiff-msc-divina-seitenansicht.cr4252x1864-0x604.jpg',
      'https://d1x80y82sfeoue.cloudfront.net/images/msc-divina-pool-area.width-1200.jpg',
      'https://i0.wp.com/cruisingmatze.com/wp-content/uploads/2023/02/Atrium-MSC-Divina-2.jpg?resize=1024%2C768&ssl=1',
      'https://d3uaz35ue406d5.cloudfront.net/assets/images/compagnies/msc/msc-divina/activites/large/msc-divina-0yqw2c14ntdj8a5n5xn3gh3hx8.jpg'
    ],
    'MSC Musica': [
      '../assets/galerias/msc-musica/capa.png',
      'https://www.datocms-assets.com/55385/1697102276-msc-musica.jpg?auto=format',
      'https://www.datocms-assets.com/55385/1644589769-msc-musica.png?auto=format&w=820',
      'https://www.msccruises.co.nz/-/media/global-contents/ships/fleet/musica/entertainment/mu_entertainment_la_spiaggia_pool_area_07.jpg?as=1&bc=transparent&hash=A355188C0BF172F9112F765197D35DC5&mh=1080&mw=1380',
      'https://www.b2bviajes.com/sites/default/files/msc_musica_pool_sculpture_0.jpg',
      'https://car-tours.ch/hubfs/Schiffe/MSC%20Musica/msc-musica-aussendeck.webp'
    ],
    'MSC Seaview': [
      'https://www.datocms-assets.com/55385/1776173849-msc-seaview_2.avif?auto=format',
      'https://www.datocms-assets.com/55385/1633426970-msc-seaview-gets-her-first-taste-of-the-mediterranean-during-sea-trials-29.jpeg?auto=format',
      'https://www.datocms-assets.com/55385/1633427123-newsseaview.jpeg?auto=format&w=820',
      'https://www.datocms-assets.com/55385/1649079949-msc-seaview-atrium.jpg?auto=format',
      'https://www.msccruises.nl/-/media/global-contents/ships/fleet/seaview/public-areas/sv_public_area_four_decks_atrium_04.jpg?as=1&bc=transparent&hash=692A47355F7675256A4086070B04CE0C&mh=1800&mw=2880',
      'https://www.datocms-assets.com/55385/1776173858-atrium-msc-seaview-2.jpg?auto=format'
    ],
    'Costa Diadema': [
      '../assets/galerias/costa-diadema/capa.png',
      'https://www.costacruceros.es/content/dam/costa/inventory-assets/ships/DI/v1/C031_DIADEMA.jpg.image.1008.754.low.jpg',
      'https://www.costacruises.nl/content/dam/costa/costa-asset/ships/hub/Diadema_Modulo_Explore_1432x1164.jpg.image.686.510.low.jpg',
      'https://www.costacroisieres.be/content/dam/costa/costa-magazine/photo/ships/DI/swimming-pool/Piscina-interna.jpg.image.500.668.low.jpg',
      'https://www.costacruises.co.uk/content/dam/costa/costa-asset/ships/di/in-page/Img_grande_Diadema_1476x1476.jpg.image.686.686.low.jpg',
      'https://www.costacroisieres.be/content/dam/costa/costa-magazine/photo/ships/DI/swimming-pool/Piscina-Lido-Diana.jpg.image.500.668.low.jpg'
    ]
  },
  destinations: {
    'Búzios': ['TNrQuyRISH8','Zvv78XyhlkA','3zN526M6sv0','N3q-CVppTKU','1yWxylsG0Ck','BkgR7WSKpac'],
    'Punta del Este': ['FriVxGR35qo','3y3T4cyf6-w','jHz2WyDBVyo','QcZULgCAj3I','LjEuThIORwU','Hmzv2J3mCug'],
    'Ilhabela': ['L0OfUchjH3s','wk8rpygTnPQ','qZLYh2Bp6RY','1EEii91pkEU','1A2qyaQLDio','lCyGpYdmL3g'],
    'Buenos Aires': ['jvibkBbR-xc','PtX674rCdBs','Y19mCMV1Ijo','qL2tC6KPlcQ','su5yTQZKiBI','J1cV5Z17hwQ'],
    'Montevidéu': ['sRjAUpAIaw0','hv02Pqy8Tmw','f1yfXzUAsjc','btY3El-OdwI','8lzD8HnTxqk','../assets/galerias/cruzeiros/montevideo/foto-6.jpg'],
    'Salvador': cruiseLocalPhotos('salvador', [2, 1, 3, 4, 5, 6]),
    'Maceió': cruiseLocalPhotos('maceio'),
    'Ilha Grande': cruiseLocalPhotos('ilha-grande', [3, 1, 2, 4, 5, 6]),
    'Balneário Camboriú': cruiseLocalPhotos('balneario-camboriu', [4, 1, 2, 3, 5, 6]),
    'Itajaí': cruiseLocalPhotos('itajai', [6, 1, 2, 3, 4, 5])
  }
};
Object.entries(RUD_CRUISE_PHOTOS.destinations).forEach(([name, photos]) => {
  RUD_CRUISE_PHOTOS.destinations[name] = photos.map(photo =>
    photo.startsWith('../') ? photo : `https://unsplash.com/photos/${photo}/download?w=1200`
  );
});
