import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 376px) {
    width: 100%;
    position: static;
  }
`;

export const ImageContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const ImageText = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  position: absolute;
  top: 25%;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

export const BackgroundImage = styled.img`
  height: 490px;
  background-size: cover;
  margin-left: -58%;
  @media screen and (min-width: 376px) {
    width: 100%;
    height: 100%;
    margin-left: 0px;
  }
`;
