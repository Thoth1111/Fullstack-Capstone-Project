import React, { Component } from 'react';

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
  const settings = {
  
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };



  return (
    <div className='h-5/6 flex'>

      <Slider  {...settings} className="flex items-center  my-auto h-5/6 w-full">

        <div>
          <Vespa></Vespa>
        </div>
        <div>
          <Vespa></Vespa>
        </div>
     
        <div>
          <Vespa></Vespa>
        </div>
        <div>
          <Vespa></Vespa>
        </div>
        <div>
          <Vespa></Vespa>
        </div>
      </Slider>
    </div>
  );
}
