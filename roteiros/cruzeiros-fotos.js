// Galerias dos navios MSC e Costa com 20 imagens locais por navio.
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
      '../assets/costa-diadema-sem-marca/01-costa-diadema-vista-externa-lateral.webp',
      '../assets/costa-diadema-sem-marca/02-costa-diadema-vista-externa-no-mar.webp',
      '../assets/costa-diadema-sem-marca/03-costa-diadema-deck-panoramico.webp',
      '../assets/costa-diadema-sem-marca/04-costa-diadema-bar-deck-externo.webp',
      '../assets/costa-diadema-sem-marca/05-costa-diadema-piscina-coberta.webp',
      '../assets/costa-diadema-sem-marca/06-costa-diadema-spa-hidromassagem.webp',
      '../assets/costa-diadema-sem-marca/07-costa-diadema-spa-relaxamento.webp',
      '../assets/costa-diadema-sem-marca/08-costa-diadema-lounge-panoramico.webp',
      '../assets/costa-diadema-sem-marca/09-costa-diadema-bar-lounge.webp',
      '../assets/costa-diadema-sem-marca/10-costa-diadema-bar-vinhos.webp',
      '../assets/costa-diadema-sem-marca/11-costa-diadema-restaurante-especialidades.webp',
      '../assets/costa-diadema-sem-marca/12-costa-diadema-restaurante-teppanyaki.webp',
      '../assets/costa-diadema-sem-marca/13-costa-diadema-restaurante-principal.webp',
      '../assets/costa-diadema-sem-marca/14-costa-diadema-galeria-lojas.webp',
      '../assets/costa-diadema-sem-marca/15-costa-diadema-teatro.webp',
      '../assets/costa-diadema-sem-marca/16-costa-diadema-casino.webp',
      '../assets/costa-diadema-sem-marca/17-costa-diadema-show-teatro.webp',
      '../assets/costa-diadema-sem-marca/18-costa-diadema-cabine-vista-mar.webp',
      '../assets/costa-diadema-sem-marca/19-costa-diadema-cabine-varanda.webp',
      '../assets/costa-diadema-sem-marca/20-costa-diadema-grand-suite.webp'
    ]
  },
  destinations: {
    "Búzios": [
        "../assets/galerias/cruzeiros-turisticos/buzios/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/buzios/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/buzios/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/buzios/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/buzios/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/buzios/foto-6.webp"
    ],
    "Punta del Este": [
        "../assets/galerias/cruzeiros-turisticos/punta-del-este/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/punta-del-este/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/punta-del-este/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/punta-del-este/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/punta-del-este/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/punta-del-este/foto-6.webp"
    ],
    "Ilhabela": [
        "../assets/galerias/cruzeiros-turisticos/ilhabela/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/ilhabela/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/ilhabela/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/ilhabela/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/ilhabela/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/ilhabela/foto-6.webp"
    ],
    "Buenos Aires": [
        "../assets/galerias/cruzeiros-turisticos/buenos-aires/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/buenos-aires/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/buenos-aires/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/buenos-aires/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/buenos-aires/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/buenos-aires/foto-6.webp"
    ],
    "Montevidéu": [
        "../assets/galerias/cruzeiros-turisticos/montevideo/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/montevideo/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/montevideo/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/montevideo/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/montevideo/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/montevideo/foto-6.webp"
    ],
    "Salvador": [
        "../assets/galerias/cruzeiros-turisticos/salvador/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/salvador/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/salvador/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/salvador/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/salvador/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/salvador/foto-6.webp"
    ],
    "Maceió": [
        "../assets/galerias/cruzeiros-turisticos/maceio/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/maceio/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/maceio/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/maceio/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/maceio/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/maceio/foto-6.webp"
    ],
    "Ilha Grande": [
        "../assets/galerias/cruzeiros-turisticos/ilha-grande/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/ilha-grande/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/ilha-grande/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/ilha-grande/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/ilha-grande/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/ilha-grande/foto-6.webp"
    ],
    "Balneário Camboriú": [
        "../assets/galerias/cruzeiros-turisticos/balneario-camboriu/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/balneario-camboriu/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/balneario-camboriu/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/balneario-camboriu/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/balneario-camboriu/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/balneario-camboriu/foto-6.webp"
    ],
    "Itajaí": [
        "../assets/galerias/cruzeiros-turisticos/itajai/foto-1.webp",
        "../assets/galerias/cruzeiros-turisticos/itajai/foto-2.webp",
        "../assets/galerias/cruzeiros-turisticos/itajai/foto-3.webp",
        "../assets/galerias/cruzeiros-turisticos/itajai/foto-4.webp",
        "../assets/galerias/cruzeiros-turisticos/itajai/foto-5.webp",
        "../assets/galerias/cruzeiros-turisticos/itajai/foto-6.webp"
    ]
}
};

