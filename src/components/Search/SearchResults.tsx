import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, DollarSign, MapPin, Search, Filter } from 'lucide-react';
import BookingModal from '../Booking/BookingModal';

const SearchResults = () => {
  const location = useLocation();
  const { mode, from, to, date, passengers } = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState('price');

  // Dummy data for demonstration
  const results = [
    {
      id: 1,
      provider: 'Premium Airways',
      departure: '08:00 AM',
      arrival: '10:30 AM',
      duration: '2h 30m',
      price: 299,
      stops: 0,
      rating: 4.5,
      amenities: ['Wi-Fi', 'Meals', 'Entertainment'],
    },
    {
      id: 2,
      provider: 'Express Travel',
      departure: '10:15 AM',
      arrival: '01:00 PM',
      duration: '2h 45m',
      price: 249,
      stops: 1,
      rating: 4.2,
      amenities: ['Wi-Fi', 'Snacks'],
    },
    {
      id: 3,
      provider: 'Budget Connect',
      departure: '02:30 PM',
      arrival: '05:15 PM',
      duration: '2h 45m',
      price: 199,
      stops: 1,
      rating: 4.0,
      amenities: ['Wi-Fi'],
    },
  ];

  const handleBooking = (result) => {
    setSelectedBooking({
      ...result,
      from,
      to,
      date,
    });
    setIsModalOpen(true);
  };

  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Search Results</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search results..."
                  className="pl-10 pr-4 py-2 border rounded-md"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="price">Sort by Price</option>
                <option value="duration">Sort by Duration</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>From: {from}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>To: {to}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Date: {date}</span>
            </div>
            <div>Passengers: {passengers}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range (${priceRange})
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Time
                  </label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Any Time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stops
                  </label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Any</option>
                    <option>Non-stop</option>
                    <option>1 Stop</option>
                    <option>2+ Stops</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Airlines
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Premium Airways
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Express Travel
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Budget Connect
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {sortedResults.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{result.provider}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {result.rating} ★
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div>
                        <div className="font-semibold">{result.departure}</div>
                        <div>{from}</div>
                      </div>
                      <div className="flex-1 border-t border-gray-300 w-20"></div>
                      <div>
                        <div className="font-semibold">{result.arrival}</div>
                        <div>{to}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Duration: {result.duration} • {result.stops} stop
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {result.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      ${result.price}
                    </div>
                    <button
                      onClick={() => handleBooking(result)}
                      className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedBooking && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bookingDetails={selectedBooking}
        />
      )}
    </div>
  );
};

export default SearchResults;