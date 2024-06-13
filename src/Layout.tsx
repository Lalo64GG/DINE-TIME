import { Outlet } from "react-router-dom"
import { NavBard } from "./components/Organims/NavBard"

export const Layout = () => {
  return (
    <div>
        <div className=" shadow-lg sticky top-0 z-50 bg-white">
            <NavBard/>
        </div>
          
        <div>
            <main className="px-10">
                <Outlet/>
            </main>
        </div>
        
    </div>
  )
}
