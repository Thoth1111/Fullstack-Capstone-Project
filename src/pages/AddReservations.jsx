import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import backimg from '../assets/background.jpg';

import { useNavigate } from 'react-router-dom';

// import useToast from '../helpers/useToast';
import {Toast,useToast} from '../components/Toast';

import { useGetAllVespasQuery, useCreateReservationMutation } from '../redux/vespaAPI';

function AddReservations() {

 let  vespaRef = useRef(null);
 let vespaErrorRef = useRef(null);

  const { data: vespas, error, isLoading } = useGetAllVespasQuery();


  const userID = useSelector((state) => state.persistedReducer.id);

  const minDate = new Date().toISOString().slice(0, 10);

  const [endDateMinDate, setEndDateMinDate] = useState(minDate);

  const [displayBool, message, type, showToast] = useToast();

  const [startDateMaxDate, setStartDateMaxDate] = useState('');
  const [description, setDescription] = useState('');

  const [selectedVespa, setSelectedVespa] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [createReservation, { isLoading: isCreating }] = useCreateReservationMutation();

  const handleDropDownChange = (e) => {
    setSelectedVespa(e.target.value);

  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home');
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

  const handleVespaOnBlur = (e) => {
    if (selectedVespa !== '') {
      vespaErrorRef.current.classList.add('invisible');
      vespaRef.current.classList.remove('border-red-700');
      vespaRef.current.classList.add('border-white');
    }
  };

  const clearField = () => {
    setSelectedVespa('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setStartDateMaxDate('')
    


  };


  const handleSubmit = (e) => {

    if (selectedVespa === '') {

      vespaErrorRef.current.classList.remove('invisible');
      vespaRef.current.classList.remove('border-white');
      
      vespaRef.current.classList.add('border-red-700');
      e.preventDefault();
    }
  
    else{
      vespaErrorRef.current.classList.add('invisible');
      vespaRef.current.classList.remove('border-red-700');
      vespaRef.current.classList.add('border-white');
     
      const reservation = {
        reservation: {
          user_id: userID,
          room_id: selectedVespa,
          start_date: startDate,
          end_date: endDate,
          description: description,
        },
      };

      e.preventDefault();
      clearField()
      let res =   createReservation(reservation);
      
      showToast('Reservation Made Successfully', 'success');

    }


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

      {displayBool && <Toast message={message} type={type}/>}

      <button className='z-10 absolute left-0 top-0 m-4  ' onClick={handleGoBack}>

      <svg className="h-20 w-20 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 8 8 12 12 16" />  <line x1="16" y1="12" x2="8" y2="12" /></svg>
      </button>
      
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
    

      <form action=" " onSubmit={handleSubmit} className="z-10 flex flex-col">
        <div className="flex space-y-4 flex-col items-center  z-10 ">
        <div className="flex gap-4 z-10">

        <div className = "flex flex-col space-y-0 items-center mt-1.5">
        
        <small ref={vespaErrorRef} className='mb-1 invisible text-red-700'> Select a Vespa</small>
       
        <select id="countries" ref={vespaRef} value={selectedVespa} onChange={handleDropDownChange} onBlur ={handleVespaOnBlur} className="text-white-200 font-semibold  h-12 mt-7 required px-4 rounded-full bg-transparent border-2 border-white">
          <option value="" disabled="" className="hidden" >Choose a Vespa</option>
         
         
          {vespas.map((vespa) => (
            <option value={vespa.id} key={vespa.id} className="text-black text-lg">
              {vespa.name}
            </option>
          ))}
        </select>
          </div>
        <div className="flex-col items-center justify-center space-y-2 text-center">
          <p>Start Date:</p>

          <input
            onChange={handleStartDateChange}
            type="date"
            id="start-date"
            value={startDate}
            min={minDate}
            max={startDateMaxDate}
            name="start-date"
            required
           
            className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white"
          />
        </div>

        <div className="flex-col items-center justify-center space-y-2 text-center">
          <p>End Date:</p>

          <input onChange={handleEndDateChange} value={endDate} required min={endDateMinDate} type="date" id="end-date" name="end-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white" />
        </div>

        
      </div>

      <input type="text" required value={description} placeholder="Enter a description of the reservation " className=" text-white-200 font-semibold py-2 placeholder-white w-full px-4 rounded-full bg-transparent border-2 border-white" onChange={handleDescriptionChange} />


      <button type="submit" className="bg-white  text-center font-semibold text-[#96bf01] py-2 h-12 mt-7  w-40 px-10 rounded-full">
          Book now
     </button>
      </div>

      </form>
    </div>
  );
}

export default AddReservations;
