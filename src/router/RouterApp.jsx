import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage, PatientForm, PatientAgenda, PayPage, ConfirmationPage } from "../pages";
import { PatientContext } from "../context/PatientContext";

export const RouterApp = () => {
  const {patientData, shiftReservated} = useContext(PatientContext)

  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/registerpatient" element={<PatientForm />} />
        <Route path="/registerhour" element={<PatientAgenda />} />
        {patientData !== null && shiftReservated !== null && <Route path="/confirmation" element={<PayPage />} />  }
        {patientData !== null && shiftReservated !== null && <Route path="/realizatedPage" element={<ConfirmationPage />} />}
      </Routes>
    </>
  );
};
