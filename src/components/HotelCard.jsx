import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{hotel.name}</h3>
      <p>Location: {hotel.location}</p>
      <p>Price: ${hotel.price} per night</p>
      <p>Rating: ⭐{hotel.rating}</p>
      <Link to={`/hotel/${hotel.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
