import backimg from '../assets/background.jpg';
import { useState } from 'react';

function AddReservations() {

  const [selectedVespa, setselectedVespa] = useState(null);
  const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);

  // const {data , error, isLoading} = useGetAllVespasQuery();

  const data  = ["vespa1", "vespa2", "vespa3", "vespa4", "vespa5", "vespa6"]
  
  const handleDropDownChange = (e) => {
    setselectedVespa(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setstartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setendDate(e.target.value);
  };
  


  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-8 items-center text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="h-full w-full object-fill " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className="font-bold tracking-widest text-3xl font-mono z-10">BOOk A Vespa</h1>
      <hr className="w-2/5 bg-gray-600 z-10" />
      <p className="tracking-widest z-10">oljloh.ohibiooooooooooooooooooooooooooooooo</p>
     
     
      <div className="flex gap-4 z-10">
        <select id="countries" value={selectedVespa} onChange={handleDropDownChange} className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white">

          {data.map((item) => (
            <option value={item} key={item} className="text-black">{item}</option>
          ))  
          
          }

 
        </select>
        <input type="date" id="start-date" name="start-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white" />

        <input type="date" id="end-date" name="end-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white" />

        <button type="submit" className="bg-white font-semibold text-[#96bf01] py-2 px-10 rounded-full">
          Book now
        </button>
      </div>
   
   
    </div>
  );
}

export default AddReservations;
