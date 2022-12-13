import React from 'react'
// Import Swiper styles & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper";

type CarouselItem = {
  title:  React.ElementType,
  textContent: React.ElementType,
  button:  React.ElementType,
}

type CarouselProps = {
  items: CarouselItem[]
}

export const Carousel: React.FC<CarouselProps> = ({
  items
})  => {

  const itemsToRender: CarouselItem[] = []

  if(items) {
    items.map((item) => {
       itemsToRender.push(item);
    })
  }


  return (
    <Swiper
    direction={"vertical"}
    slidesPerView={1}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    className="mySwiper"
    >
      {
        itemsToRender.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <items.title />
              <items.textContent />
              <items.button />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};
