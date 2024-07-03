import { useParams } from "react-router-dom";
import { DividingLine } from "../../DividingLine";
import tacos from "../../assets/img/tacos.png";
import { Button } from "../Atoms/Button";
import { ReviewCard } from "../../ui/ReviewCard";
import { Comments } from "../../data/data";

export const FoodId = () => {
  const { id } = useParams();

  return (
    <div>
      <DividingLine />
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className="w-full lg:w-6/12 flex justify-center items-center relative flex-col mb-10 lg:mb-0 p-4 lg:p-0 rounded-lg">
          <img src={tacos} alt="" />
        </div>
        <div className="w-full lg:w-6/12 flex flex-col items-center p-4 lg:p-20 mt-0 lg:mt-0 order-1 lg:order-2">
         <div className=" flex-col lg:flex lg:mt-20 mb-10 gap-x-6">
         <h2 className=" text-2xl font-bold">Tacos al Pastor</h2>
          <p className=" font-semibold text-xl">
            Precio: {} <span className=" font-normal"> $10</span>{" "}
          </p>
         </div>
          <div className=" flex justify-center items-center gap-x-6">
            <Button
              text="Detalles"
              customStyle="bg-[#8E0000] py-3 px-6 text-white hover:bg-[#340A0B] rounded-xl"
            />
            <Button
              text="Reviews"
              customStyle="bg-[#340A0B] p-3 text-white hover:bg-[#8E0000] rounded-xl"
            />
          </div>
        </div>
      </div>

      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laboriosam praesentium eius qui, quibusdam tempore ipsam similique
        minima aspernatur voluptatibus deserunt. Tenetur laboriosam quod
        deserunt veniam autem earum molestias, totam ex debitis cum quae nemo
        dolorem unde voluptatibus, repellendus, omnis odio! Recusandae nostrum
        id maxime itaque suscipit, aspernatur debitis reiciendis tenetur fugit
        praesentium ducimus aliquid! Rerum, incidunt! Cum cupiditate maiores
        dolorum impedit aperiam blanditiis, ex hic ipsam eligendi omnis veniam
        distinctio ea in officia non ut necessitatibus illo, ducimus laboriosam
        excepturi! Corrupti similique asperiores natus ab sapiente voluptatum
        labore eos, temporibus nisi impedit dignissimos repellendus tempore
        maxime, sequi iste ea.
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        {Comments.map((item, index) => (
          <ReviewCard
            key={index}
            name={item.name}
            comment={item.comment}
            email={item.email}
          />
        ))}
      </div>


      <DividingLine />
    </div>
  );
};
