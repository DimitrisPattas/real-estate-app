import React from 'react';
import AdCard from '../AdCard/AdCard';
import { Link } from 'react-router-dom';

export default function AdList() {
  return (
    <div className="py-3 mt-10 flex flex-wrap justify-center">
      {/* <Loader /> */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ad) => (
        <Link to={`/ad/${ad}`}>
          <AdCard key={ad} />
        </Link>
      ))}
    </div>
  );
}
