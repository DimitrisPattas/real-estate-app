import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-orange-300 rounded-b p-2 flex">
      <Link to="/" className="font-bold text-gray-700 text-2xl mx-10">
        Ads
      </Link>
      <Link to="/new" className="font-bold text-gray-700 text-2xl">
        New Ad
      </Link>
    </nav>
  );
}
