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

const carrousel = new Carrousel({
    sliderId: `cars-slider`,
    images: imageFileCars,
    filePathImg: filePathCars,
    colorSliderBackground: "#777777"
    }
);

const carrouselSuper = new Carrousel({
    sliderId: `animals-slider`,
    images: imageFileNameAnimals,
    filePathImg: filePathAnimals,
    moveDuration: 2,
    disableSwitchers: true,
    moveDirection: "left",
    colorSliderBackground: "cyan"
    }
);

const carrouselExtra = new Carrousel({
    sliderId: `mac-slider`,
    images: imageFileNamesMac,
    filePathImg: filePathImgMac,
    moveDuration: 1,
    disableSwitchers: true,
    disableAutoplay: true,
    moveDirection: "right",
    colorSliderBackground: "blue"
    }
);