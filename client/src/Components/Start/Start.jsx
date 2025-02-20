import ps5Image from '../../assets/Img/ps5.webp'
import Button from '../Button/Button'
import './Start.css'

const Start = () => {

    return(
        <div className='start'>
            <section className='start-text'>
                <h1>TODO LO QUE QUIERES ESTÁ EN NUESTRAS MANOS.</h1>
                <p className='start-p'>Pide o envía lo que quieras, desde donde quieras. Nosotros nos encargamos del resto.</p>
                <a className='start-link' href="https://walink.co/1ebc68" target='_blank'>CONTÁCTANOS AHORA</a>
            </section>
            <section>
                <img className='start-image' src={ps5Image} alt="ps5" />
            </section>
        </div>
    )
}

export default Start