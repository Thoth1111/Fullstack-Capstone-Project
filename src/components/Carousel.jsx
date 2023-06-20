import React, { Component } from 'react';

import Slider from 'react-slick';
import { useGetAllVespasQuery } from '../redux/vespaAPI';

import Vespa from './Vespa';

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style }}
//       onClick={onClick}
//     />
//   );
// }

export default function Carousel() {
  const settings = {

    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const {data, error, isLoading} = useGetAllVespasQuery();

  console.log(data)
  console.log('from carousel');

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
