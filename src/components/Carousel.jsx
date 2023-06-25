import { data } from 'jquery';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useGetAllVespasQuery } from '../redux/vespaAPI';
import { Link } from 'react-router-dom';
import Vespa from './Vespa';

export default function Carousel() {
  const [mobileMode, setmobileMode] = useState(false);
  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setmobileMode(false);
      } else {
        setmobileMode(true);
      }
      console.log(mobileMode);
    };

    // Add event listener to the window resize event
    window.addEventListener('resize', handleResize);
    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { data: vespas, error, isLoading } = useGetAllVespasQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong...</p>;

  return (
    <div className="flex h-5/6">
      <Slider
        {...settings}
        className="flex flex-col justify-center md:flex-row md:items-center md:my-auto md:h-5/6 md:w-full lg:flex-row lg:items-center lg:my-auto lg:h-5/6 lg:w-full"
      >
        {vespas?.map((vespa) => (
          <Link to={`/vespa/${vespa.id}`} key={vespa.id}>
            <Vespa {...vespa} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
