import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
   transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export default styled.div`
  display: inline-block;
  animation: ${rotate} 1s infinite;
`;
