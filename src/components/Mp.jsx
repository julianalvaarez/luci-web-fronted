import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { useEffect, useState } from 'react';
export const Mp = () => {
    const [preferenceId, setPreferenceId] = useState(null)

initMercadoPago('TEST-d34b7891-5e67-440b-a103-ad50da9cfd82', {
    locale: 'es-AR',
});

const createPreference = async () => {
    try {
        const response = await axios.post('http://localhost:3000/create_preference', {
            title: 'Turno Nutricional',
            quantity: 1,
            price: 5000,
        })
        const {id} = response.data
        return id
    } catch (error) {
        console.log(error)
    }
}

const handleBuy = async () => {
    const id = await createPreference()
    if (id) {
        setPreferenceId(id)
    }
}

useEffect(() => {
    handleBuy()
}, [])


  return (
    <div>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  )
}