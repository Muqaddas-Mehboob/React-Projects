import { useState } from "react";
import useWeatherInfo from "./hooks/useWeatherInfo";

function WeatherApp() {
  const [city, setCity] = useState("");
  const { data, loading, error } = useWeatherInfo(city);

  const handleSearch = (e) => {
    e.preventDefault();
    // Already handled by useEffect in hook when city changes
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">🌤️ Weather App</h1>

        <form onSubmit={handleSearch} className="mb-4 flex">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {data && data.main && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-black">{data.name}, {data.sys.country}</h2>
            <p className="text-5xl my-2 text-black">{Math.round(data.main.temp)}°C</p>
            <p className="text-gray-600 capitalize">{data.weather[0].description}</p>
            <p className="text-sm mt-2 text-gray-500">Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
