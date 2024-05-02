import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <p className="logo">BLOG</p>
            <nav>
                <NavLink to ="/">Home></NavLink>
                <NavLink to ="/">Contact></NavLink>
               
            </nav>
            <div>
                Theme Switch
            </div>
        </header>
    )
}