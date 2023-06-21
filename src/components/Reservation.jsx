import React from 'react';
import { useGetAllReservationsQuery } from '../redux/reservationAPI';

function Reservation() {
  const { data: reservations = [], isLoading } = useGetAllReservationsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <h2>{reservation.description}</h2>
          <p>Start Date: {reservation.start_date}</p>
          <p>End Date: {reservation.end_date}</p>
        </div>
      ))}
    </div>
  );
}

export default Reservation;
