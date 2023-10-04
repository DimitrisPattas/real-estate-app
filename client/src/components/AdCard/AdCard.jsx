import React from 'react';
import moment from 'moment';

export default function AdCard({ ad }) {
  const { type, area, price, createdAt } = ad;
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer flex justify-between flex-col hover:bg-gray-200">
      <img
        src="/images/house-desktop.png"
        alt="house"
        className="w-full h-36"
      />
      <div className="p-2 mb-2">
        <h3 className="font-bold text-xl mb-2">{type}</h3>
        <div className="flex text-reg font-bold">
          <p className="mr-3 underline">{area}</p>
          <p>{price}&euro;</p>
        </div>
        <p className="text-sm mt-1 font-light">
          Posted at: {moment({ createdAt }).format('MMM Do YYYY')}
        </p>
      </div>
    </div>
  );
}
