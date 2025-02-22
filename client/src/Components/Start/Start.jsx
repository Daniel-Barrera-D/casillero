import ps5Image from '../../assets/Img/ps5.webp'
import './Start.css'

const Start = () => {

    return(
        <section className='start'>
            <div className='start-text'>
                <h1>TODO LO QUE QUIERES ESTÁ EN NUESTRAS MANOS.</h1>
                <p className='start-p'>Pide o envía lo que quieras, desde donde quieras. Nosotros nos encargamos del resto.</p>
                <a className='start-link' href="https://walink.co/1ebc68" target='_blank'>CONTÁCTANOS AHORA</a>
            </div>
            <div>
                <img className='start-image' src={ps5Image} alt="ps5" />
            </div>
        </section>
    )
}

export default Start