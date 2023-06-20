import React, { useEffect, useState } from 'react';
import * as VibrantAPI from 'node-vibrant';
// import { Outlet } from 'react-router-dom';
import getPallete from '../helpers/pallete';

const Vespa = () => {
  const url = 'https://cdn.xxl.thumbs.canstockphoto.com/yellow-muscle-car-yellow-muscle-car-against-dark-cloudy-background-stock-photos_csp2503213.jpg';



  const [pallete, setPallete] = useState();

  useEffect(() => {
    const vibrant = getPallete(url);
    vibrant.then((pallete) => setPallete(pallete));
  }, []);

  const vibrant = pallete?.Vibrant.getHex();

  return (

    <div className =' h-96 w-fit border-solid border-2 items-center bg-rose-300 px-10 flex flex-col justify-between '>


      <div className="p-2 w-40 mt-16 h-40 flex items-center rounded-full" style={{ backgroundColor: vibrant }}>
      
      <img src={url} alt=""  className='rounded-full '/>
      </div>

      <div>
        Details Go herer
      </div>

      <div>

        Social Media Icons here
      </div>

		
    </div>
  );
};

export default Vespa;