import {NavLink} from 'react-router-dom';



const Navbar = () => {
    return (
        <header className="header-container">
            <nav className="header-elements-container">
                <ul className="items-container">
                    <NavLink to='/'><li>🏠Home</li></NavLink>
                    <NavLink to='/Contacto'><li>📒Contacto</li></NavLink>
                </ul>
                <ul className="items-container">
                    <li>Happy Cake🍰</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;