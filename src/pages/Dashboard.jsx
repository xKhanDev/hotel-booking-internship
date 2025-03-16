import Navbar from "../components/Navbar";

export default function Dashboard() {
  const bookings = [
    { id: 1, hotel: "Luxury Hotel", date: "2025-03-25", status: "Confirmed" },
    { id: 2, hotel: "Beach Resort", date: "2025-04-10", status: "Pending" },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">My Bookings</h2>
        <ul className="mt-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="border p-2 rounded mb-2">
              <p>Hotel: {booking.hotel}</p>
              <p>Date: {booking.date}</p>
              <p>Status: {booking.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
