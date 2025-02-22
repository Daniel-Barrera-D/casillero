import { BoxIcon, HandsIcon, PillsIcon } from '../../Utils/Icons'
import CardFee from '../CardFee/CardFee'
import './Fee.css'

const Fee = () => {

    const dataCardsFee = [
            {
                id: 1,
                title: 'Tarifa Regular:',
                fee: '$3,5 USD X LB*.',
                annotation: '*Paquete menor a $200 USD y hasta 6 unidades.',
                color: 'black',
                icon: <BoxIcon />,
            },
            {
                id: 2,
                title: 'Tarifa Comercial:',
                fee: '$5 USD X LB*.',
                annotation: '*Paquete mayor a $200 USD o hasta 6 unidades.',
                color: 'bl',
                icon: <HandsIcon />
            },
            {
                id: 3,
                title: 'Vitamina, suplementos, cosméticos y derivados:',
                fee: '$5 USD X LB*.',
                annotation: '*Sin importar la cantidad o el precio.',
                color: 'w',
                icon: <PillsIcon />
            }
        ]

    return( 
        <section className='fee'>
            <div className='fee-top'>
                <h2 className='fee-top-text'>Somos los más indicados para llevar y traer lo que necesites con la <br/> más alta atención, el mayor cuidado y las mejores tarifas:</h2>
            </div>
            <div className='fee-bottom'>
                {
                    dataCardsFee.map(data => (
                        <CardFee key={data.id} icon={data.icon} title={data.title} fee={data.fee} annotation={data.annotation} color={data.color} />
                    ))
                }
            </div>
        </section>
    )
}

export default Fee