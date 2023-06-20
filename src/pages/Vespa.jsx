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

    <div className =' h-72 w-60 border-black'>


      <div className="p-2 w-64 h-64 h-fit flex items-center border-round" style={{ backgroundColor: vibrant }}>


      </div>
		
    </div>
  );
};

export default Vespa;