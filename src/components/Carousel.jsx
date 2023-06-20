import React, { Component } from 'react';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
import Slider from 'react-slick';

export default function Carousel() {
  const settings = {
  
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
  };

  const slider = React.useRef(null)

  return (
    <div className='border-black border-1 w-52 m-auto '>
      <h2> Single Item</h2>

      <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
      <Slider ref={slider} {...settings}>

        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
        <button onClick={() => slider?.current?.slickNext()}>Next</button>
    </div>
  );
}
