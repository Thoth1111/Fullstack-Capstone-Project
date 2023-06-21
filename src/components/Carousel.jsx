import React, { Component } from 'react';

import Slider from 'react-slick';
import { useGetAllVespasQuery } from '../redux/vespaAPI';

import Vespa from './Vespa';

export default function Carousel() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const { data, error, isLoading } = useGetAllVespasQuery();

  return (
    <div className="h-5/6 flex ">
      <Slider {...settings} className="flex items-center  my-auto h-5/6 w-full">
        <Vespa />
        <Vespa />
        <Vespa />
        <Vespa />
        <Vespa />
        <Vespa />
      </Slider>
    </div>
  );
}
