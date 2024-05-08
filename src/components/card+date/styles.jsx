import styled from "styled-components";
import breakpoints from "../../breakpoints/breakpoints";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a7f90e;

  width: 10em;
  height: 7em;
  border-radius: 30px;

  box-shadow: -2px -4px 4px rgba(0.6549, 0.9765, 0.0549, 0.5);
  @media ${breakpoints.bg} {
    padding: 20px;
  }
  @media ${breakpoints.md} {
    padding: 20px;
    width: 9em;
  }
  @media ${breakpoints.sm} {
    padding: 20px;
    width: 7em;
  }
`;

export const Number = styled.h2`
  font-size: 400%;
  @media ${breakpoints.sm} {
    font-size: 300%;
  }
`;
export default Container;
