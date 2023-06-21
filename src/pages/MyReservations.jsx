import React from 'react';
import { useSelector } from 'react-redux';
import Reservation from '../components/Reservation';

function MyReservations() {
  return (
    <div className="flex flex-col">
      <Reservation />
    </div>
  );
}

export default MyReservations;
