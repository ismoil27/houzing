import React, { useRef } from "react";
import { Container, Icon, Img, Wrapper } from "./style";
import img1 from "../../../assets/imgs/landing 1.png";
import img2 from "../../../assets/imgs/landing 2.png";

const Carousel = () => {
  const slider = useRef();
  return (
    <Wrapper>
      <Icon.Left onClick={() => slider.current.prev()} />
      <Icon.Right onClick={() => slider.current.next()} />

      <Container dots autoplay ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img1} />
        <Img src={img2} />
      </Container>
    </Wrapper>
  );
};

export default Carousel;
