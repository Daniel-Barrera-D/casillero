import { Link }  from 'react-router-dom'
import './NavbarHeader.css'

const NavbarHeader = () => {
    return(
        <>
            <nav className='navbar-header'>
                <Link className='text-navbar'>Inicio</Link>
                <Link className='text-navbar'>Nosotros</Link>
                <Link className='text-navbar'>Calcular Envío</Link>
                <Link className='text-navbar'>Crear Cuenta</Link>
                <Link className='text-navbar'>Iniciar Sesión</Link>
            </nav>
        </>
    )
}

export default NavbarHeader