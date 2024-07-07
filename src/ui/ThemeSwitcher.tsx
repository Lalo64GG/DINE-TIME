import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "./svg/MoonIcon";
import { SunIcon } from "./svg/SunIcon";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      checked={resolvedTheme === "dark"}
      size="lg"
      color="secondary"
      onChange={handleChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          < MoonIcon className={className}/>
        ) : (
          <SunIcon className={className}/>
        )
      }
      
    >
        <span className="sr-only">{ theme }</span>
    </Switch>
  );
};
