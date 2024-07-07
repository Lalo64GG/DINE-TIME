import { Button } from "../Atoms/Button";
import { waitersData } from "../../data/data";
import { Avatar } from "@nextui-org/react";
import { ModalUi } from "../../ui/Modal";

export const Waiters = () => {


  const waiterFormConfig = {
    name: { label: "Name", placeholder: "Enter your name" },
    position: { label: "Position", placeholder: "Enter your position" },
    email: { label: "Email", placeholder: "Enter your email", type: "email" },
    phone: { label: "Phone", placeholder: "Enter your phone number", type: "tel" },
    photo: { label: "Photo URL", placeholder: "Enter the URL of your photo", type: "url" }
  };

  return (
    <div className="p-5">
      <ModalUi 
      buttonLabel="Add Waiter"
      modalTitle="Add New Waiter"
      inputsConfig={waiterFormConfig}
      onSubmit={() => console.log('Waiter added')}
      footerButtons={[
        { label: "Cancel", color: "danger", variant: "flat", onClick: () => console.log('Cancelled') },
        { label: "Add Waiter", color: "primary", onClick: () => console.log('Waiter added') }
      ]}
      photoIsRequired = { true } 
    />
      <div className="flex flex-wrap gap-4 mt-4 justify-center bg-white shadow-2xl p-4 rounded-lg">
        {waitersData.map((waiter, index) => (
          <div
            key={index}
            className="w-72 h-80 p-6 bg-gradient-to-b from-customRed to-customDarkRed text-white relative rounded-md shadow-2xl transform transition-transform hover:scale-105 hover:cursor-pointer"
          >
            <div className="flex justify-center">
              <Avatar size="lg" className="absolute top-5 shadow-md" />
            </div>
            <h4 className="mt-16 text-center text-lg font-semibold">
              {waiter.name}
            </h4>
            <p className="mb-2 text-center font-semibold">
              Puesto:{" "}
              <span className="text-sm font-normal">{waiter.jobTitle}</span>
            </p>
            <p className="mb-2 text-center">
              No. Telefónico:{" "}
              <span className="text-sm font-normal">{waiter.phone}</span>
            </p>
            <p className="mb-2 text-center">
              Email: {" "}
              <span className="text-sm font-normal"> {waiter.email}</span>
            </p>

            <div className="flex justify-center items-center mt-4">
              <Button
                text="Más información"
                customStyle="rounded-xl bg-white text-black hover:bg-gray-300 px-2 py-2 text-sm  lg:px-4 lg:text-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
