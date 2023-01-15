import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";
import { styles } from "./Carousel";

function CarouselFadeExample({ width, images, title, body, number }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={styles.container}
      style={{ width }}
      dir="rtl"
      component={Link}
      to={`/details/${number}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Carousel fade interval={1000}>
        {images.map((item, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item}
                alt={index}
                height={230}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Box sx={styles.text}>{title}</Box>
      <Box sx={styles.line}>{}</Box>
      <Box sx={styles.text}>{body}</Box>
    </Box>
  );
}

export default CarouselFadeExample;