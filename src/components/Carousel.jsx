import React, { Component } from 'react';

import Slider from 'react-slick';
import { useGetAllVespasQuery } from '../redux/vespaAPI';
import { Link } from 'react-router-dom';

import Vespa from './Vespa';

export default function Carousel() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const { data: vespas, error, isLoading } = useGetAllVespasQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong...</p>;

  return (
    <div className="h-5/6 flex ">
      <Slider {...settings} className="flex items-center my-auto h-5/6 w-full">
        {vespas?.map((vespa) => (
          <Link to={`/vespa/${vespa.id}`} key={vespa.id}>
            <Vespa {...vespa} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
