import {Carrousel} from "./entities/Carrousel.js";

const filePathCars = "sources/images/cars/";
const imageFileCars = [
  "acura_rdx.jpg",
  "audi_r8_gt.jpg",
  "chevrolet-corvette.jpg",
  "ferrari-296-gtb.jpg",
  "Ford_Mustang.jpg",
  "honda_accord_sedan.jpg",
  "hyundai_tucson.jpg",
  "Mazda-RX-7.jpg",
  "mclaren_720s.jpg",
  "mercedes-benz-amg_gle_53_4matic.jpg",
  "nissan_ariya_long_range_2wd.jpg",
  "peugeot_3008.jpg",
  "porsche_macan_r4.jpg",
  "renault_captur.jpg",
  "subaru_impreza_22b_sti.jpg"
];

const filePathImgMac = "sources/images/mac/";
const imageFileNamesMac = [
  "mac_1.jpg",
  "mac_2.jpg",
  "mac_3.jpg",
  "mac_4.jpg",
  "mac_5.jpg",
]


const filePathAnimals = "sources/images/animals/";
const imageFileNameAnimals = [
    "animal_01.jpg",
    "animal_02.jpg",
    "animal_03.jpg",
    "animal_04.jpg",
    "animal_05.jpg",
    "animal_06.jpg",
    "animal_07.jpg",
    "animal_08.jpg",
    "animal_09.jpg",
    "animal_10.jpg"
    ]

let demonstratingImage = 0;
let imageElementsAmount = 0;
let imageWidth;
let isAutoplaying = false;
let autoplayingInterval;
const moveTime = 1;

// const carrousel = new Carrousel(imageFileCars, filePathCars);

// const carrousel = new Carrousel(imageFileCars, filePathCars);
// carrousel.test();

// const carrousel2 = new Carrousel(imageFileNamesMac, filePathImgMac);
// carrousel2.test();
//
const carrousel3 = new Carrousel(imageFileNameAnimals, filePathAnimals);
// carrousel3.test();
