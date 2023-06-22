import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import backimg from '../assets/background.jpg';

import { useGetAllVespasQuery, useCreateReservationMutation } from '../redux/vespaAPI';

function AddReservations() {

  const { data: vespas, error, isLoading } = useGetAllVespasQuery();

  const userID = useSelector((state) => state.persistedReducer.id);

  const minDate = new Date().toISOString().slice(0, 10);

  const [endDateMinDate, setEndDateMinDate] = useState(minDate);

  const [startDateMaxDate, setStartDateMaxDate] = useState(null);
  const [description, setDescription] = useState('');

  const [selectedVespa, setSelectedVespa] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [createReservation, { isLoading: isCreating }] = useCreateReservationMutation();

  const handleDropDownChange = (e) => {
    setSelectedVespa(e.target.value);

  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setEndDateMinDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setStartDateMaxDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmitClick = () => {
    const reservation = {
      reservation: {
        user_id: userID,
        room_id: selectedVespa,
        start_date: startDate,
        end_date: endDate,
        description: description,
      },
    };

    createReservation(reservation);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Something went wrong:
        {' '}
        {error}
      </div>
    );
  }


  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-8 items-center text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="h-full w-full object-fill " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className="font-bold tracking-widest text-3xl font-mono z-10">Book A Vespa</h1>
      <hr className="w-2/5 bg-gray-600 z-10" />
      <p className="tracking-widest z-10">

        There are
        {' '}
        {vespas.length}
        {' '}
        Vespas available for rent. Please select the Vespa you want to rent, 
        and the start and end date of your reservation

      </p>
    

      <form action=" " className="z-10 flex flex-col">
        <div className="flex space-y-4 flex-col items-center  z-10 ">
        <div className="flex gap-4 z-10">


        <select id="countries" value={selectedVespa} defaultValue="Choose A Vespa" onChange={handleDropDownChange} className="text-white-200 font-semibold  h-12 mt-7 required px-4 rounded-full bg-transparent border-2 border-white">
          <option value="Select a Vespa" disabled defaultValue={"Choose A Vespa"} >Choose a Vespa</option>
          {vespas.map((vespa) => (
            <option value={vespa.id} key={vespa.id} className="text-black text-lg">
              {vespa.name}
            </option>
          ))}
        </select>
      
        <div className="flex-col items-center justify-center space-y-2 text-center">
          <p>Start Date:</p>

          <input
            onChange={handleStartDateChange}
            type="date"
            id="start-date"
            min={minDate}
            max={startDateMaxDate}
            name="start-date"
            required
           
            className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white"
          />
        </div>

        <div className="flex-col items-center justify-center space-y-2 text-center">
          <p>End Date:</p>

          <input onChange={handleEndDateChange} required min={endDateMinDate} type="date" id="end-date" name="end-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white" />
        </div>

        
      </div>

      <input type="text" required value={description} placeholder="Enter a description of the reservation " className=" text-white-200 font-semibold py-2 placeholder-white w-full px-4 rounded-full bg-transparent border-2 border-white" onChange={handleDescriptionChange} />


      <button type="submit" onClick={handleSubmitClick} className="bg-white  text-center font-semibold text-[#96bf01] py-2 h-12 mt-7  w-40 px-10 rounded-full">
          Book now
     </button>
      </div>

      </form>
    </div>
  );
}

export default AddReservations;
