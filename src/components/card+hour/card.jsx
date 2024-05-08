import { Container, Number } from "./styles";

export function Card({ number }) {
  return (
    <Container>
      <Number>{number.toString()}</Number>
    </Container>
  );
}

export default Card;
