import { data } from 'jquery';
import React, { Component } from 'react';

import Slider from 'react-slick';
import { useGetAllVespasQuery } from '../redux/vespaAPI';
import { Link } from 'react-router-dom';

import Vespa from './Vespa';

export default function Carousel() {
  const { data: vespas, error, isLoading } = useGetAllVespasQuery();
  
  
  
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong...</p>;
  
  let slidesToShow = vespas.length > 3 ? 3 : vespas.length;
  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="h-5/6 flex">
    <Slider {...settings} className="flex items-center  my-auto h-5/6 w-full">
   
   
   {vespas?.map((vespa) => (
      // <Link to={`/vespa/${vespa.id}`} key={vespa.id}>
        <Vespa key={vespa.id} {...vespa} />
      // </Link>
    ))}
  </Slider>
    </div>
  );
}
