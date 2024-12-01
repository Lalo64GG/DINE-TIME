import { DateInput, Input, TimeInput } from "@nextui-org/react";
import {
  CalendarDate,
  parseDate,
  parseTime,
  now,
} from "@internationalized/date";
import { CalendarIcon } from "../../ui/svg/CalendarIcon";
import { Button } from "../Atoms/Button";
import { useState } from "react";
import { useInputValidation } from "../../Tools/Hooks/useInputValidation";
import { usePost } from "../../Tools/Hooks/usePost";
import { Alert } from "../../ui/Alert";

export const FormReser = () => {
  const { handlePress } = usePost();
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  const name = useInputValidation("");
  const lastName = useInputValidation("");
  const email = useInputValidation("");
  const phone = useInputValidation("");
  const amountOfPeople = useInputValidation("");

  const currentTime = now("America/Mexico_City"); // Obtiene la hora actual en tu zona horaria
  const currentHour = String(currentTime.hour).padStart(2, "0");
  const currentMinute = String(currentTime.minute).padStart(2, "0");

  const [time, setTime] = useState(
    parseTime(`${currentHour}:${currentMinute}`)
  );

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [date, setDate] = useState(
    parseDate(
      `${año}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`
    )
  );

  const handleConfirm = () => {
    name.validate();
    lastName.validate();
    email.validate();
    phone.validate();

    if (
      !name.value.trim() ||
      !lastName.value.trim() ||
      !email.value.trim() ||
      !phone.value.trim()
    ) {
      setIsConfirmed(false);
      setAlert({ message: "Por favor, llena todos los campos", type: "error" });
    } else {
      setIsConfirmed(true);
    }
  };

  const handleSubmit = async () => {
    const url = import.meta.env.VITE_API_URL;
    console.log(url);

    const data = {
      nombre: name.value,
      apellido: lastName.value,
      email: email.value,
      phone: phone.value,
      amountOfPeople: parseInt(amountOfPeople.value),
      dia: date.toString(),
      hora: time.toString(),
    };

    try {
      const success = await handlePress(`${url}/reservaciones`, data);
      if (!success) {
        setAlert({ message: "Error al validar los datos", type: "error" });
        return;
      }

      setAlert({ message: "Reservación exitosa", type: "success" });
    } catch (error: any) {}
  };

  const validateAmountOfPeople = (value: string) => {
    const parsedValue = parseInt(value);
    if (parsedValue < 1) {
      setAlert({
        message: "El número de personas debe ser mayor a 0",
        type: "error",
      });
      return;
    }
    amountOfPeople.setValue(value);
  };

  const validateDate = (selectedDate: CalendarDate) => {
    const today = now("America/Mexico_City");
    if (selectedDate.compare(today) < 0) {
      setAlert({
        message: "No puedes seleccionar una fecha anterior a hoy",
        type: "error",
      });
      return;
    }
    setDate(selectedDate);
  };

  // Validación para no aceptar horas anteriores
  const validateTime = (selectedTime: string) => {
    const [selectedHour, selectedMinute] = selectedTime.split(":").map(Number);

    // Compara la hora seleccionada con la hora actual
    if (
      selectedHour < currentTime.hour ||
      (selectedHour === currentTime.hour && selectedMinute < currentTime.minute)
    ) {
      setAlert({
        message: "No puedes seleccionar una hora anterior a la actual",
        type: "error",
      });
      return;
    }

    setTime(
      parseTime(
        `${String(selectedHour).padStart(2, "0")}:${String(
          selectedMinute
        ).padStart(2, "0")}`
      )
    );
  };

  return (
    <div className="flex justify-center items-center w-full lg:w-[80%] mx-auto">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
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
              isInvalid={name.isInvalid}
              value={name.value}
              onChange={(e) => name.setValue(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Input
              size="sm"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              fullWidth
              isInvalid={lastName.isInvalid}
              value={lastName.value}
              onChange={(e) => lastName.setValue(e.target.value)}
            />
          </div>
          <div className={`w-full ${email.isInvalid ? "border-red-500" : ""}`}>
            <Input
              size="sm"
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              isInvalid={email.isInvalid}
              value={email.value}
              onChange={(e) => email.setValue(e.target.value)}
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
              isInvalid={phone.isInvalid}
              value={phone.value}
              onChange={(e) => phone.setValue(e.target.value)}
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

        <form
          className="w-full lg:w-6/12 flex flex-col items-center p-4 lg:p-16 mt-10 lg:mt-0 mb-10 bg-cover bg-center bg-no-repeat shadow-lg"
          style={{
            backgroundImage:
              "url(https://interioresminimalistas.com/wp-content/uploads/2019/01/restaurante-raco-de-larnau-de-carles-segarra-foto-david-zarzoso-0-960x816.jpg)",
            height: "auto",
          }}
        >
          <h2 className="font-semibold text-center text-2xl mb-5">
            Reservación
          </h2>
          <div className="w-full mb-5">
            <Input
              size="sm"
              isRequired
              type="text"
              label="Amount of people"
              placeholder="Enter the number of people"
              fullWidth
              isInvalid={amountOfPeople.isInvalid}
              value={amountOfPeople.value}
              onChange={(e) => validateAmountOfPeople(e.target.value)}
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
              isInvalid={date === undefined}
              onChange={validateDate}
              isDisabled={!isConfirmed}
            />
          </div>

          <TimeInput
            isRequired
            label="Event Time"
            value={time}
            isInvalid={time === undefined}
            onChange={(selectedTime) => validateTime(selectedTime.toString())}
            isDisabled={!isConfirmed}
          />

          {isConfirmed && (
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
