/* eslint-disable react/prop-types */
import './CardFee.css'

const CardFee = ( props ) => {

    const { icon, title, fee, annotation, color } = props

    return( 
        <>
            <div className={`card-fee ${color}`}>
                <div className={`card-fee-image ${color}`}>
                {icon}
                </div>
                <div>
                    <h3 className={`card-fee-title ${color}`}>{title}</h3>
                    <h2 className={`card-fee-description ${color}`}>{fee}</h2>
                    <h4 className='card-fee-annotation'>{annotation}</h4>
                </div>
            </div>
        </>
    )
}

export default CardFee