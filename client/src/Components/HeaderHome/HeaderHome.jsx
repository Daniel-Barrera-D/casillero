import NavbarHeader from "../NavbarHeader/NavbarHeader"
import './HeaderHome.css'

const HeaderHome = () => {

    return(
        <header className="header">
            <img className="logo" src="../logo.png" alt="logo" />
            <NavbarHeader />
        </header>
    )
}

export default HeaderHome