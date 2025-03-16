import { useState, useEffect } from "react";
import hotelsData from "../data/hotels.json";
import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <input
          type="text"
          placeholder="Search by city..."
          className="p-2 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {hotels
            .filter(
              (hotel) =>
                hotel.location.toLowerCase().includes(search.toLowerCase()) ||
                hotel.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
      </div>
    </div>
  );
}
