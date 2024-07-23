import Slider from "react-slick";
import { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/img/dineTime.jpg";
import img2 from "../../assets/img/devWizard.jpg";

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
    <div className="slider-container" >
      <Slider {...settings} ref={sliderRef} >
        <div className="slide-item">
          <img src={img} alt="Slide 1" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img2} alt="Slide 2" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img} alt="Slide 3" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img2} alt="Slide 4" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img} alt="Slide 5" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img2} alt="Slide 6" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img} alt="Slide 7" className="mx-4 p-4" />
        </div>
        <div className="slide-item">
          <img src={img2} alt="Slide 8" className="mx-4 p-4" />
        </div>
      </Slider>
    </div>
  );
};
