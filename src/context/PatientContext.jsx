import { createContext, useState } from "react"

export const PatientContext = createContext()

export const PatinetContextProvider= ({children}) => {
    const [patientData, setPatientData] = useState(null)
    const [shiftReservated, setShiftReservated] = useState(null)
  
    return (
      <PatientContext.Provider value={{patientData, setPatientData, shiftReservated, setShiftReservated}}>
        {children}
      </PatientContext.Provider>
    );
  };
