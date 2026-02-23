import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";


export default function MyBookings() {
const { bookings } = useContext(BookingContext);


return (
<div className="container">
<h2>My Bookings</h2>
{bookings.map(b => <div key={b.id} className="card">{b.doctor} - {b.slot}</div>)}
</div>
);
}