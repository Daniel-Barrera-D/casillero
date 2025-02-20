import { Link }  from 'react-router-dom'
import './NavbarHeader.css'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Button from '../Button/Button'

const NavbarHeader = () => {

    const [menu, setMenu] = useState( false )
    const [isOpen, setOpen] = useState( false )

    const handleClickMenu = () => {
        setMenu(!menu);
        setOpen(!isOpen);
    }

    const handleCloseMenu = (ref) => {
        setMenu(false)
        setOpen(null)
        // goToRef(ref)
    }

    menu ? document.body.style.overflow="hidden" : document.body.style.overflow=""

    return(
        <>
            <div className='header-icon-nav'>
                <div className='nav-header'>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} onToggle={handleClickMenu}/>
                    <Link to='/'><img className="logo-nav" src="../logo.png" alt="logo" /></Link>
                </div>
            </div>
            <nav className={`navbar-header ${ menu ? 'isActive' : ''}`}>
                <Link to='/' className='text-navbar' onClick={() => handleCloseMenu()}>INICIO</Link>
                <Link className='text-navbar' onClick={() => handleCloseMenu()}>NOSOTROS</Link>
                <Link className='text-navbar' onClick={() => handleCloseMenu()}>GUÍA DE AYUDA</Link>
                <Link className='text-navbar' onClick={() => handleCloseMenu()}>CALCULA TU ENVÍO</Link>
                {/* <Link className='text-navbar' onClick={() => handleCloseMenu()}>INICIAR SESIÓN</Link> */}
                <div className='buttons-navbar'>
                    <Button to='login' text='INICIAR SESIÓN' size='md' color='white'/>
                    <Button to='register' text='CREAR CUENTA' size='md' color='blue'/>
                </div>
            </nav>
        </>
    )
}

export default NavbarHeader