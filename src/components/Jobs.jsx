import { PiStudentThin } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { CgWorkAlt } from "react-icons/cg";


export const Jobs = () => {
  return (
    <>
        <section className="flex flex-col w-full gap-6 py-16  md:flex-row md:justify-evenly md:pt-10">
          <div className="flex flex-col items-center text-center text-balance gap-2">
            <PiStudentThin className="text-8xl text-slate-950" />
            <p>LICENCIADA EN NUTRICION (MP: 6054)</p>
          </div>
          <div className="flex flex-col items-center text-center text-balance gap-2">
            <LiaUniversitySolid className="text-8xl text-slate-950" />
            <p>LICENCIADA EN GASTRONOMIA (UADE)</p>
          </div>
          <div className="flex flex-col items-center text-center text-balance gap-2">
            <CgWorkAlt className="text-8xl text-slate-950" />
            <p>ANTROPOMETRISTA ISAK 1</p>
          </div>
        </section>   
    </>
  )
}
