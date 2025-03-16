import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import hotelsData from "../data/hotels.json";

export default function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <SearchBar />
        <h2 className="text-2xl font-bold mt-6">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}
