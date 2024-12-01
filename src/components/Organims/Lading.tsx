import { DividingLine } from "../../DividingLine";
import tacos from "../../assets/img/tacos.png";
import { Button } from "../Atoms/Button";
import { Carrusel } from "../Molecules/Carrusel";
import { Providers } from "../../Tools/Providers";
import { ThemeSwitcher } from "../../ui/ThemeSwitcher";
import { DataLoader } from "../../ui/Spinner";
import { FormReser } from "../Molecules/FormReser";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Lading = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  let activateSpinner = true;

  if(!activateSpinner){
    return (
      <DataLoader/>
    )
  }

  return (
   <Providers>
    <ThemeSwitcher/>
     <div>
      <DividingLine />

      
      <div className="w-[80%] flex justify-center items-center mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch">
          <div className="w-full lg:w-6/12 flex justify-center items-center relative flex-col mb-10 lg:mb-0 p-4 lg:p-0 rounded-lg">
            <h2 className="font-bold text-4xl lg:text-5xl text-center lg:text-left mb-8">
              ¡Reserva tu lugar para una explosión de sabor!
            </h2>
            <p className="text-base lg:text-lg mb-5 lg:mb-8 px-2 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa
              cupiditate dicta earum beatae, praesentium dolorum vero cumque
              excepturi fugiat porro explicabo aperiam aliquid quidem ratione.
              Modi molestias sunt aspernatur natus cum, blanditiis dignissimos,
              rem excepturi dolorum numquam impedit quidem ratione ullam illum
              non animi soluta repudiandae fuga laudantium incidunt!
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-x-6 mt-5">
              <Button
                text="Reservar"
                customStyle="bg-[#340A0B] p-3 text-white hover:bg-[#8E0000] rounded-xl"
              />
              <Button
                text="Menú"
                customStyle="bg-[#8E0000] py-3 px-6 text-white hover:bg-[#340A0B] rounded-xl"
                route="/menu"
              />
            </div>
          </div>

          <div className="w-full lg:w-6/12 flex flex-col items-center p-4 lg:p-16 mt-10 lg:mt-0 order-1 lg:order-2">
            <div className="relative bg-[#340A0B] w-full max-w-md h-96 rounded-lg shadow-2xl flex justify-center items-center overflow-hidden">
              <img
                src={tacos}
                alt="Tacos"
                className="w-full h-full object-cover transform lg:translate-x-10 lg:translate-y-10 rounded-lg shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-customRed to-customDarkRed  mb-10 p-8 mt-20 ">
      <Carrusel />
      </div>

      <div id="form-reservation">
        <h2 className="text-center font-bold text-2xl">¡Haz tu Reserva!</h2>
        <p className=" text-center font-semibold mb-5">y no pierdas tiempo esperando </p>
        <p className=" text-center font-semibold mb-5">Llena el formulario Contacto para poder desbloquear reservaciones</p>
        <FormReser/>
      </div>
     
    </div>
   </Providers>
  );
};
