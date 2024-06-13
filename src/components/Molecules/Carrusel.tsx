import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carrusel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };

  return (
     <div className="max-w-screen-lg mx-auto mt-10 px-2">
      <Slider {...settings}>
        <div className=" rounded-md bg-white">
            <h1>hola</h1>
        
        </div>
        <div className=" rounded-md">
        
        </div>
        <div className=" rounded-md">
        

        </div>
        {/* Agrega más elementos según sea necesario */}
      </Slider>
      </div>
  )
}
