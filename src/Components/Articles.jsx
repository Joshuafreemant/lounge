import React from "react";
// import SwiperCore, { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/autoplay";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

import { Autoplay, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const slide_img = [
  {
    title: "Choisir la salle de mariage idéale pour un jour J inoubliable",
    content:
      "Choisir la salle de mariage idéale pour un jour J inoubliable Sommaire : La localisation : un...",
    tag: "Mariage",
  },
  {
    title: "10 Décorations pour une Salle de Mariage Chic et Élégant",
    content:
      "10 Décorations pour une Salle de Mariage Chic et Élégant Vous rêvez de célébrer votre mariage...",
    tag: "Mariage",
  },
  {
    title: "Vous rêvez d’un mariage luxueux",
    content:
      "Sommaire : Hôtels de luxe : des salles raffinées pour un mariage princier Salles de réception...",
    tag: "Mariage",
  },
  {
    title: "Comment trouver le thème de mariage idéal et sublimer votre salle",
    content:
      "Organiser un mariage implique de nombreux choix L’un des plus importants est celui du thème,...",
    tag: "Mariage Non classé",
  },
  {
    title: "Les 20 thèmes de mariage les plus populaires en 2023",
    content:
      "Sommaire : Votre grand jour approche et vous rêvez d’un mariage à votre image  Le choix du...",
    tag: "Mariage",
  },
];

const Articles = () => {
  return (
    <div className="p-8">
      <h1
        className="text-center font-extrabold p-5 text-[37px] uppercase leading-9 md:text-[45px] 
        lg:text-[53px]"
      >
        Nos derniers articles
      </h1>
      <Swiper
        spaceBetween={0}
        effect={"slide"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.8}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay
        pagination={true}
        className="mySwiper swipper block "
      >
        {slide_img.map((text, i) => {
          return (
            <>
              <SwiperSlide key={i} className="">
                <div className="flex flex-col gap-2 mr-4 ">
                  <h2 className="font-extrabold text-[18px] text-left">
                    {text.title}
                  </h2>
                  <p className="text-[#86868B]">{text.tag}</p>
                  <p className="text-[#86868B] text-left">{text.content}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

     
    </div>
  );
};

export default Articles;
