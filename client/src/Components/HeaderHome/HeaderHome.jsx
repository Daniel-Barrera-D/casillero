import { Link } from "react-router-dom"
import NavbarHeader from "../NavbarHeader/NavbarHeader"
import './HeaderHome.css'
import { useState } from "react"

const HeaderHome = () => {

    const [visible, setVisible] = useState(true)

    const newClass = visible ? 'visible' : 'hidden'

    return(
        <header className={`header ${newClass}`}>
            <Link to='/'>
                <img className="logo" src="../logo.png" alt="logo" />
            </Link>
            <NavbarHeader />
        </header>
    )
}

export default HeaderHome