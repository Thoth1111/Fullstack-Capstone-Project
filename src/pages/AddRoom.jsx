import backimg from '../assets/background.jpg';

function AddRoom() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-8 items-center text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <img src={backimg} alt="Background" className="h-full w-full object-fill " />
        <div className="absolute inset-0 z-0 opacity-90 bg-[#96bf01]" />
      </div>
      <h1 className="font-bold tracking-widest text-3xl font-mono z-10">BOOk A ROOM</h1>
      <hr className="w-2/5 bg-gray-600 z-10" />
      <p className="tracking-widest z-10">oljloh.ohibiooooooooooooooooooooooooooooooo</p>
      <div className="flex gap-4 z-10">
        <select id="countries" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white">
          <option selected className="text-black">Choose a country</option>
          <option value="US" className="text-black">United States</option>
          <option value="CA" className="text-black">Canada</option>
          <option value="FR" className="text-black">France</option>
          <option value="DE" className="text-black">Germany</option>
        </select>
        <input type="date" id="start-date" name="start-date" className="text-white-200 font-semibold py-2 px-4 rounded-full bg-transparent border-2 border-white" />
        <button type="submit" className="bg-white font-semibold text-[#96bf01] py-2 px-10 rounded-full">
          Book now
        </button>
      </div>
    </div>
  );
}

export default AddRoom;
