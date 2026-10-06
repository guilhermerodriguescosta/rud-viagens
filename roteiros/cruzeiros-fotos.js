// Galerias MSC com 20 imagens locais por navio; demais colecoes mantem suas selecoes.
const cruiseLocalPhotos = (folder, order = [1, 2, 3, 4, 5, 6]) =>
  order.map(number => `../assets/galerias/cruzeiros/${folder}/foto-${number}.jpg`);
const RUD_CRUISE_PHOTOS = {
  ships: {
    'MSC Virtuosa': [
      '../assets/msc-virtuosa-sem-marca/01-msc-virtuosa-vista-externa.jpg',
      '../assets/msc-virtuosa-sem-marca/02-msc-virtuosa-vista-externa-southampton.jpg',
      '../assets/msc-virtuosa-sem-marca/03-msc-virtuosa-atmosphere-pool.jpg',
      '../assets/msc-virtuosa-sem-marca/04-msc-virtuosa-piscina.jpg',
      '../assets/msc-virtuosa-sem-marca/05-msc-virtuosa-tropical-pool.jpg',
      '../assets/msc-virtuosa-sem-marca/06-msc-virtuosa-savannah-aquapark.jpg',
      '../assets/msc-virtuosa-sem-marca/07-msc-virtuosa-pista-caminhada.jpg',
      '../assets/msc-virtuosa-sem-marca/08-msc-virtuosa-galleria-virtuosa.jpg',
      '../assets/msc-virtuosa-sem-marca/09-msc-virtuosa-escadaria-cristais.jpg',
      '../assets/msc-virtuosa-sem-marca/10-msc-virtuosa-lojas-promenade.jpg',
      '../assets/msc-virtuosa-sem-marca/11-msc-virtuosa-le-grand-theatre.jpg',
      '../assets/msc-virtuosa-sem-marca/12-msc-virtuosa-virtuosa-bar.jpg',
      '../assets/msc-virtuosa-sem-marca/13-msc-virtuosa-attic-nightclub.jpg',
      '../assets/msc-virtuosa-sem-marca/14-msc-virtuosa-academia.jpg',
      '../assets/msc-virtuosa-sem-marca/15-msc-virtuosa-quadra-esportiva.jpg',
      '../assets/msc-virtuosa-sem-marca/16-msc-virtuosa-simulador-formula-1.jpg',
      '../assets/msc-virtuosa-sem-marca/17-msc-virtuosa-area-jogos.jpg',
      '../assets/msc-virtuosa-sem-marca/18-msc-virtuosa-clube-infantil.jpg',
      '../assets/msc-virtuosa-sem-marca/19-msc-virtuosa-cabine-varanda.jpg',
      '../assets/msc-virtuosa-sem-marca/20-msc-virtuosa-vista-da-varanda.jpg'
    ],
    'MSC Divina': [
      '../assets/msc-divina-sem-marca/01-msc-divina-vista-aerea-no-mar.webp',
      '../assets/msc-divina-sem-marca/02-msc-divina-vista-externa-lateral.webp',
      '../assets/msc-divina-sem-marca/03-msc-divina-vista-externa-no-porto.webp',
      '../assets/msc-divina-sem-marca/04-msc-divina-garden-pool.webp',
      '../assets/msc-divina-sem-marca/05-msc-divina-garden-pool-deck.webp',
      '../assets/msc-divina-sem-marca/06-msc-divina-piscina-yacht-club.webp',
      '../assets/msc-divina-sem-marca/07-msc-divina-atrio-escadaria.webp',
      '../assets/msc-divina-sem-marca/08-msc-divina-recepcao.webp',
      '../assets/msc-divina-sem-marca/09-msc-divina-restaurante-le-muse.webp',
      '../assets/msc-divina-sem-marca/10-msc-divina-restaurante-butchers-cut.webp',
      '../assets/msc-divina-sem-marca/11-msc-divina-pantheon-theatre.webp',
      '../assets/msc-divina-sem-marca/12-msc-divina-galaxy-disco.webp',
      '../assets/msc-divina-sem-marca/13-msc-divina-area-jogos.webp',
      '../assets/msc-divina-sem-marca/14-msc-divina-boutiques.webp',
      '../assets/msc-divina-sem-marca/15-msc-divina-divina-bar.webp',
      '../assets/msc-divina-sem-marca/16-msc-divina-top-sail-lounge.webp',
      '../assets/msc-divina-sem-marca/17-msc-divina-cabine-varanda.webp',
      '../assets/msc-divina-sem-marca/18-msc-divina-grand-suite-aurea.webp',
      '../assets/msc-divina-sem-marca/19-msc-divina-suite-yacht-club.webp',
      '../assets/msc-divina-sem-marca/20-msc-divina-suite-executive-family.webp'
    ],
    'MSC Musica': [
      '../assets/msc-musica-sem-marca/01-msc-musica-vista-externa-no-mar.webp',
      '../assets/msc-musica-sem-marca/02-msc-musica-vista-externa-lateral.webp',
      '../assets/msc-musica-sem-marca/03-msc-musica-vista-aerea.webp',
      '../assets/msc-musica-sem-marca/04-msc-musica-piscina-deck.webp',
      '../assets/msc-musica-sem-marca/05-msc-musica-solario-deck.webp',
      '../assets/msc-musica-sem-marca/06-msc-musica-spa-hidromassagem.webp',
      '../assets/msc-musica-sem-marca/07-msc-musica-spa-sauna.webp',
      '../assets/msc-musica-sem-marca/08-msc-musica-academia.webp',
      '../assets/msc-musica-sem-marca/09-msc-musica-casino-san-remo.webp',
      '../assets/msc-musica-sem-marca/10-msc-musica-restaurante-panoramico.webp',
      '../assets/msc-musica-sem-marca/11-msc-musica-kaito-sushi-bar.webp',
      '../assets/msc-musica-sem-marca/12-msc-musica-restaurante-le-maxims.webp',
      '../assets/msc-musica-sem-marca/13-msc-musica-lounge-bar.webp',
      '../assets/msc-musica-sem-marca/14-msc-musica-teatro-la-scala.webp',
      '../assets/msc-musica-sem-marca/15-msc-musica-discoteca-q32.webp',
      '../assets/msc-musica-sem-marca/16-msc-musica-sala-cartas.webp',
      '../assets/msc-musica-sem-marca/17-msc-musica-biblioteca.webp',
      '../assets/msc-musica-sem-marca/18-msc-musica-lojas.webp',
      '../assets/msc-musica-sem-marca/19-msc-musica-cabine-vista-mar.webp',
      '../assets/msc-musica-sem-marca/20-msc-musica-suite-aurea.webp'
    ],
    'MSC Seaview': [
      '../assets/msc-seaview-sem-marca/01-msc-seaview-vista-externa-no-mar.webp',
      '../assets/msc-seaview-sem-marca/02-msc-seaview-vista-externa-popa.webp',
      '../assets/msc-seaview-sem-marca/03-msc-seaview-panorama-pool.webp',
      '../assets/msc-seaview-sem-marca/04-msc-seaview-jungle-pool-lounge.webp',
      '../assets/msc-seaview-sem-marca/05-msc-seaview-piscina-yacht-club.webp',
      '../assets/msc-seaview-sem-marca/06-msc-seaview-atrio.webp',
      '../assets/msc-seaview-sem-marca/07-msc-seaview-asian-market-kitchen.webp',
      '../assets/msc-seaview-sem-marca/08-msc-seaview-restaurante-butchers-cut.webp',
      '../assets/msc-seaview-sem-marca/09-msc-seaview-silver-dolphin-restaurant.webp',
      '../assets/msc-seaview-sem-marca/10-msc-seaview-champagne-bar.webp',
      '../assets/msc-seaview-sem-marca/11-msc-seaview-wine-cocktails.webp',
      '../assets/msc-seaview-sem-marca/12-msc-seaview-teatro.webp',
      '../assets/msc-seaview-sem-marca/13-msc-seaview-garage-club.webp',
      '../assets/msc-seaview-sem-marca/14-msc-seaview-platinum-casino.webp',
      '../assets/msc-seaview-sem-marca/15-msc-seaview-area-jogos.webp',
      '../assets/msc-seaview-sem-marca/16-msc-seaview-simulador-formula-1.webp',
      '../assets/msc-seaview-sem-marca/17-msc-seaview-boutique.webp',
      '../assets/msc-seaview-sem-marca/18-msc-seaview-top-sail-lounge.webp',
      '../assets/msc-seaview-sem-marca/19-msc-seaview-cabine-varanda.webp',
      '../assets/msc-seaview-sem-marca/20-msc-seaview-suite.webp'
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
