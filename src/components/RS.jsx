import React, { Component } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

export default function RS() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <Box>
          <img src="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/news1-1.jpg" />
        </Box>{" "}
        <Box>
          <img src="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/news1-2.jpg" />
        </Box>{" "}
        <Box>
          <img src="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/news1-1.jpg" />
        </Box>{" "}
        <Box>
          <img src="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/news1-2.jpg" />
        </Box>
      </Slider>
    </div>
  );
}
