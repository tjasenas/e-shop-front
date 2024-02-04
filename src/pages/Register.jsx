import React from "react";

export default function Register() {
  return (
    <>
      <h1 className="text-2xl my-6">Prisijungimas</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Vardas
          </label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Slaptažodis
          </label>
          <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="repeat-password" className="block text-gray-700 text-sm font-bold mb-2">
            Pakartoti slaptažodis
          </label>
          <input type="repeat-password" id="repeat-password" name="repeat-password" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </>
  );
}
