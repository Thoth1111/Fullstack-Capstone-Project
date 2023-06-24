import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllVespasQuery } from '../redux/vespaAPI';

function VespaDetails() {
  const { id } = useParams();
  const { data: vespas, error, isLoading } = useGetAllVespasQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong...</p>;

  const selectedVespa = vespas.find(vespa => vespa.id.toString() === id);

  if (!selectedVespa) return <p>Vespa not found.</p>;

  const { icon, name, description } = selectedVespa;

  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <img src={icon} alt={name} className="h-80 w-80 rounded-full" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default VespaDetails;
