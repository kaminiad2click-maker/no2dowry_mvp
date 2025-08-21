import React from 'react';

export default function Dashboard() {
  const dummyMatches = [
    { id: 1, name: "Anjali Sharma", age: 27, city: "Delhi", about: "Loves books and music" },
    { id: 2, name: "Ravi Kumar", age: 29, city: "Bangalore", about: "Enjoys hiking and photography" },
    { id: 3, name: "Priya Nair", age: 26, city: "Chennai", about: "Foodie and traveler" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Find Your Match</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyMatches.map((match) => (
          <div key={match.id} className="rounded-xl border p-4 shadow-md bg-white">
            <h2 className="text-lg font-semibold">{match.name}, {match.age}</h2>
            <p className="text-sm text-gray-600">{match.city}</p>
            <p className="mt-2 text-gray-800">{match.about}</p>
            <button className="mt-3 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}