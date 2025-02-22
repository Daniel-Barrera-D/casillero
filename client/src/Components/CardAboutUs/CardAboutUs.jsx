/* eslint-disable react/prop-types */
import './CardAboutUs.css'

const CardAboutUs = ( props ) => {

    const { title, description, icon } = props

    return( 
        <>
            <div className='card-about'>
                <div className='card-about-image'>
                {icon}
                </div>
                <h3 className='card-about-title'>{title}</h3>
                <p className='card-about-description'>{description}</p>
            </div>
        </>
    )
}

export default CardAboutUs