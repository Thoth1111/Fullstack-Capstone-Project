import React from 'react';
import Carousel from '../components/Carousel';

function Home() {


  return (
    <div className="flex flex-col  h-full  md:grid md:ml-52 md:grid-cols-12">
      <div className=" p-0 col-span-12 lg:col-start-2 lg:col-span-10 w-full h-full  m-auto md:mt-20 text-center">
        <p className="text-4xl font-bold">LATEST MODELS</p>
        <p className="mt-4 text-lg text-gray-400 font-bold">Please select a Vespa Model</p>

        <Carousel />
      </div>
    </div>
  );
}

export default Home;