import House from "../assets/icons/house.svg";
import Planet from "../assets/icons/planet.svg";
import Spaceship from "../assets/icons/spaceship.svg";

import Enceladus from "../assets/destinations/enceladus.svg";

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
    name: "Enceladus 1",
    image: Enceladus,
    location: "The Saturn System",
    distance: "9.5",
    population: "3920",
    description: `is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n\nExplore this amazing cosmic marvel in a safe and fast trip with our aerospace company`,
    price: "999.990 €",
    ticketType: "one way ticket",
  },
  {
    name: "Earth 2",
    image: Enceladus,
    location: "The Saturn System",
    distance: "9.5",
    population: "3920",
    description:
      "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n\nExplore this amazing cosmic marvel in a safe and fast trip with our aerospace company",
    price: "999.990 €",
    ticketType: "one way ticket",
  },
  {
    name: "Saturn 3",
    image: Enceladus,
    location: "The Saturn System",
    distance: "9.5",
    population: "3920",
    description:
      "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n\nExplore this amazing cosmic marvel in a safe and fast trip with our aerospace company",
    price: "999.990 €",
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
