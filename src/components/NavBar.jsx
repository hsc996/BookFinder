import { NavLink } from "react-router-dom";
import '../styles/NavBar.css';

export function NavBar(){
    return(
        <nav>

            <NavLink to={"/"} className={({isActive}) => {
				return isActive ? "active" : ""
			}}  >
                <h3>Home</h3>
            </NavLink>

            <NavLink to={"/about"} className={({isActive}) => {
				return isActive ? "active" : ""
			}}  >
                <h3>About</h3>
            </NavLink>

        </nav>
    );
}

export default NavBar;