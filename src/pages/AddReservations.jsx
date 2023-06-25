import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../components/BackButton';
import backimg from '../assets/background.jpg';

import { Toast, useToast } from '../components/Toast';

import { useGetAllVespasQuery, useCreateReservationMutation } from '../redux/vespaAPI';

function AddReservations() {
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
    <div className="h-screen w-full p-2 lg:w-screen md:w-screen flex flex-col justify-center gap-8 items-center text-white relative">
      {displayBool && <Toast message={message} type={type} />}

      <BackButton />

      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="h-full w-full object-fill " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className="font-bold tracking-widest text-3xl font-mono z-10">Book A Vespa</h1>
      <hr className="w-2/5 bg-gray-600 z-10" />
      <p className="tracking-widest z-10 text-center">
        There are {vespas.length} Vespas available for rent. Please select the Vespa you want to rent, and the start
        and end date of your reservation
      </p>

      <form action=" " onSubmit={handleSubmit} className="z-10 w-full flex flex-col">
        <div className="flex space-y-4 flex-col items-center z-10 ">
          <div className="flex gap-4 flex-col md:flex-row lg:flex-row z-10">
            <div className="flex flex-col space-y-0 items-center mt-1.5">
              <small ref={vespaErrorRef} className="mb-1 invisible text-red-700">
                {' '}
                Select a Vespa
              </small>

              <select
                id="vespas"
                name="selectedVespa"
                ref={vespaRef}
                value={reservationData.selectedVespa}
                onChange={handleOnChange}
                onBlur={handleVespaOnBlur}
                className="text-white-200 font-semibold  h-12 mt-7 required px-4 rounded-full bg-transparent border-2 border-white"
              >
                <option value="" disabled="" className="hidden">
                  Choose a Vespa
                </option>

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
                id="startDate"
                value={startDate}
                min={minDate}
                max={startDateMaxDate}
                name="startDate"
                required
                className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white"
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
                className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white"
              />
            </div>
          </div>

          <input
            type="text"
            name="description"
            required
            value={reservationData.description}
            placeholder="Enter a description of the reservation "
            className=" text-white-200 font-semibold py-2 placeholder-white w-5/6 px-4 rounded-full bg-transparent border-2 border-white"
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
