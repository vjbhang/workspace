import { useState, useRef } from "react";
import styled from "styled-components";
import "./index.css";

export default function TimeInput({ onClickAddTimer }) {
  const counterRef = useRef(0);
  const [isHour, setHour] = useState(0);
  const [isMinute, setMinute] = useState(0);
  const [isSecond, setSecond] = useState(0);

  function handleHour(event) {
    setHour(event.target.value);
  }

  function handleMinute(event) {
    setMinute(event.target.value);
  }

  function handleSecond(event) {
    setSecond(event.target.value);
  }

  return (
    <Container>
      <InputWrapper>
        <input
          className="time-input"
          type="number"
          placeholder="Hour"
          value={isHour}
          onChange={handleHour}
        />
        <InputLabel>Hour</InputLabel>
      </InputWrapper>
      <InputWrapper>
        <input
          className="time-input"
          type="number"
          placeholder="Minute"
          value={isMinute}
          onChange={handleMinute}
        />
        <InputLabel>Minute</InputLabel>
      </InputWrapper>
      <InputWrapper>
        <input
          className="time-input"
          type="number"
          placeholder="Second"
          value={isSecond}
          onChange={handleSecond}
        />
        <InputLabel>Second</InputLabel>
      </InputWrapper>
      <button
        onClick={
          onClickAddTimer
            ? () => {
                onClickAddTimer(isHour, isMinute, isSecond, counterRef.current);
                counterRef.current += 1;
              }
            : console.error("Error: Add onClickAddTimer function prop.")
        }
      >
        Add Timer
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2px;
  padding: 16px 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.p`
  color: white;
  font-size: 10px;
  padding-top: 2px;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
