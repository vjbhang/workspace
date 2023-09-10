import { Container } from "./TimeBlock.styled"
import { useRelativeTimer } from "./effects";

export function TimeBlock() {

  const isStartTime = useRelativeTimer();

  return (
    <Container width={0}>
      <p>{isStartTime}</p>
    </Container>
  )
};