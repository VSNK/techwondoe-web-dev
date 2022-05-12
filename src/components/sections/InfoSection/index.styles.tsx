import styled from "styled-components";

export const Container = styled.div`
  min-height: 700px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.secondary};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  @media screen and (min-width: 880px) {
    flex-direction: row;
  }
`;

export const RibbonImage = styled.img`
  height: 490px;
  background-size: cover;
  position: absolute;
  right: 0%;
  bottom: 0%;
  overflow: hidden;
  visibility: hidden;
  @media screen and (min-width: 500px) {
    width: 65%;
    height: 88%;
  }
  @media screen and (min-width: 880px) {
    visibility: visible;
  }
`;
