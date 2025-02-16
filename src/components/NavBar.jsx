import { Link } from "react-router-dom";

function NavBar(){
    return <nav className="navbar flex flex-row w-full h-15 p-2 text-[var(--color-tertiary)] bg-[var(--color-primary)] items-center">
        <div className="navbar-brand w-[70%]">
            <Link to={"/"} className="nav-link">Movie App</Link>
        </div>
        <div className="flex w-[30%] justify-end space-x-6">
        <Link to={"/"} className="nav-link">
            Home
        </Link>
        
        <Link to={"/favorites"} className="nav-link">
             Favorites
        </Link>
        
        </div>
    </nav>
}
export default NavBar