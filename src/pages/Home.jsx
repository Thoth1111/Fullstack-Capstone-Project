import React from 'react';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      <div className="w-[1100px] ml-60 bg-slate-50 h-5/6 m-auto mt-24 text-center">
        <p className="text-4xl mt-8 font-bold">Latest Models</p>
        <p className="mt-4 text-lg">Please Select A Vespa Model</p>

        <Carousel />
      </div>
    </div>
  );
}

export default Home;
