import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import style from "../css/Carousel.module.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={style.carousel_item} style={{ width: width }}>
      <img src={children} alt="" />
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className={style.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button onClick={() => {updateIndex(activeIndex - 1);}} className={style.slideIt}><i className="fa fa-angle-left"></i></button>
      <button onClick={() => {updateIndex(activeIndex + 1);}} className={style.slideIt}><i className="fa fa-angle-right"></i></button>
      <div
        className={style.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={style.indicators}>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={index === activeIndex ? `${style.pagination_item} ${style.active}` : `${style.pagination_item}`} onClick={() => {updateIndex(index);}}>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
