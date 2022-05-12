import styled from "styled-components";

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #111012;
  margin: 0px;
  @media screen and (min-width: 376px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export default Heading;
