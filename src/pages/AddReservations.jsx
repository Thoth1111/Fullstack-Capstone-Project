import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../components/BackButton';
import backimg from '../assets/background.jpg';

import { Toast, useToast } from '../components/Toast';

import { useGetAllVespasQuery, useCreateReservationMutation } from '../redux/vespaAPI';
import { useLocation } from 'react-router-dom';

function AddReservations() {

  const location = useLocation();
  const navVespaId = location.state?.id;

  useEffect(() => {
    if (navVespaId) {
      setReservationData({ ...reservationData, selectedVespa: navVespaId });
    }
  }, [navVespaId]);

  

  const vespaRef = useRef(null);
  const vespaErrorRef = useRef(null);

  const { data: vespas, error, isLoading } = useGetAllVespasQuery();
  const [createReservation, { isLoading: isCreating, data: mutationData }] = useCreateReservationMutation();

  const userID = useSelector((state) => state.persistedReducer.id);

  const minDate = new Date().toISOString().slice(0, 10);
  const [displayBool, message, type, showToast] = useToast();

  const initialFormData = {
    endDate: '',
    startDate: '',
    description: '',
    selectedVespa: '',
  };

  const [reservationData, setReservationData] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  // if (navVespaId){

  //   setReservationData({...reservationData, selectedVespa: navVespaId});

  // }

  const [endDateMinDate, setEndDateMinDate] = useState(minDate);
  const [startDateMaxDate, setStartDateMaxDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setEndDateMinDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setStartDateMaxDate(e.target.value);
  };

  const handleVespaOnBlur = (e) => {
    if (reservationData.selectedVespa !== '') {
      vespaErrorRef.current.classList.add('invisible');
      vespaRef.current.classList.remove('border-red-700');
      vespaRef.current.classList.add('border-white');
    }
  };

  const handleSubmit = (e) => {
    if (reservationData.selectedVespa === '') {
      vespaErrorRef.current.classList.remove('invisible');
      vespaRef.current.classList.remove('border-white');

      vespaRef.current.classList.add('border-red-700');
      e.preventDefault();
    } else {
      vespaErrorRef.current.classList.add('invisible');
      vespaRef.current.classList.remove('border-red-700');
      vespaRef.current.classList.add('border-white');

      const reservation = {
        reservation: {
          user_id: userID,
          vespa_id: reservationData.selectedVespa,
          start_date: startDate,
          end_date: endDate,
          description: reservationData.description,
        },
      };

      e.preventDefault();
      setReservationData(initialFormData);
      createReservation(reservation);
      console.log(mutationData);

      showToast('Reservation Made Successfully', 'success');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen gap-8 p-2 text-white lg:w-screen md:w-screen">
      {displayBool && <Toast message={message} type={type} />}

      <BackButton />

      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="object-fill w-full h-full " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className="z-10 font-mono text-3xl font-bold tracking-widest">Book A Vespa</h1>
      <hr className="z-10 w-2/5 bg-gray-600" />
      <p className="z-10 tracking-widest">
        There are {vespas.length} Vespas available for rent. Please select the Vespa you want to rent, and the start
        and end date of your reservation
      </p>

      <form action=" " onSubmit={handleSubmit} className="z-10 flex flex-col">
        <div className="z-10 flex flex-col items-center space-y-4 ">
          <div className="z-10 flex gap-4">
            <div className="flex flex-col space-y-0 items-center mt-1.5">
              <small ref={vespaErrorRef} className="invisible mb-1 text-red-700">
                {' '}
                Select a Vespa
              </small>

              <small ref={vespaErrorRef} className="invisible mb-1 text-red-700"> Select a Vespa</small>

              <select id="vespas" name="selectedVespa" ref={vespaRef} value={reservationData.selectedVespa} onChange={handleOnChange} onBlur={handleVespaOnBlur} className="h-12 px-4 font-semibold bg-transparent border-2 border-white rounded-full text-white-200 mt-7 required">
                <option value="" disabled="" className="hidden">Choose a Vespa</option>

                {vespas.map((vespa) => (
                  <option value={vespa.id} key={vespa.id}  className="text-lg text-black">
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
                id="startDate"
                value={startDate}
                min={minDate}
                max={startDateMaxDate}
                name="startDate"
                required
                className="px-4 py-2 font-semibold bg-transparent border-2 border-white rounded-full text-white-200"
              />
            </div>

            <div className="flex-col items-center justify-center space-y-2 text-center">
              <p>End Date:</p>

              <input
                onChange={handleEndDateChange}
                name="endDate"
                value={endDate}
                required
                min={endDateMinDate}
                type="date"
                id="endDate"
                className="px-4 py-2 font-semibold bg-transparent border-2 border-white rounded-full text-white-200"
              />
            </div>
          </div>

          <input
            type="text"
            name="description"
            required
            value={reservationData.description}
            placeholder="Enter a description of the reservation "
            className="w-full px-4 py-2 font-semibold placeholder-white bg-transparent border-2 border-white rounded-full text-white-200"
            onChange={handleOnChange}
          />

          <button
            type="submit"
            className="bg-white  text-center font-semibold text-[#96bf01] py-2 h-12 mt-7  w-40 px-10 rounded-full"
          >
            Book now
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddReservations;
