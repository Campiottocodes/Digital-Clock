import styled from "styled-components";
import breakpoints from "../../breakpoints/breakpoints";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #a7f90e;

  width: 18em;
  height: 18em;
  border-radius: 30px;
  box-shadow: inset 1px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.xl}{
    width: 16em;
    height: 16em;
  }
  @media ${breakpoints.xm} {
    width: 14em;
    height: 14em;
  }
  @media ${breakpoints.bg} {
    width: 12em;
    height: 12em;
  }
  @media ${breakpoints.ml} {
      width: 10em;
      height: 10em;
  }
  @media ${breakpoints.md} {
   width: 8em;
   height: 8em;
}
@media ${breakpoints.sm} {
   width: 6em;
   height: 6em;
}
@media ${breakpoints.usm} {
   width: 5em;
   height: 5em;
}
`;


export const Number = styled.h1`
font-size: 10em;

  
  @media ${breakpoints.bg} {
   font-size: 8em;
  }
 
  @media ${breakpoints.md} {
    font-size: 6em;
}
@media ${breakpoints.sm} {
  font-size: 5em;
}
@media ${breakpoints.usm} {
  font-size: 4em;
}
`
export default Container;