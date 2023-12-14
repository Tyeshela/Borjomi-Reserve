import React from 'react';

const BorjomiAdvert = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="text-green-600">
            <p className="font-semibold">National Nature Reserve</p>
            <h1 className="text-3xl font-bold">Visit Borjomi</h1>
          </div>
          <div className="p-2 bg-green-600 text-white rounded">
            <p>Protected Area</p>
          </div>
        </div>

        <div className="h-64 bg-gray-300 rounded-lg mb-4">
          <img src="https://sastumroebi.ge/uploads/2018/02/p17-4.jpg" alt="Borjomi Reserve" className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="text-green-700">
            <p>Discover the beauty of nature.</p>
          </div>
          <div className="text-blue-900">
            <p>Open Year-Round</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorjomiAdvert;
