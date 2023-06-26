import { data } from 'jquery';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useGetAllVespasQuery } from '../redux/vespaAPI';
import { Link } from 'react-router-dom';
import Vespa from './Vespa';

export default function Carousel() {
  const [mobileMode, setMobileMode] = useState(false);

  const { data: vespas, error, isLoading } = useGetAllVespasQuery();
  
  
  
  



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMobileMode(false);
      } else {
        setMobileMode(true);
      }
    };
    // Add event listener to the window resize event
    window.addEventListener('resize', handleResize);
    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update mobile mode state when screen size changes
    if (window.innerWidth > 640 && mobileMode) {
      setMobileMode(false);
    } else if (window.innerWidth <= 640 && !mobileMode) {
      setMobileMode(true);
    }
  }, [mobileMode]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong...</p>;
  
  const slidesToShow = vespas.length > 3 ? 3 : vespas.length;

  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };


  return (
    <div className="flex h-5/6">
    <Slider {...settings} className="flex items-center w-full my-auto h-5/6">
    {vespas?.map((vespa) => (
      // <Link to={`/vespa/${vespa.id}`} key={vespa.id}>
        <Vespa {...vespa}  key={vespa.id} />
      // </Link>
    ))}
  </Slider>
    </div>
  );
}
