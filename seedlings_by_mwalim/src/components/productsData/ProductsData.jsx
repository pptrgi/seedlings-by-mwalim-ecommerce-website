// Images
import avocadoHass from "/images/avocadoHass.jpg";
import custardApple from "/images/appleCustard.jpg";
import applePink from "/images/applePink.jpg";
import africanOlive from "/images/africanOlive.jpg";
import avocadoFuerte from "/images/avocadoFuerte.jpg";
import orangePixie from "/images/orangePixie.jpg";
import cypress from "/images/cypress.jpg";
import macandamia from "/images/macandamia.jpg";
import limeDwarf from "/images/limeDwarf.jpg";
import calthea from "/images/calthea.png";
import whistlingPine from "/images/whistlingPine.jpg";
import passionPurple from "/images/passionPurple.jpg";
import passionYellow from "/images/passionYellow.jpg";
import sacredMugumo from "/images/sacredMugumo.jpg";
import coffeeRuiru from "/images/coffeeRuiru.jpg";

export const productsData = () => {
  const products = [
    {
      id: 1,
      name: "Hass Avocado",
      category: "Fruit",
      image: avocadoHass,
      newprice: 480,
      oldPrice: 590,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 2,
      name: "Custard Apple",
      category: "Fruit",
      image: custardApple,
      newprice: 560,
      oldPrice: 655,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 3,
      name: "Pink Apple",
      category: "Fruit",
      image: applePink,
      newprice: 560,
      oldPrice: 655,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 4,
      name: "African Olive",
      category: "Tree",
      image: africanOlive,
      newprice: 300,
      oldPrice: 395,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 5,
      name: "Fuerte Avocado",
      category: "Fruit",
      image: avocadoFuerte,
      newprice: 450,
      oldPrice: 550,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 6,
      name: "Pixie Orange",
      category: "Fruit",
      image: orangePixie,
      newprice: 250,
      oldPrice: 355,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 7,
      name: "Cypress",
      category: "Tree",
      image: cypress,
      newprice: 200,
      oldPrice: 260,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 8,
      name: "Macandamia",
      category: "Tree",
      image: macandamia,
      newprice: 400,
      oldPrice: 470,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 9,
      name: "Dwarf Lime",
      category: "Fruit",
      image: limeDwarf,
      newprice: 235,
      oldPrice: 285,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 10,
      name: "Calthea",
      category: "Flower",
      image: calthea,
      newprice: 400,
      oldPrice: 440,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 11,
      name: "Whistle Pine",
      category: "Tree",
      image: whistlingPine,
      newprice: 500,
      oldPrice: 555,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 12,
      name: "Purple Passion",
      category: "Fruit",
      image: passionPurple,
      newprice: 320,
      oldPrice: 405,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 13,
      name: "Yellow Passion",
      category: "Fruit",
      image: passionYellow,
      newprice: 320,
      oldPrice: 405,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 14,
      name: "Sacred Mugumo",
      category: "Tree",
      image: sacredMugumo,
      newprice: 950,
      oldPrice: 1020,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
    {
      id: 15,
      name: "Coffee Ruiru",
      category: "Tree",
      image: coffeeRuiru,
      newprice: 250,
      oldPrice: 315,
      description:
        "Description goes here, about 15 words will be enough. Nothing too long.",
    },
  ];

  return products;
};

export const productsNav = [
  {
    name: "All",
  },
  {
    name: "Fruit",
  },
  {
    name: "Tree",
  },
  {
    name: "Flower",
  },
];
