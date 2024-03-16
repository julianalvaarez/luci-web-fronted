import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { PatientContext } from "../context/PatientContext";
export const Mp = () => {
    const { patientData, shiftReservated } = useContext(PatientContext);

    const [preferenceId, setPreferenceId] = useState(null)

    initMercadoPago('TEST-d34b7891-5e67-440b-a103-ad50da9cfd82', {
        locale: 'es-AR',
    });
    // https://luci-web-backend-production.up.railway.app
    const createPreference = async () => {
        try {
            const response = await axios.post('https://luci-web-backend-production.up.railway.app/create_preference', {
                title: 'Turno Nutricional',
                quantity: 1,
                price: 8000,
                patientData,
                shiftData: shiftReservated,
            })
            const { id } = response.data
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