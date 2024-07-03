import { DateInput, Input } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { CalendarIcon } from "../../ui/CalendarIcon";

export const FormReser = () => {
  return (
    <div className=" flex justify-center items-center w-[70%]">
      <form className=" w-1/2 bg-white rounded-lg shadow-2xl mb-10 h-96 p-2">
        <div className=" mb-5">
          <Input
            size="sm"
            isRequired
            type="text"
            label="Name"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-5">
          <Input
            size="sm"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
          />
        </div>

        <div className="mb-5">
          <Input
            size="sm"
            isRequired
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-5">
          <Input
            size="sm"
            isRequired
            type="text"
            label="number"
            placeholder="Enter your number"
          />
        </div>
      </form>

      <form className=" w-6/12  bg-white rounded-lg shadow-2xl">
        <div>
        <DateInput
          label="Date Input"
          defaultValue={parseDate("2024-04-04")}
          placeholderValue={new CalendarDate(1995, 11, 6)}
          labelPlacement="outside"
          startContent={<CalendarIcon />}
        />
        </div>
      </form>
    </div>
  );
};
