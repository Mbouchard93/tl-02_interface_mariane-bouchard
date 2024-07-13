import Product from "./Product.js";
import productimg1 from "../img/products/product01.svg"
import productimg2 from "../img/products/product02.svg"
import productimg3 from "../img/products/product03.svg"
import productimg4 from "../img/products/product04.svg"
import productimg5 from "../img/products/product05.svg"
import productimg6 from "../img/products/product06.svg"
import productimg7 from "../img/products/product07.svg"
import productimg8 from "../img/products/product08.svg"
import productimg9 from "../img/products/product09.svg"


const products = [
  new Product(
    "Antihero Classic Eagle",
    productimg1,
    "ANTIHERO",
    `Ce skateboard complet est parfait pour les patineurs de tous niveaux. Pré-assemblé et prêt à rouler,fini avec du ruban adhésif noir, 
    des roues de marque blanche et des trucks en aluminium`,
    129.95
  ),
  new Product(
    "Antihero Doggy",
    productimg2,
    "ANTIHERO",
    "Ce skateboard complet est parfait pour les patineurs de tous niveaux. Pré-assemblé et prêt à rouler, fini avec du ruban adhésif noir, des roues de marque blanche et des trucks en aluminium.",
    129.95
  ),
  new Product(
    "Real Mosaic",
    productimg3,
    "REAL",
    "Ce skateboard complet est parfait pour les patineurs de tous niveaux. Pré-assemblé et prêt à rouler, fini avec du ruban adhésif noir, des roues de marque blanche et des trucks en aluminium.",
    129.95
  ),
  new Product(
    "Antihero Budgie",
    productimg4,
    "ANTIHERO",
    "Ce skateboard complet est parfait pour les patineurs de tous niveaux. Pré-assemblé et prêt à rouler, fini avec du ruban adhésif noir, des roues de marque blanche et des trucks en aluminium.",
    129.95
  ),
  new Product(
    "Landyachtz ATV Classic ",
    productimg5,
    "LANDYACHTZ",
    "Une plateforme confortable et inspirante pour développer vos compétences en skate de rue et apprendre de nouveaux tricks. Si vous êtes fan de kicktails, cette planche en possède deux et ils ont tous les deux beaucoup de pop. La forme symétrique apporte toute la joie des shuvits, fakie, etc. Une forme simple, éprouvée et vraie pour répondre à tous vos besoins en street skate, avec la capacité de conquérir tous les types de terrain. Ce chiot vous permet de rouler en douceur et de surfer à travers ces carves ; elle vole",
    199.95
  ),
  new Product(
    "Landyachtz Remorqueur - Space Tiger",
    productimg6,
    "LANDYACHTZ",
    "Le grand frère du Dinghy, le Tugboat offre la même expérience de roulage en douceur et de carving dur dans un ensemble un peu mieux adapté aux coureurs aux pieds plus grands ou qui recherchent une conduite légèrement plus stable.",
    219.95
  ),
  new Product(
    "Landyachtz Dinghy Classic",
    productimg7,
    "LANDYACHTZ",
    "Le shape classique Dinghy est un incontournable de notre gamme depuis de nombreuses années maintenant et reste la première planche que nous prenons pour une sortie rapide au magasin ou dans le quartier.",
    219.95
  ),
  new Product(
    "Landyachtz Evo 40",
    productimg8,
    "LANDYACHTZ",
    "Pilier de la gamme Landyachtz DH depuis plus d'une décennie, l'Evo a été sous les pieds de 3 champions du monde ainsi que d'innombrables vainqueurs de courses et prétendants au podium. L'Evo 40 offre une conduite dérivante et stable qui remplira n'importe quelle journée dans les collines de courses rapides et décontractées.",
    299.95
  ),
  new Product(
    "Landyachtz Drop Hammer",
    productimg9,
    "LANDYACHTZ",
    "Léger, rigide et hautement sculptable. Le Drop Hammer est idéal pour tous ceux qui cherchent à pimenter leurs déplacements, à dévaler une colline douce, à se défouler sur le chemin des cours ou simplement à sortir pour une balade l'après-midi avec des amis. Monté sur chute, symétrique et rempli de merveilles ! ",
    259.95
  ),

];

export default products;
