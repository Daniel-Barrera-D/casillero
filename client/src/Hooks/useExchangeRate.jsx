import {  useState, useEffect } from 'react'
import axios from 'axios'

const useExchangeRate = () => { 
    const [ usdToCop, setUsdToCop ] = useState(0)

    useEffect(() => {

        const fetchExchangeRate = async () => {

            try {
                const res = await axios.get('https://api.exchangerate-api.com/v4/latest/USD')
                setUsdToCop(res.data.rates.COP)
            } catch (error) {
                console.log(error)
            }
        }
        fetchExchangeRate()
    }, [])
    return usdToCop
}

export default useExchangeRate