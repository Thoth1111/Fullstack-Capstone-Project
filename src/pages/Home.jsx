import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';

function Home() {
  const token = useSelector((state) => state.persistedReducer.token);

  return (
    <div>
      <div className="w-[1100px] lg:ml-60 md:ml-60 bg-slate-50 h-5/6 m-auto mt-24 text-center">
        <p className="text-4xl mt-8 font-bold">Latest Models</p>
        <p className="mt-4 text-lg">Please Select A Vespa Model</p>

        <Carousel />
      </div>
    </div>
  );
}

export default Home;
