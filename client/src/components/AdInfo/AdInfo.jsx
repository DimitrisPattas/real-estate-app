import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export default function AdInfo() {
  const [ad, setAd] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/ads/${id}`);
        setAd(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching ad:', error);
        setIsLoading(false);
      }
    };

    fetchAd();
  });

  return (
    <div className="container mx-auto py-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        ad && (
          <div className="bg-white p-6 md:shadow rounded">
            <h2 className="text-2xl font-bold mb-4">{ad.title}</h2>
            <p>
              <span className="font-bold">Type:</span> {ad.type}
            </p>
            <p>
              <span className="font-bold">Area:</span> {ad.area}
            </p>
            <p>
              <span className="font-bold">Price:</span> {ad.price}
            </p>
            <p>
              <span className="font-bold">Level:</span> {ad.level}
            </p>
            <p>
              <span className="font-bold">Bathrooms:</span> {ad.bathrooms}
            </p>
            <p>
              <span className="font-bold">Posted:</span> At:{' '}
              {moment(ad.createdAt).format('MMM Do YYYY')}
            </p>
            <p>
              <span className="font-bold">Description:</span> {ad.description}
            </p>
          </div>
        )
      )}
    </div>
  );
}
