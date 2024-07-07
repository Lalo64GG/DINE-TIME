import { useNavigate } from "react-router-dom";

type ButtonProps = {
  customStyle?: string;
  text: string;
  route?: string;
  handlePress?: () => void;
};

export const Button = ({
  customStyle,
  text,
  route,
  handlePress,
}: ButtonProps) => {
  const navigate = useNavigate();

  const onClick = (e?:any) => {
    e.preventDefault();
    if (handlePress) {
      handlePress();
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <button
      className={`text-lg font-bold shadow-md active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out lg:px-4 ${
        customStyle ? customStyle : "bg-red-500 p-4 hover:bg-red-800"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
