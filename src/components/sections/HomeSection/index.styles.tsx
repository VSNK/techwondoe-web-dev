import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* height: 100vh; */
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 376px) {
    width: 100%;
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
`;

export const BackgroundImage = styled.img`
  height: 490px;
  background-size: cover;
  margin-left: -58%;
  overflow: hidden;
  z-index: -2;
  @media screen and (min-width: 500px) {
    width: 100%;
    height: 100%;
    margin-left: 0px;
  }
`;

export const RibbonImage = styled.img`
  height: 490px;
  background-size: cover;
  position: absolute;
  right: -4%;
  top: 5%;
  margin-left: -58%;
  overflow: hidden;
  transform: rotate(-7.51deg);
  @media screen and (min-width: 500px) {
    width: 45%;
    height: 88%;
    margin-left: 0px;
  }
`;
