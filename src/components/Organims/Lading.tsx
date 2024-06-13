import { DividingLine } from "../../DividingLine";
import tacos from "../../assets/img/tacos.png"
import { Button } from "../Atoms/Button";
import { Carrusel } from "../Molecules/Carrusel";

export const Lading = () => {
  return (
    <div>
      <DividingLine />
      <div className="w-[80%] flex justify-center items-center mx-auto">
        <div className=" w-full flex flex-col lg:flex-row items-center lg:items-stretch ">
          <div className=" w-full lg:w-6/12 flex justify-center items-center relative flex-col px-10">
            <h2 className="font-bold text-6xl lg:text-5xl text-center lg:text-left mb-8">
              ¡Reserva tu lugar para una explosión de sabor!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa
              cupiditate dicta earum beatae, praesentium dolorum vero cumque
              excepturi fugiat porro explicabo aperiam aliquid quidem ratione.
              Modi molestias sunt aspernatur natus cum, blanditiis dignissimos,
              rem excepturi dolorum numquam impedit quidem ratione ullam illum
              non animi soluta repudiandae fuga laudantium incidunt!
            </p>
            <div className=" flex justify-center items-center gap-x-6 mt-5">
              <Button text="Reservar" customStyle="bg-[#340A0B] p-3 text-white hover:bg-[#8E0000]"/>
              <Button text="Menú" customStyle="bg-[#8E0000] py-3 px-6 text-white hover:bg-[#340A0B]" />
            </div>
          </div>





          <div className="  w-full lg:w-6/12 flex flex-col items-center lg:items-center p-8 lg:p-16 mt-10">
            <div className=" bg-[#340A0B] w-96 h-[33rem] rounded-lg  shadow-2xl" >
                <div className=" flex justify-center items-center py-40 ">
                <img src= { tacos } />
                </div>
            </div>
          </div>
        </div>
      </div>


      {/* AQUIIII!!! */}
      <div className=" bg-gradient-to-b from-customRed to-customDarkRed h-96 w-full flex items-center justify-center text-white font-bold text-2xl mb-10">
        <Carrusel/>
      </div>
    </div>
  );
};
