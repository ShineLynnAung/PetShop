import React, { useState } from "react";

function OptionBar() {
  const [service, setService] = useState("Dog Boarding");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState([new Date(), null]);
  const [size, setSize] = useState("Small, 0-15 lbs");
  return (
    <div className="flex flex-wrap gap-6 p-6 rounded-lg">
      <div className="flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/b6/8b/b5/b68bb5dbcfaf52cd73d70983ca2ba67a.jpg"
          alt="Profile"
          className="h-24 rounded-full"
        />
      </div>{" "}
      <div className="w-full sm:w-48 ml-5">
        <label className="block text-sm font-medium mb-2 text-white">
          I'm looking for
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="Dog Boarding">Dog Boarding</option>
          <option value="Cat Boarding">Cat Boarding</option>
          <option value="Pet Sitting">Pet Sitting</option>
        </select>
      </div>
      <div className="w-full sm:w-48 ml-4">
        <label className="block text-sm font-medium mb-2 text-white">
          Boarding near
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address or Zip Code"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="w-full sm:w-48 ml-4">
        <label className="block text-sm font-medium mb-2 text-white">
          For these days
        </label>
        <input
          type="date"
          value={date[0].toISOString().split("T")[0]}
          onChange={(e) => setDate([new Date(e.target.value), date[1]])}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="w-full sm:w-48 ml-5">
        <label className="block text-sm font-medium mb-2 text-white">
          My pet's size
        </label>
        <select
          value={size}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="Small, 0-15 lbs">Small, 0-15 lbs</option>
          <option value="Medium, 15-50 lbs">Medium, 15-50 lbs</option>
          <option value="Large, 50+ lbs">Large, 50+ lbs</option>
        </select>
      </div>
      <img
        src="https://i.pinimg.com/474x/25/b1/c0/25b1c014cda8323685cc03897ee9c93b.jpg"
        alt="Profile"
        className="h-24 w-24 rounded-full"
      />
    </div>
  );
}

export default OptionBar;
