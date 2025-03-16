import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import hotelsData from "../data/hotels.json";

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === parseInt(id));

  if (!hotel) return <p>Hotel not found</p>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-2xl font-bold">{hotel.name}</h2>
        <p>{hotel.description}</p>
        <p>Location: {hotel.location}</p>
        <p>Price: ${hotel.price} per night</p>
        <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
}
