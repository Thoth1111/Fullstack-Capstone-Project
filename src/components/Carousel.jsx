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
    slidesToShow: 3,
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
    <>
      {!mobileMode ? (
        <div className="h-5/6 flex">
          <Slider {...settings} className="flex items-center my-auto h-5/6 w-full justify-center">
            {vespas?.map((vespa) => (
              <Link to={`/vespa/${vespa.id}`} key={vespa.id}>
                <Vespa {...vespa} />
              </Link>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center h-full overflow-y-scroll">
          {vespas?.map((vespa) => (
            <Link to={`/vespa/${vespa.id}`} key={vespa.id}>
              <Vespa {...vespa} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
