import { useState } from 'react';
import { useCreateNewVespaMutation } from '../redux/vespaAPI';

import { Toast, useToast } from '../components/Toast';

import backimg from '../assets/background.jpg';
import BackButton from '../components/BackButton';

function AddRoom() {
  const [createVespa, { isLoading: isCreating }] = useCreateNewVespaMutation();

  const [displayBool, message, type, showToast] = useToast();

  const initialVespaData = {
    Name: '',
    Description: '',
    Url: '',
    Price: '',

  };

  const [vespaData, setVespaData] = useState(initialVespaData);

  const handleInputChange = (e) => {
    setVespaData({
      ...vespaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVespa = {
      vespa: {
        name: vespaData.Name,
        description: vespaData.Description,
        icon: vespaData.Url,
        cost_per_day: vespaData.Price,
      },

    };

    createVespa(newVespa);
    showToast('Vespa added successfully', 'success');

    setVespaData(initialVespaData);
  };

  return (

    <div className="h-screen w-screen flex flex-col justify-center gap-8 items-center text-white relative">

      {displayBool && <Toast message={message} type={type} />}

      <BackButton />

      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="h-full w-full object-fill " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>

      {/* For a vespa image preview */}
      <div className="z-10 absolute left-40 top-52 w-80 h-80 text-center flex items-center justify-center outline-4 outline rounded-full">

        { vespaData.Url && <img src={vespaData.Url} alt="Background" className="w-80 h-80 rounded-full object-fill " />}

        { !vespaData.Url && <p className="text-lg font-bold">Image Preview</p> }

      </div>

      <h1 className="text-white z-10 font-serif  ml-[350px]  font-extrabold text-3xl">Add new vespa</h1>

      <form className="relative z-10 bg-white p-4 w-2/6  ml-[350px] flex flex-col items-end" onSubmit={handleSubmit}>

        <div className="relative z-0 w-full mb-6 group">
          <input type="text" value={vespaData.Name} name="Name" id="Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInputChange} />
          <label htmlFor="Name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vespa model's name</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="text" value={vespaData.Description} name="Description" id="Description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInputChange} />
          <label htmlFor="Description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="number" value={vespaData.Price} name="Price" id="Price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInputChange} />
          <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="url" value={vespaData.Url} name="Url" id="Url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInputChange} />
          <label htmlFor="Url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model image's url</label>
        </div>
        <button type="submit" className="text-white self-center  w-3/6 font-semibold bg-[#96bf01] py-2 rounded-full">
          Add Vespa
        </button>
      </form>

    </div>
  );
}

export default AddRoom;