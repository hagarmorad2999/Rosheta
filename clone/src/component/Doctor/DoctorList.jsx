import DoctorCard from "./DoctorCard";
import { motion } from "framer-motion";

export default function DoctorList({ doctors, handleBook }) {
return <>
    <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }}
>
    <div className="row">
      {doctors.map((doctor) => (
        <div className="col-12 col-md-6 col-lg-4" key={doctor.id}>
          <DoctorCard doctor={doctor} handleBook={handleBook} />
        </div>
      ))}
    </div>
</motion.div>
</>;
}