import { Container } from "./TimeBlock.styled"
import { useRelativeTimer } from "./hooks";
import { useState, useEffect } from "react";
import moment from "moment";

export function TimeBlock() {
  const [isStartTime, isEndTime] = useRelativeTimer();
  const [isGrowingBy, setGrowingBy] = useState<number>();

  useEffect(() => {
    if (isStartTime && isEndTime) {
      // console.log(isEndTime);
      // console.log(moment(isStartTime).subtract(isEndTime).format());
      console.log(isEndTime.diff(isStartTime, "seconds"), 'seconds');
      setGrowingBy(isEndTime.diff(isStartTime, "seconds"));
    }
  }, [isEndTime]);

  return (
    <Container width={isGrowingBy && isGrowingBy * 50}>
      <p>{isStartTime?.format()}</p>
      <p>{isEndTime?.format()}</p>
    </Container>
  )
};