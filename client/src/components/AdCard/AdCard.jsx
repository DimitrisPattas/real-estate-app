import React from 'react';

export default function AdCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <img
        src="/images/house-desktop.png"
        alt="house"
        className="w-full h-36"
      />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">Rent</h3>
        <div className="flex text-reg font-light">
          <p className="mr-3">Aliveri</p>
          <p>500</p>
        </div>
        <p className="text-sm mt-1 font-bold">Created at</p>
      </div>
    </div>
  );
}
