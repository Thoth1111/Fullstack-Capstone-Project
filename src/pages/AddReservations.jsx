import backimg from '../assets/background.jpg';
import { useState } from 'react';

import { useGetAllVespasQuery, useCreateReservationMutation } from "../redux/vespaAPI"



function AddReservations() {
  
  const data  = ["vespa1", "vespa2", "vespa3", "vespa4", "vespa5", "vespa6"]

  const minDate = new Date().toISOString().slice(0, 10);

  const [endDateMinDate, setEndDateMinDate] = useState(minDate)

  const [startDateMaxDate, setStartDateMaxDate] = useState(null)

  const [selectedVespa, setSelectedVespa] = useState(data[0]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // const {data , error, isLoading} = useGetAllVespasQuery();

  const [createReservation, { isLoading: isCreating }] = useCreateReservationMutation();

  
  const handleDropDownChange = (e) => {
    setSelectedVespa(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setEndDateMinDate(e.target.value)
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setStartDateMaxDate(e.target.value)
  };

const handleSubmitClick = () => {
  console.log(selectedVespa);
  console.log(startDate);
  console.log(endDate);

  const reservation = {
    user : "user1",
    vespa: selectedVespa,
    startDate: startDate,
    endDate: endDate
}


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

          There are {data.length} Vespas available for rent. Please select the Vespa you want to rent, and the start and end date of your reservation

      </p>
     
     
      <div className="flex gap-4 z-10">

        <select id="countries" value={selectedVespa} onChange={handleDropDownChange} className="text-white-200 font-semibold  h-12 mt-7  px-4 rounded-full bg-transparent border-2 border-white">

          {data.map((item) => (
            <option value={item} key={item} className="text-black">{item}</option>
          ))  
          
          }

 
        </select>
        <div className='flex-col items-center justify-center space-y-2 text-center'>
        <p>Start Date:</p>

        <input onChange={handleStartDateChange} type="date" id="start-date" min={minDate} 
        max={startDateMaxDate}  name="start-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white"  />
        </div>

        <div className='flex-col items-center justify-center space-y-2 text-center'>
        <p>End Date:</p>

        <input onChange={handleEndDateChange} min={endDateMinDate} type="date" id="end-date" name="end-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white" />
        </div>

        <button type="submit" onClick={handleSubmitClick} className="bg-white font-semibold text-[#96bf01] py-2 h-12 mt-7 px-10 rounded-full">
          Book now
        </button>
      </div>
   
   
    </div>
  );
}

export default AddReservations;
