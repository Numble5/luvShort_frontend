import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => {
        return (
          <CarouselWrapper key={item.idx}>
            <CarouselImgWrapper
              img={`/assets/carouselAssets/${item.idx}.svg`}
            />
            <div className="carousel__content-wrapper">
              <h2>{item.title}</h2>
              <div>{item.content}</div>
            </div>
          </CarouselWrapper>
        );
      })}
    </Slider>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  .carousel__content-wrapper {
    width: 95%;
    margin: 10px auto 0 auto;

    > h2 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    > div {
      font-size: 15px;
      line-height: 1.5;
    }
  }
`;

const CarouselImgWrapper = styled.div`
  width: 100%;
  min-height: 160px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  bakcground-size: cover;
`;
