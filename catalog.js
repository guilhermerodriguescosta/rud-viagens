const RUD_CATALOG = {featured:[
{name:'Chapada Diamantina',category:'ECOTURISMO E AVENTURA',short:'Trilhas, cachoeiras e paisagens que ficam na memória.',href:'roteiros/chapada-diamantina.html',image:'assets/galerias/chapada-diamantina/capa.jpg',alt:'Gruta de águas azuis na Chapada Diamantina',featuredWide:true},
{name:'Vale do Pati',category:'TREKKING E NATUREZA',short:'Caminhadas, vales e noites em meio à Chapada Diamantina.',href:'roteiros/vale-do-pati.html',image:'assets/galerias/vale-do-pati/capa.jpg',alt:'Paisagem do Vale do Pati, na Chapada Diamantina'},
{name:'Jalapão',category:'EXPEDIÇÃO PELO CERRADO',short:'Fervedouros, dunas e aventura em um cenário fora do óbvio.',href:'roteiros/jalapao.html',image:'assets/galerias/jalapao/foto-1.jpg',alt:'Paisagem do Jalapão'},
{name:'Lençóis Maranhenses',category:'DUNAS, LAGOAS E ATINS',short:'Areia, água cristalina e a imensidão do Parque Nacional.',href:'roteiros/lencois-maranhenses.html',image:'assets/galerias/lencois-maranhenses/capa.jpg',alt:'Dunas e lagoas dos Lençóis Maranhenses'},
{name:'São Sebastião',category:'LITORAL NORTE',short:'Praias, surf, trilhas e natureza em uma experiência com a Rud Viagens.',href:'roteiros/sao-sebastiao.html',image:'assets/galerias/sao-sebastiao/capa.jpg',alt:'Praia de São Sebastião'},
{name:'Chapada das Mesas',category:'CACHOEIRAS E CERRADO',short:'Cânions, cachoeiras e cenários marcantes no sul do Maranhão.',href:'roteiros/chapada-das-mesas.html',image:'assets/galerias/chapada-das-mesas/foto-1.jpg',alt:'Cachoeira na Chapada das Mesas'},
{name:'Cruzeiros',category:'VIAJAR TAMBÉM É NAVEGAR',short:'O navio, os destinos e cada momento a bordo fazem parte da viagem.',href:'roteiros/cruzeiros.html',image:'assets/galerias/costa-diadema/capa.png',alt:'Cruzeiro Rud Viagens',featuredWide:true}
],cruiseCompanies:[
{
 id:'msc',name:'MSC Cruzeiros',message:'Olá! Quero conhecer os cruzeiros MSC com embarque em Santos na temporada 2026/27.',
 ships:[
  {name:'MSC Virtuosa',image:'../assets/msc-virtuosa-sem-marca/01-msc-virtuosa-vista-externa.jpg'},
  {name:'MSC Divina',image:'../assets/msc-divina-sem-marca/01-msc-divina-vista-aerea-no-mar.webp'},
  {name:'MSC Musica',image:'../assets/msc-musica-sem-marca/01-msc-musica-vista-externa-no-mar.webp'},
  {name:'MSC Seaview',image:'../assets/msc-seaview-sem-marca/01-msc-seaview-vista-externa-no-mar.webp'}
 ],
 routes:[
  {ship:'MSC Virtuosa',nights:3,ports:['Santos','Búzios','Santos']},
  {ship:'MSC Virtuosa',nights:7,ports:['Santos','Búzios','Salvador','Maceió','Santos']},
  {ship:'MSC Virtuosa',nights:7,ports:['Santos','Búzios','Salvador','Ilhabela','Santos'],note:'Réveillon com observação dos fogos de Copacabana durante a navegação'},
  {ship:'MSC Divina',nights:3,ports:['Santos','Búzios','Santos']},
  {ship:'MSC Divina',nights:4,ports:['Santos','Ilha Grande','Búzios','Santos']},
  {ship:'MSC Divina',nights:5,ports:['Santos','Ilha Grande','Búzios','Ilhabela','Santos']},
  {ship:'MSC Divina',nights:7,ports:['Santos','Balneário Camboriú','Punta del Este','Buenos Aires','Santos']},
  {ship:'MSC Divina',nights:8,ports:['Santos','Balneário Camboriú','Punta del Este','Montevidéu','Buenos Aires','Santos']},
  {ship:'MSC Musica',nights:3,ports:['Santos','Búzios','Santos']},
  {ship:'MSC Musica',nights:4,ports:['Santos','Búzios','Ilha Grande','Santos']},
  {ship:'MSC Musica',nights:4,ports:['Santos','Ilha Grande','Ilhabela','Santos']},
  {ship:'MSC Musica',nights:8,ports:['Santos','Montevidéu','Buenos Aires','Punta del Este','Santos']},
  {ship:'MSC Musica',nights:9,ports:['Santos','Montevidéu','Buenos Aires','Punta del Este','Balneário Camboriú','Santos']},
  {ship:'MSC Seaview',nights:3,ports:['Santos','Búzios','Santos']},
  {ship:'MSC Seaview',nights:7,ports:['Santos','Balneário Camboriú','Punta del Este','Buenos Aires','Santos']},
  {ship:'MSC Seaview',nights:7,ports:['Santos','Balneário Camboriú','Montevidéu','Buenos Aires','Santos']},
  {ship:'MSC Seaview',nights:8,ports:['Santos','Balneário Camboriú','Punta del Este','Montevidéu','Buenos Aires','Santos']}
 ]
},
{
 id:'costa',name:'Costa Cruzeiros',message:'Olá! Quero conhecer os cruzeiros Costa com embarque em Santos na temporada 2026/27.',
 ships:[{name:'Costa Diadema',image:'../assets/costa-diadema-sem-marca/01-costa-diadema-vista-externa-lateral.webp'}],
 routes:[
  {ship:'Costa Diadema',nights:3,ports:['Santos','Itajaí','Santos']},
  {ship:'Costa Diadema',nights:3,ports:['Santos','Ilhabela','Itajaí','Santos']},
  {ship:'Costa Diadema',nights:4,ports:['Santos','Ilhabela','Itajaí','Santos']},
  {ship:'Costa Diadema',nights:7,ports:['Santos','Buenos Aires','Montevidéu','Itajaí','Santos']}
 ]
}
]};
