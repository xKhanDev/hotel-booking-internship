import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">HooBook</h1>
      <div>
        <Link to="/" className="px-4">
          Home
        </Link>
        <Link to="/hotels" className="px-4">
          Hotels
        </Link>
        <Link to="/dashboard" className="px-4">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
