import React from 'react';
import Reservation from '../components/Reservation';
import { useGetAllReservationsQuery } from '../redux/reservationAPI';

function MyReservations() {
  const { data: reservations = [], isLoading } = useGetAllReservationsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reservations.map((reservation) => (
        <Reservation key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}

export default MyReservations;
