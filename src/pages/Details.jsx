


function Details() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-8 bg-red-100 ml-52 h-screen">

        <div className = " md:col-span-5 lg:col-span-6 flex items-center justify-center bg-red-200">

          <img src="https://as1.ftcdn.net/v2/jpg/04/88/07/66/1000_F_488076617_IVBsEeXAy56swgxUxXjDG3wKRTHJj2HR.jpg" alt="" />

        </div>

        <div className=" mx-auto p-2 md:col-span-3 lg:col-span-2 flex flex-col bg-green-200">

          <div className="flex flex-col items-end">
              <p className="text-2xl font-bold"> VESPA NAME </p>
              <small className="md:text-md">$350 deposit upon any Vespa Purchase</small>
              
          <div className="flex w-52 mt-4 flex-col items-end">
              <div className="w-full flex items-center text-sm px-1 justify-between h-10 bg-neutral-200">
                <p>Finance Fee</p>
                <p>$350</p>
              </div>  
              
              <div className="w-full flex items-center text-sm px-1 justify-between h-10 bg-white">
                <p>Option to Purchase Fee</p>
                <p>$350</p>
              </div>

              <div className="w-full flex items-center text-sm px-1 justify-between h-10 bg-neutral-200">
                <p>Total Amount Payable</p>
                <p>$350</p>
              </div> 

               <div className="w-full flex items-center text-sm px-1 justify-between h-10 bg-white">
                <p>Duration</p>
                <p>48 Months</p>
              </div> 
              
              <p className="self-start mt-4"><b>5.9% APR</b> Representative </p>
              </div>

          </div>

        </div>
    </div>
  );
}

export default Details;
