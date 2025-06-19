// components/Navbar/index.js
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/Education" >
                        Education
                    </NavLink>
                    <NavLink to="/Projects" className={({ isActive }) => (isActive ? "active" : "")}>
                        Projects
                    </NavLink>
                    <NavLink to="/Experience" className={({ isActive }) => (isActive ? "active" : "")}>
                        Experience
                    </NavLink>
                    <NavLink to="/Resume" className={({ isActive }) => (isActive ? "active" : "")}>
                        Resume
                    </NavLink>
                    <NavLink to="/Skills" className={({ isActive }) => (isActive ? "active" : "")}>
                        Skills
                    </NavLink>
                    <NavLink to="/Passion" className={({ isActive }) => (isActive ? "active" : "")}>
                        Passion
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;