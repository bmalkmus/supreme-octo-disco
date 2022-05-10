import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SpeederContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Target = styled.div`
  display: none;
  width: 8px;
  height: 8px;
  background-color: green;
`;

const Speeder: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [start, setStart] = useState(0);
  const [time, setTime] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ready) {
      const height = window.innerHeight;
      const width = window.innerWidth;
      console.log(height, width);
      if (targetRef.current) {
        const randHeight = Math.floor((Math.random() * (height - 64)) / 2);
        const randWidth = Math.floor(Math.random() * (width / 2));
        targetRef.current.style.display = "block";
        targetRef.current.style.transform = `translate(${
          Math.floor(Math.random() * 2) > 1 ? "-" : "+"
        }${randWidth}px, ${
          Math.floor(Math.random() * 2) > 1 ? "-" : "+"
        }${randHeight}px)`;
      }
    }
  }, [ready]);

  const handleStart = () => {
    setReady(true);
    setStart(Date.now());
  };

  const handleClick = () => {
    const _time = Date.now() - start;
    setTime(_time);
    setReady(false);
  }

  return (
    <>
      {ready ? (
        <SpeederContainer>
          <Target ref={targetRef} onClick={()=>handleClick()}/>
        </SpeederContainer>
      ) : (
        <SpeederContainer>
            {time !== 0 && (
                <div>
                    <h3>{`${time} seconds`}</h3>
                </div>
            )}
          <button onClick={() => handleStart()}>Start</button>
        </SpeederContainer>
      )}
    </>
  );
};

export default Speeder;
