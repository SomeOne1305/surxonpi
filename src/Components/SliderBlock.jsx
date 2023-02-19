import React from "react";
// import Slider from "./Slider";
import slider from "../css/Slider.module.scss";
import { slides } from "./Images";
import Carousel, { CarouselItem } from "./Carousel";

const SliderBlock = () => {
  return (
    <div className={slider.SliderBlock}>
      <div className={slider.container}>
        <Carousel>
          {slides.map((item, index) => {
            return (
              <CarouselItem key={index * 4 + "hello"}>
                {item.slide}
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderBlock;