const RUD_CRUISE_PHOTO_DETAILS = {
  "Búzios": [
    {
      "label": "Praia da Azeda",
      "author": "Fulviusbsas",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Buzios-PraiaAzeda.jpg"
    },
    {
      "label": "Praia de Geribá",
      "author": "Patrick Montenegro",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_de_Gerib%C3%A1_deserta_durante_a_pandemia_de_COVID-19.jpg"
    },
    {
      "label": "Praia da Ferradura",
      "author": "Marcelo Domingues",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Visual_da_Praia_da_Ferradura_-_panoramio.jpg"
    },
    {
      "label": "Praia de João Fernandes",
      "author": "Fulviusbsas",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Buzios-JoaoFernandes.jpg"
    },
    {
      "label": "Orla Bardot e estátua de Brigitte Bardot",
      "author": "Fwehrs",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Orla_Bardot.jpg"
    },
    {
      "label": "Rua das Pedras",
      "author": "Eduardo P",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rua_das_Pedras_(3).jpg"
    }
  ],
  "Punta del Este": [
    {
      "label": "La Mano, Playa Brava",
      "author": "María Cecilia",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:La_mano_de_Punta_del_Este.JPG"
    },
    {
      "label": "Playa Mansa",
      "author": "mriaco (NaBUru38's mother)",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Punta_del_Este_Mansa_Beach_2012.JPG"
    },
    {
      "label": "Playa Brava",
      "author": "Flaviohmg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Playa_Brava,_Punta_del_Este,_Uruguay.jpg"
    },
    {
      "label": "Casapueblo, Punta Ballena",
      "author": "Talkingheads",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Casapueblo.JPG"
    },
    {
      "label": "Porto de Punta del Este",
      "author": "Lou Fernando",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Punta_del_Este,_Uruguai,_porto.jpg"
    },
    {
      "label": "Farol de Punta del Este",
      "author": "Ezarate",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:FaroPuntadelEste.jpg"
    }
  ],
  "Ilhabela": [
    {
      "label": "Praia do Jabaquara",
      "author": "mlsouza85@hotmail.co…",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_do_Jabaquara_-_Ilhabela_-_panoramio.jpg"
    },
    {
      "label": "Praia do Bonete",
      "author": "Jcornelius",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_do_Bonete,_Ilhabela,_2021.jpg"
    },
    {
      "label": "Praia de Castelhanos",
      "author": "João Vitor Oliveira Martins",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Castelhanos_-_Ilhabela_-_sp.jpg"
    },
    {
      "label": "Praia do Curral",
      "author": "Lucailhabela",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia-do-curral-ilhabela-sp.jpg"
    },
    {
      "label": "Praia do Perequê",
      "author": "Clonefox19",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_do_Perequ%C3%AA,_Ilhabela_litoral_Paulista.jpg"
    },
    {
      "label": "Centro histórico e Igreja Matriz",
      "author": "Dennis Sylvester Hurd",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Cadeia_e_Igreja_Matriz_de_Nossa_Senhora_da_Ajuda.jpg"
    }
  ],
  "Buenos Aires": [
    {
      "label": "Casa Rosada e Plaza de Mayo",
      "author": "Diego Delso",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Casa_Rosada,_Buenos_Aires,_Argentina.jpg"
    },
    {
      "label": "Obelisco",
      "author": "Roberto Fiadone",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Obelisco_Buenos_Aires_desde_chalet_Diaz.jpg"
    },
    {
      "label": "Caminito, La Boca",
      "author": "Diego Delso",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:El_caminito2_-_Buenos_Aires_-_Argentina.jpg"
    },
    {
      "label": "Puerto Madero e Puente de la Mujer",
      "author": "Martin St-Amant (S23678)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:193_-_Buenos_Aires_-_Puerto_Madero_-_Janvier_2010.jpg"
    },
    {
      "label": "Teatro Colón",
      "author": "Pablomolo",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Teatro_Col%C3%B3n_de_Buenos_Aires,_vista_exterior_01.JPG"
    },
    {
      "label": "Floralis Genérica e Recoleta",
      "author": "Deensel",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Floralis_Gen%C3%A9rica_(27547134408).jpg"
    }
  ],
  "Montevidéu": [
    {
      "label": "Plaza Independencia e Palacio Salvo",
      "author": "Pablao19",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Plaza_Independencia_y_el_Palacio_Salvo.JPG"
    },
    {
      "label": "Rambla de Pocitos",
      "author": "Felipe Restrepo Acosta",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:2016_Rambla_de_Pocitos_Montevideo.jpg"
    },
    {
      "label": "Mercado del Puerto",
      "author": "Felipe Restrepo Acosta",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:2016_Mercado_del_Puerto_de_Montevideo.jpg"
    },
    {
      "label": "Teatro Solís",
      "author": "Jimmy Baikovicius derivative work: MrPanyGoff",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Teatro_Solis_-_Montevideo.jpg"
    },
    {
      "label": "Puerta de la Ciudadela",
      "author": "Frank Ballesteros",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Puerta_Montevideo.jpg"
    },
    {
      "label": "Playa Ramírez",
      "author": "Falk2",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:J34_618_Montevideo,_Playa_Ram%C3%ADrez.jpg"
    }
  ],
  "Salvador": [
    {
      "label": "Farol da Barra",
      "author": "Paul R. Burley",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Forte_de_Santo_Ant%C3%B4nio--Farol_da_Barra_Salvador_Bahia_Vista_A%C3%A9rea_2021-0149.jpg"
    },
    {
      "label": "Largo do Pelourinho",
      "author": "Paul R. Burley",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Largo_do_Pelourinho_Salvador_2019-9754_(cropped).jpg"
    },
    {
      "label": "Elevador Lacerda",
      "author": "Biondicamilaabreu",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Elevador_Lacerda_vista_Salvador.jpg"
    },
    {
      "label": "Igreja do Bonfim",
      "author": "Matti Blume",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bonfim_Church,_Salvador_20150720-DSC05483.JPG"
    },
    {
      "label": "Praia do Porto da Barra",
      "author": "Roberto Sabino",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_do_Porto_da_Barra_(Salvador).jpg"
    },
    {
      "label": "Mercado Modelo",
      "author": "Paul R. Burley",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mercado_Modelo_Salvador_Bahia_2021-6320.jpg"
    }
  ],
  "Maceió": [
    {
      "label": "Praia de Ponta Verde",
      "author": "CivArmy",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ponta_Verde_Beach,_Macei%C3%B3,_Brazil.jpg"
    },
    {
      "label": "Farol de Ponta Verde",
      "author": "Original: André Lage Freitas Derivative work: Wilfredor Derivative work: Aristeas",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ponta_Verde_Lighthouse_landscape_-_Macei%C3%B3,_Brazil_(edited).jpg"
    },
    {
      "label": "Orla de Pajuçara",
      "author": "Marinelson Almeida - Traveling through Brazil from Niteroi, Brasil",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Paju%C3%A7ara_em_Macei%C3%B3._(5700883183).jpg"
    },
    {
      "label": "Vista panorâmica de Pajuçara",
      "author": "MTur Destinos",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Marco_Ankosqui_Praia_Pajucara_Maceio-AL_(39040140620).jpg"
    },
    {
      "label": "Orla de Jatiúca",
      "author": "Tissiana Sousa",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ciclovia_na_Praia_Jati%C3%BAca_-_Macei%C3%B3.jpg"
    },
    {
      "label": "Catedral Metropolitana de Maceió",
      "author": "Blogilberto",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Catedral_Metropolitana_de_Macei%C3%B3_1.jpg"
    }
  ],
  "Ilha Grande": [
    {
      "label": "Praia de Lopes Mendes",
      "author": "Tarcísio de Paula Salgado",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_de_Lopes_Mendes_-_Ilha_Grande_-_RJ.jpg"
    },
    {
      "label": "Lagoa Azul",
      "author": "Marcio Sette",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Lagoa_Azul_Ilha_Grande_RJ_-_panoramio.jpg"
    },
    {
      "label": "Praia do Aventureiro",
      "author": "Paulodcwiki",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_do_Aventureiro_em_Ilha_Grande.jpg"
    },
    {
      "label": "Vila do Abraão",
      "author": "Dave Lonsdale",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vila_do_Abra%C3%A3o,_Ilha_Grande.jpg"
    },
    {
      "label": "Praia de Dois Rios",
      "author": "Glauco Umbelino from Diamantina, Brasil",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_de_Dois_Rios_-_Ilha_Grande-RJ-Brasil_(1376055161).jpg"
    },
    {
      "label": "Praia da Feiticeira",
      "author": "Nathan Chor",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_da_Feiticeira,_Ilha_Grande.jpg"
    }
  ],
  "Balneário Camboriú": [
    {
      "label": "Vista do Parque Unipraias e Praia Central",
      "author": "Trustable",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Balne%C3%A1rio_Cambori%C3%BA_from_Unipraias_Park_2023-04-02.jpg"
    },
    {
      "label": "Praia Central",
      "author": "HVL",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Orla_da_Praia_Central,_Balne%C3%A1rio_Cambori%C3%BA_SC.JPG"
    },
    {
      "label": "Praia de Laranjeiras",
      "author": "Iara Genedesi Alessi",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_de_Laranjeiras,em_Balne%C3%A1rio_Cambori%C3%BA_sc_-_panoramio.jpg"
    },
    {
      "label": "Cristo Luz",
      "author": "HVL",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vista_do_Cristo_Luz,_Balne%C3%A1rio_Cambori%C3%BA_SC.JPG"
    },
    {
      "label": "Praia do Estaleirinho",
      "author": "Otávio Nogueira from Fortaleza, BR",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_do_Estaleirinho_(21220937708).jpg"
    },
    {
      "label": "Barra Sul e passarela",
      "author": "HVL",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Embarque_no_Barco_Pirata_no_Rio_Cambori%C3%BA_com_a_Passarela_da_Barra_Sul_ao_fundo,_Balne%C3%A1rio_Cambori%C3%BA_SC.JPG"
    }
  ],
  "Itajaí": [
    {
      "label": "Praia Brava",
      "author": "Eduardo Marquetti - on Flickr",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_Brava_Itaja%C3%AD.jpg"
    },
    {
      "label": "Praia de Cabeçudas",
      "author": "Lfcp.fernando",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Praia_de_Cabe%C3%A7udas.jpg"
    },
    {
      "label": "Igreja Matriz do Santíssimo Sacramento",
      "author": "Nivaldo Mianes",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Igreja_Matriz_do_Sant%C3%ADssimo_Sacramento.jpg"
    },
    {
      "label": "Molhes da Barra e farol",
      "author": "MTur Destinos",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Renato_Soares_Farol_e_Molhes_da_Barra_Itajai_SC_(41101937022).jpg"
    },
    {
      "label": "Mercado Público",
      "author": "MTur Destinos",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Renato_Soares_Mercado_Publico_Itajai_SC_(40433474914).jpg"
    },
    {
      "label": "Bico do Papagaio",
      "author": "Viridianosb",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bico_do_Papagaio_(Itaja%C3%AD).JPG"
    }
  ]
};
