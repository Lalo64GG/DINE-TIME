import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation desde react-router-dom

export const Nav = () => {
  const isLogged = false;
  const location = useLocation(); // Obtén la ubicación actual del router

  // Estado para guardar la ruta activa
  const [activePath, setActivePath] = useState(location.pathname);

  // Función para actualizar la ruta activa
  const handleSetActive = (path :any) => {
    setActivePath(path);
  };

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">DINE-TIME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            to="/menu"
            className={activePath === "/menu" ? "text-secondary" : "text-foreground"} // Cambia el color si está en /menu
            onClick={() => handleSetActive("/menu")} // Actualiza la ruta activa
          >
            Menú
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/customers"
            className={activePath === "/customers" ? "text-secondary" : "text-foreground"} // Cambia el color si está en /customers
            onClick={() => handleSetActive("/customers")} // Actualiza la ruta activa
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#" className="text-foreground">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {isLogged ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <></>
      )}
    </Navbar>
  );
};
