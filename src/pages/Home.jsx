import React from 'react';
import Carousel from '../components/Carousel';

function Home() {


  return (
    <div className="flex flex-col w-full">
      <div className="md:w-[1100px] lg:w-[1100px] lg:ml-60 md:ml-60 w-full h-5/6 m-auto md:mt-24 lg:mt-24 text-center">
        <p className="text-4xl mt-8 font-bold">LATEST MODELS</p>
        <p className="mt-4 text-lg text-gray-400 font-bold">Please select a Vespa Model</p>

        <Carousel />
      </div>
    </div>
  );
}

export default Home;
