import { ExportIcon, ShopperIcon, StarIcon } from '../../Utils/Icons'
import CardAboutUs from '../CardAboutUs/CardAboutUs'
import './AboutUs.css'

const AboutUs = () => {

    const dataCardsAbout = [
        {
            id: 1,
            title: 'Casillero Virtual',
            description: 'Gestionamos el envío de tus compras desde Estados Unidos o China hasta Colombia, garantizando un proceso ágil y seguro desde la recepción en nuestra bodega hasta la entrega en tu domicilio.',
            icon: <StarIcon />
        },
        {
            id: 2,
            title: 'Personal Shopper',
            description: 'Realizamos tus compras internacionales garantizando el mejor precio del mercado. Solo envíanos el enlace del producto, y te daremos el costo total con entrega directa en tu hogar, sin cargos adicionales.',
            icon: <ShopperIcon />
        },
        {
            id: 3,
            title: 'Exportaciones',
            description: 'Ofrecemos envíos globales desde Colombia, incluyendo Estados Unidos. Envíanos las dimensiones, el peso, el valor comercial y la factura de compra para tramitar tu envío. Consulta nuestras características y requisitos.',
            icon: <ExportIcon />
        }
    ]

    return(
        <section className='about-us'>
            <div className='about-us-text'>
                <h2 className='about-us-title'>ESTAMOS CONTIGO DESDE EL ORIGEN HASTA EL DESTINO.</h2>
                <p>Ofrecemos soluciones logísticas para que envíes o recibas los productos que quieres desde cualquier parte del mundo hasta<br/>tu casa. Somos expertos en lo que hacemos, por eso te aseguramos que puedes confiar en nosotros.</p>
                <h2 className='about-us-subtitle'>Estos son nuestros servicios principales:</h2>
            </div>
            <div className='about-cards'>
                {
                    dataCardsAbout.map(data => (
                        <CardAboutUs key={data.id} title={data.title} description={data.description} icon={data.icon}/>
                    ))
                }
            </div>
        </section>
    )
}

export default AboutUs