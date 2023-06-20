import React, { Component } from 'react';

import  {useGetAllVespasQuery} from  '../redux/vespaAPI'

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
import Slider from 'react-slick';

export default function Carousel() {
  
  const {data, error, isLoading} = useGetAllVespasQuery();
  
  let slidesToShow = 2
  slidesToShow ??= (data?.length < 3)? data?.length : 1
  
  const settings = {
  
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };



  console.log(data)

  return (
    <div className='h-5/6 flex '>

      <Slider  {...settings} className="flex items-center  my-auto h-5/6 w-full">

        <Vespa />
        <Vespa />
        

      </Slider>
    </div>
  );
}
