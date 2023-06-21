import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllVespasQuery } from '../redux/vespaAPI';

function Reservation({ reservation }) {
  const localid = useSelector((state) => state.persistedReducer.id);
  const { data: rooms = [] } = useGetAllVespasQuery();

  // Find the room object that corresponds to reservation.room_id
  const room = rooms.find((r) => r.id === reservation.room_id);

  if (localid !== reservation.user_id || !room) {
    return null; // Don't show the reservation if it doesn't belong to the current user or if the corresponding room can't be found
  }

  return (
    <div className="z-10 text-black font-sans font-bold">
      <div>
        <h2>
          description:&nbsp;
          {reservation.description}
        </h2>
        <p>
          Start Date:&nbsp;
          {reservation.start_date}
        </p>
        <p>
          End Date:&nbsp;
          {reservation.end_date}
        </p>
        <p>
          Vespa name:&nbsp;
          {room.name}
        </p>
      </div>
    </div>
  );
}

export default Reservation;
