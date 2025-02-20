/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './Button.css'

const Button = (props) => {

    const { to, text, size, color } = props

    return(
        <Link to={to} className={`button-link ${size} ${color}`}>
            {text}
        </Link>
    )
}

export default Button