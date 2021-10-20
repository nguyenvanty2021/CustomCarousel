import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  // right
  const nextSlide = () => {
    // không phải ở cuối mảng thì khi click next sẽ tăng index lên 1
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    }
    // khi ở cuối mảng mà lại click next thì cho index quay lại 1
    else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  // prev
  const prevSlide = () => {
    // không phải ở đầu mảng thì khi click prev giảm index đi 1
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
    // đang ở đầu mảng mà còn click prev thì cho index = cuối mảng
    else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            // index+1 === thằng nào thì show ra ảnh đó, ngược lại thì ẩn
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {dataSlider.map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            // index === thằng nào thì thằng đó là đốt màu đen, ngược lại là trắng
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
