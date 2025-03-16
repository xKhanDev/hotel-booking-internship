import { useState } from "react";
import { useParams } from "react-router-dom";
import hotelsData from "../data/hotels.json";
import Navbar from "../components/Navbar";

export default function Booking() {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === parseInt(id));
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  if (!hotel) return <p>Hotel not found</p>;

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} at ${hotel.name}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">{hotel.name} - Booking</h2>
        <form className="mt-4" onSubmit={handleBooking}>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border rounded w-full mb-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded w-full mb-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-2 border rounded w-full mb-2"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
