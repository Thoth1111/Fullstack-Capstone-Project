import React from 'react';
import Reservation from '../components/Reservation';
import { useGetAllReservationsQuery } from '../redux/reservationAPI';
import backimg from '../assets/background.jpg';
import BackButton from '../components/BackButton';

function MyReservations() {
  const { data: reservations = [], isLoading } = useGetAllReservationsQuery();

  if (isLoading) {
    return <div>Loading API...</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col pb-2 justify-center gap-8 items-center text-white relative">
      <BackButton />

      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="h-full w-full object-fill " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className="text-white z-10 font-serif font-extrabold text-3xl">MY RESERVATIONS</h1>
      <hr className="w-2/5 bg-gray-600 z-10" />
      <div className="z-10 bg-white md:h-[250px] xl:h-[250px] h:full w-3/6 overflow-y-scroll flex flex-col opacity-70 justify-center items-center gap-4 text-center">
        {reservations.length === 0 ? (
          <div className="z-10 bg-white h-[250px] w-3/6 flex justify-center items-center opacity-70 text-center">
            No reservations found.
          </div>
        ) : (
          <>
            {reservations.map((reservation) => (
              <Reservation key={reservation.id} reservation={reservation} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MyReservations;
