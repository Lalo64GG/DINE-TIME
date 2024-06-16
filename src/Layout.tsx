import { Outlet } from "react-router-dom"
import { Nav } from "./components/Organims/Nav"

export const Layout = () => {
  return (
    <div>
        <div className=" shadow-lg sticky top-0 z-50 bg-white">
            <Nav/>
        </div>
          
        <div>
            <main className="px-10">
                <Outlet/>
            </main>
        </div>
        
    </div>
  )
}
