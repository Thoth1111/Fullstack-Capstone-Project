import React from 'react';
import { useSelector } from 'react-redux';

function Reservation({ reservation }) {
  const localid = useSelector((state) => state.persistedReducer.id);
  if (localid === reservation.user_id) {
    return (
      <div className="z-10 text-black">
        <div>
          <h2>{reservation.description}</h2>
          <p>
            Start Date:
            {reservation.start_date}
          </p>
          <p>
            End Date:
            {reservation.end_date}
          </p>
          <p>
            Room id:
            {reservation.room_id}
          </p>
          <p>
            By:
            {reservation.user_id}
          </p>
        </div>
      </div>
    );
  }
  return null; // don't show the reservation
}

export default Reservation;
