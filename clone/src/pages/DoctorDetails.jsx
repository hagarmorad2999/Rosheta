import { useParams } from "react-router-dom";
import doctors from "../data/doctors";
import { useState } from "react";
import BookingModal from "../component/Booking/BookingModal.jsx";


export default function DoctorDetails() {
const { id } = useParams();
const doctor = doctors.find(d => d.id === Number(id));
const [open, setOpen] = useState(false);


return (
<div className="container">
<h2>{doctor.name}</h2>
<p>{doctor.specialty}</p>
<button onClick={() => setOpen(true)}>Book Appointment</button>
{open && <BookingModal doctor={doctor} close={() => setOpen(false)} />}
</div>
);
}