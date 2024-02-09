import { useEffect } from "react";
import { createContext, useState } from "react"

export const PatientContext = createContext()

export const PatinetContextProvider= ({children}) => {
    const [patientData, setPatientData] = useState(()=>{
      const storedPatientData = localStorage.getItem('patientData')
      return storedPatientData ? JSON.parse(storedPatientData) : null;
    })

    const [shiftReservated, setShiftReservated] = useState(()=>{
      const storedShiftReservated = localStorage.getItem('shiftReservated')
      return storedShiftReservated ? JSON.parse(storedShiftReservated) : null;
    })

    useEffect(() => {
      localStorage.setItem("patientData", JSON.stringify(patientData));
    }, [patientData])
    
    useEffect(() => {
      localStorage.setItem("shiftReservated", JSON.stringify(shiftReservated));
    }, [shiftReservated])
  
    return (
      <PatientContext.Provider value={{patientData, setPatientData, shiftReservated, setShiftReservated}}>
        {children}
      </PatientContext.Provider>
    );
  };
