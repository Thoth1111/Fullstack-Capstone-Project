import React, { useState, useEffect } from 'react';
import Reservation from '../components/Reservation';
import { useGetAllReservationsQuery} from '../redux/vespaAPI';
import backimg from '../assets/background.jpg';
import BackButton from '../components/BackButton';

function MyReservations() {
  const { data: reservations = [], isLoading } = useGetAllReservationsQuery();
  const [fontSize, setFontSize] = useState('text-3xl');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setFontSize('text-2xl');
      } else {
        setFontSize('text-3xl');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return <div>Loading API...</div>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-8 pb-2 text-white">
      <BackButton />

      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="object-fill w-full h-full " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className={`text-white z-10 font-serif font-extrabold ${fontSize}`}>MY RESERVATIONS</h1>
      <hr className="z-10 w-2/5 bg-gray-600" />
      <div className="z-10 flex w-3/6 space-y-2 text-center pt-2 items-center flex-col min-h-[350px]  max-h-[350px] scrollbar  overflow-y-auto">
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