import { BoxIcon, HandsIcon, PillsIcon } from '../../Utils/Icons'
import CardFee from '../CardFee/CardFee'
import './Fee.css'
import cellPhoneImage from '../../assets/Img/cellphone.png'

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
                annotation: '*Paquete mayor a $200 USD o más de 6 unidades.',
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
            <div className='fee-cellphone'>
                <div className='fee-div-cellphone'>
                    <img className='fee-cellphone-image' src={cellPhoneImage} alt="cellphone" />
                </div>
                <div className='fee-cellphone-text'>
                    <h2 className='fee-cellphone-title'>Celular X unidad:</h2>
                    <h3 className='fee-cellphone-price'>$80 USD*.</h3>
                    <h4 className='fee-cellphone-description'>*Sin importar la cantidad o el precio.</h4>
                    <p>NOTA: El domicilio o envío nacional es un valor adicional que se agrega al final de tu factura de importación.</p>
                    <p>SEGUROS: Nos importa que tus paquetes lleguen correctamente. Por eso, te brindamos un seguro que protege de pérdida o daño total de tus productos y cubre el 100% del valor declarado y/o facturado.</p>
                    <h4 className='fee-cellphone-subtitle'>VALOR DE LOS SEGUROS:</h4>
                    <p>• Si el producto cuesta menos de $300 USD el valor del seguro es del 7% sobre el valor del producto.<br />• Si el producto cuesta más de $301 USD el valor del seguro es del 5% sobre el valor del producto.</p>
                </div>
            </div>
        </section>
    )
}

export default Fee