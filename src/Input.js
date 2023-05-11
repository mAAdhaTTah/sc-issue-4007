import styled from "styled-components";

// Create a <Title> react component that
// renders an <h1> which is centered, palevioletred and sized at 1.5em
export default styled.input`
  font-size: 1.5em;
  &::placeholder {
    color: green;
  }
`;
