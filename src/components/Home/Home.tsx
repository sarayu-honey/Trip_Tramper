import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Train, Bus, Hotel, Calendar, Users } from 'lucide-react';

type TransportMode = 'flight' | 'train' | 'bus' | 'hotel';

const Home = () => {
  const [mode, setMode] = useState<TransportMode>('flight');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search', { 
      state: { mode, from, to, date, passengers }
    });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setMode('flight')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                mode === 'flight' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              <Plane className="w-5 h-5" /> Flights
            </button>
            <button
              onClick={() => setMode('train')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                mode === 'train' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              <Train className="w-5 h-5" /> Trains
            </button>
            <button
              onClick={() => setMode('bus')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                mode === 'bus' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              <Bus className="w-5 h-5" /> Buses
            </button>
            <button
              onClick={() => setMode('hotel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                mode === 'hotel' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              <Hotel className="w-5 h-5" /> Hotels
            </button>
          </div>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Passengers</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=100&h=100&fit=crop"
                  alt="Paris"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=100&h=100&fit=crop"
                  alt="Tokyo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>Tokyo, Japan</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=100&h=100&fit=crop"
                  alt="New York"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg text-white">
                <h4 className="font-semibold">Summer Sale!</h4>
                <p className="text-sm">Get up to 30% off on international flights</p>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-lg text-white">
                <h4 className="font-semibold">Hotel Deals</h4>
                <p className="text-sm">Book 3 nights, get 1 night free</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Travel Tips</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                Book in advance for better deals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                Check for package deals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                Be flexible with travel dates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                Sign up for price alerts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;