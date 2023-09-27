import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vegetables">Vegetables</NavLink>
                    </li>
                    <li>
                        <NavLink to="/smartphones">Smartphones</NavLink>
                    </li>
                    <li>
                        <NavLink to="/laptops">Laptops</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}



export default NavBar;
