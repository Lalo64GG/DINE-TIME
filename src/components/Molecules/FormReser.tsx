import { DateInput, Input, TimeInput } from "@nextui-org/react";
import { CalendarDate, parseDate, parseTime } from "@internationalized/date";
import { CalendarIcon } from "../../ui/CalendarIcon";
import { Button } from "../Atoms/Button";
import { useState } from "react";

export const FormReser = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false); // Estado para controlar la validación

  const [amountOfPeople, setAmountOfPeople] = useState("");
  const [date, setDate] = useState(parseDate("2024-04-04"));
  const [time, setTime] = useState(parseTime("12:00"));

  const handleConfirm = () => {
    // Verificar si alguno de los campos del primer formulario está vacío
    if (!name.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setIsInvalid(true); // Activar isInvalid si hay campos vacíos
      setIsConfirmed(false); // Asegurarse de que isConfirmed sea false si hay campos vacíos
    } else {
      setIsConfirmed(true); // Confirmar si todos los campos están llenos
      setIsInvalid(false); // Resetear isInvalid si todos los campos están llenos
    }
  };

  const handleSubmit = () => {
    const data = {
      name,
      lastName,
      email,
      phone,
      amountOfPeople,
      date,
      time,
    };

    // Replace with your API call
    console.log("Submitting data to API:", data);
  };

  return (
    <div className="flex justify-center items-center w-full lg:w-[80%] mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
        <form className="w-full p-4 lg:w-6/12 flex flex-col justify-center items-center mb-10 lg:mb-10 lg:px-16 rounded-lg space-y-5 bg-white shadow-lg">
          <h2 className="font-semibold text-center text-2xl">Contacto</h2>
          <div className="w-full">
            <Input
              size="sm"
              isRequired
              type="text"
              label="Name"
              placeholder="Enter your name"
              fullWidth
              isInvalid={isInvalid && !name.trim()}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              size="sm"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={`w-full ${isInvalid && !email.trim() ? 'border-red-500' : ''}`}>
            <Input
              size="sm"
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              isInvalid={isInvalid && !email.trim()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              size="sm"
              isRequired
              type="text"
              label="Number"
              placeholder="Enter your number"
              fullWidth
              isInvalid={isInvalid && !phone.trim()}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center">
            <Button
              text={isConfirmed ? "Editar" : "Confirmar"}
              customStyle="px-4 py-2 rounded-xl bg-[#8E0000] hover:bg-[#340A0B] text-white"
              handlePress={handleConfirm}
            />
          </div>
        </form>

        <form className="w-full lg:w-6/12 flex flex-col items-center p-4 lg:p-16 mt-10 lg:mt-0 mb-10 bg-cover bg-center bg-no-repeat shadow-lg"
              style={{ backgroundImage: 'url(https://interioresminimalistas.com/wp-content/uploads/2019/01/restaurante-raco-de-larnau-de-carles-segarra-foto-david-zarzoso-0-960x816.jpg)', height: 'auto'}}>
          <h2 className="font-semibold text-center text-2xl mb-5">Reservación</h2>
          <div className="w-full mb-5">
            <Input
              size="sm"
              isRequired
              type="text"
              label="Amount of people"
              placeholder="Enter the number of people"
              fullWidth
              isInvalid={isInvalid && !amountOfPeople.trim()}
              value={amountOfPeople}
              onChange={(e) => setAmountOfPeople(e.target.value)}
              isDisabled={!isConfirmed}
            />
          </div>

          <div className="w-full mb-5">
            <DateInput
              label="Date Input"
              defaultValue={parseDate("2024-04-04")}
              placeholderValue={new CalendarDate(1995, 11, 6)}
              startContent={<CalendarIcon />}
              className="w-full"
              value={date}
              isInvalid={isInvalid && !date}
              onChange={setDate}
              isDisabled={!isConfirmed}
            />
          </div>

          <div className="w-full mb-5">
            <TimeInput
              isRequired
              label="Event Time"
              value={time}
              isInvalid={isInvalid && !time}
              onChange={setTime}
              isDisabled={!isConfirmed}
            />
          </div>

          {isConfirmed && !isInvalid && (
            <div className="w-full flex justify-center items-center">
              <Button
                text="Enviar"
                customStyle="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-700 text-white"
                handlePress={handleSubmit}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
