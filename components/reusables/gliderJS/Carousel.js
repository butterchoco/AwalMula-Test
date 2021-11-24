import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: ${({ isGrabbing }) => {
    return isGrabbing ? "grabbing" : "grab";
  }};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  border-radius: 20px;
  border: 1px solid #222;
  padding: 1rem;

  ::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

const Slider = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 10px;
  position: relative;
  transform: translateX(
    ${({ pos }) => {
      console.log(pos);
      return pos;
    }}%
  );
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  transition: transform 0.5s ease;

  /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
  -ms-user-select: none;
  user-select: none;

  & * {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;

    /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
    -ms-user-select: none;
    user-select: none;
  }
`;

const ArrowButton = styled.button`
  min-width: 32px;
  min-height: 32px;
  background-color: #fff;
  border-radius: 81px;
  box-shadow: 0 0 4px #ccc;
  border: 1px solid #eee;

  &:hover {
    background-color: #eee;
  }
`;

const Carousel = ({ children }) => {
  const [pos, setPos] = useState(0);
  const [movementX, setMovementX] = useState(0);
  const [slider, setSlider] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const SliderRef = useRef(null);
  const speed = 15;
  let timer;

  useEffect(() => {
    const target = SliderRef.current;
    if (target) setSlider(target);
  }, []);

  return (
    <Container isGrabbing={isGrabbing}>
      <ArrowButton
        style={{
          display: pos >= 0 ? "none" : "block",
          position: "absolute",
          zIndex: "1",
          top: "50%",
          left: "-2rem",
          transform: "translateY(-50%)",
        }}
        onClick={() => {
          setPos((prev) => prev + speed);
        }}
      >
        {"<"}
      </ArrowButton>
      <ArrowButton
        style={{
          display: pos <= -70 ? "none" : "block",
          position: "absolute",
          zIndex: "1",
          top: "50%",
          right: "-2.5rem",
          transform: "translateY(-50%)",
        }}
        onClick={() => {
          setPos((prev) => prev - speed);
        }}
      >
        {">"}
      </ArrowButton>
      <Wrapper>
        <Slider
          ref={SliderRef}
          pos={pos}
          onDragStart={(e) => e.preventDefault()}
        >
          {children}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Carousel;
