import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Search by city..."
        className="p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded w-full">
        Search
      </button>
    </div>
  );
}
