import House from "../assets/icons/house.svg";
import Planet from "../assets/icons/planet.svg";
import Spaceship from "../assets/icons/spaceship.svg";

import Enceladus from "../assets/destinations/enceladus.svg";
import Europa from "../assets/destinations/europa.webp";
import Titan from "../assets/destinations/titan.jpg";

import Pack from "../assets/icons/pack.svg";
import Rocket from "../assets/icons/rocket.svg";
import Leaves from "../assets/icons/leaves.svg";

export const menuOptions = [
  {
    name: "Home",
    icon: House,
    url: "/",
  },
  {
    name: "Destinations",
    icon: Planet,
    url: "/destinations",
  },
  {
    name: "Spaceships",
    icon: Spaceship,
    url: "/spaceships",
  },
];

export const sliderOptions = [
  {
    name: "Enceladus",
    image: Enceladus,
    location: "The Saturn System",
    distance: "1.272 billion km",
    population: "Water vapors, Nitrogen, Carbon dioxide, Methane",
    description: `is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n\nExplore this amazing cosmic marvel in a safe and fast trip with our aerospace company`,
    price: "999.999 €",
    ticketType: "one way ticket",
  },
  {
    name: "Europa",
    image: Europa,
    location: "The Jupiter System",
    distance: "628.3 million km",
    population: "Oxygen",
    description:
      "Europa may be the most promising place in our solar system to find present-day environments suitable for some form of life beyond Earth. \n\nEuropa is named for a woman who, in Greek mythology, was abducted by the god Zeus – Jupiter in Roman mythology.",
    price: "777.777 €",
    ticketType: "two way ticket",
  },
  {
    name: "Titan",
    image: Titan,
    location: "The Saturn System",
    distance: "633.14 million km",
    population: "Nitrogen, Methane, Hydrogen",
    description:
      "Saturn’s largest moon Titan is an extraordinary and exceptional world. Among our solar system’s more than 150 known moons, Titan is the only one with a substantial atmosphere. \n\nAnd of all the places in the solar system, Titan is the only place besides Earth known to have liquids in the form of rivers, lakes and seas on its surface.",
    price: "333.333 €",
    ticketType: "return ticket",
  },
];

export const pflOptions = {
  items: [
    {
      name: "pack",
      icon: Pack,
    },
    {
      name: "fly",
      icon: Rocket,
    },
    {
      name: "live",
      icon: Leaves,
    },
  ],
  message1: "Enjoy",
  message2: "a new world",
  arrow: ">",
};
