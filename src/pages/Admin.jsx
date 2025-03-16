import { useState } from "react";
import Navbar from "../components/Navbar";
import hotelsData from "../data/hotels.json";

export default function Admin() {
  const [hotels, setHotels] = useState(hotelsData);

  const deleteHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <ul className="mt-4">
          {hotels.map((hotel) => (
            <li
              key={hotel.id}
              className="border p-2 rounded mb-2 flex justify-between"
            >
              <p>
                {hotel.name} - {hotel.location}
              </p>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => deleteHotel(hotel.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
