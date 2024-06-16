import Slider from "react-slick";
import { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carrusel = () => {
  const sliderRef = useRef<Slider>(null);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Llama al método slickPlay() del slider
    }
  };

  useEffect(() => {
    play(); // Ejecuta la función play() cuando el componente se monta
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        <div className="slide-item">
          <div className="bg-green-500 mx-4 p-4">
            <h3>1</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-white mx-4 p-4">
            <h3>2</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-green-500 mx-4 p-4">
            <h3>3</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-white mx-4 p-4">
            <h3>4</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-green-500 mx-4 p-4">
            <h3>5</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-white mx-4 p-4">
            <h3>6</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-green-500 mx-4 p-4">
            <h3>7</h3>
          </div>
        </div>
        <div className="slide-item">
          <div className="bg-white mx-4 p-4">
            <h3>8</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};
