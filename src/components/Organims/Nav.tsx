// Nav.tsx
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAdminInfo } from "../../Tools/Hooks/useAdminInfo";
import { useAuth } from "../../Tools/AuthContextType";

export const Nav = () => {
  let isLogged = false;
  if (localStorage.getItem("token")) {
    isLogged = true;
  }
  const location = useLocation(); 
  const [activePath, setActivePath] = useState(location.pathname);
  const handleSetActive = (path: any) => setActivePath(path);
  const { logout } = useAuth();


  const { adminInfo, loading, error } = useAdminInfo();

  console.log(adminInfo?.administrador.nombre)

  if (!isLogged) {
    return (
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">DINE-TIME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              to="/menu"
              className={
                activePath === "/menu" ? "text-secondary" : "text-foreground"
              }
              onClick={() => handleSetActive("/menu")}
            >
              Menú
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/#form-reservation"
              className={
                activePath === "/#form-reservation"
                  ? "text-secondary"
                  : "text-foreground"
              }
              onClick={() => handleSetActive("/#form-reservation")}
            >
              Reservación
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="#" className="text-foreground">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">DINE-TIME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link
            to="/admin/home"
            className={
              activePath === "/admin/home" ? "text-secondary" : "text-foreground"
            }
            onClick={() => handleSetActive("/admin/home")}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/admin/waiters"
            className={
              activePath === "/admin/waiters" ? "text-secondary" : "text-foreground"
            }
            onClick={() => handleSetActive("/admin/waiters")}
          >
            Waiters
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/admin/tables"  className={
              activePath === "/admin/tables" ? "text-secondary" : "text-foreground"
            }
            onClick={() => handleSetActive("/admin/tables")}>
            Tables
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/admin/food"  className={
              activePath === "/admin/food" ? "text-secondary" : "text-foreground"
            }
            onClick={() => handleSetActive("/admin/food")}>
            Food
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={`${adminInfo?.administrador.nombre} ${adminInfo?.administrador.apellido}`}
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{adminInfo?.administrador.correo}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => logout()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
