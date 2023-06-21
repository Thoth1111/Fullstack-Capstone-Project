import React from 'react';

function Reservation({ reservation }) {
  return (
    <div>
      <div>
        <h2>{reservation.description}</h2>
        <p>Start Date: {reservation.start_date}</p>
        <p>End Date: {reservation.end_date}</p>
      </div>
    </div>
  );
}

export default Reservation;
