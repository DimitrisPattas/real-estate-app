import React, { useState, useEffect } from 'react';
import AdCard from '../AdCard/AdCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function AdList() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/ads/all');
        setAds(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="py-3 mt-10 flex flex-wrap justify-center">
      {loading && <Loader />}
      {error && <div>Error fetching data: {error.message}</div>}
      {!loading &&
        !error &&
        ads.map((ad) => (
          <Link to={`/ad/${ad.id}`} key={ad.id}>
            <AdCard ad={ad} />
          </Link>
        ))}
    </div>
  );
}
