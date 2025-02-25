import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useExchangeRate from '../../Hooks/useExchangeRate'
import './CalculateShipping.css'

const CalculateShipping = () => { 

    const { register, handleSubmit, reset } = useForm()
    const [ total, setTotal ] = useState(0)

    const usdToCop = useExchangeRate()

    const onSubmit = (data) => { 
        const { weight, value, quantity } = data

        const result = Math.ceil(weight) * (value > 200 || quantity > 6 ? 5 : 3.5) * usdToCop
        
        setTotal(result.toFixed(0))

        reset()
    }

    return( 
        <section className='calculate-shipping'>
            <h2>Calculadora de envíos</h2>
            <form className='calculate-form' onSubmit={ handleSubmit(onSubmit) }>
                <div className='calculate-weight'>
                    <label htmlFor="weight">Peso del paquete (LB):</label>
                    <input id='weight' type="number" step="0.01" {...register('weight', { required: true })}/>
                </div>
                <div>
                    <label htmlFor="quantity">Ingrese la cantidad del producto:</label>
                    <input id='quantity' type="number" step="0.01" {...register('quantity', { required: true })}/>
                </div>
                <div>
                    <label htmlFor="value">Ingrese el valor del paquete:</label>
                    <input id='value' type="number" step="0.01" {...register('value', { required: true })}/>
                </div>
                <button className='calculate-button' type='submit'>Calcular</button>
            </form>

            { total > 0 && <p className='calulate-total'>El valor total es aproximadamente: <strong>${total.toLocaleString('es-CO')}</strong> COP + Envío Nacional.</p>}
        </section>
    )

}

export default CalculateShipping