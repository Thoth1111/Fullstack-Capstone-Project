import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllVespasQuery } from '../redux/vespaAPI';

function Reservation({ reservation }) {
  const localid = useSelector((state) => state.persistedReducer.id);
  const { data: vespas = [] } = useGetAllVespasQuery();

  // Find the vespa object that corresponds to reservation.vespa_id
  const vespa = vespas.find((r) => r.id === reservation.vespa_id);

  if (localid !== reservation.user_id || !vespa) {
    return null; // Don't show the reservation if it doesn't belong to the current user or if the corresponding vespa can't be found
  }

  return (
    <div className="z-10 text-black bg-lime-100  rounded-lg shadow-xl py-4 w-4/6 h-40 font-sans font-bold overscroll-none p-4">
      <div>
        <h2>
          Name:&nbsp;
          {vespa.name}
        </h2>
        <p>
          Description:&nbsp;
          {reservation.description}
        </p>
        <p>
          Start Date:&nbsp;
          {reservation.start_date}
        </p>
        <p>
          End Date:&nbsp;
          {reservation.end_date}
        </p>
      </div>
    </div>
  );
}

export default Reservation;
