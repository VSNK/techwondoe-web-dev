import styled from "styled-components";
import Paragraph from "../../typography/Paragraph";

export const Container = styled.div`
  min-height: 700px;
  background: #fae1d54d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (min-width: 900px) {
    padding: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0px;
  display: block;
  margin: auto;
  @media screen and (min-width: 376px) {
    max-width: 450px;
    border-radius: 10px;
  }
  @media screen and (min-width: 900px) {
    max-width: 450px;
    padding: 40px;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (min-width: 900px) {
    margin-left: 50px;
    padding: 0px;
  }
`;

export const Text = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
`;

export const SmallPrimaryText = styled(Paragraph)`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 0px;
  color: ${(props) => props.theme.primary};
`;

export const RibbonImage = styled.img`
  height: 490px;
  background-size: cover;
  position: absolute;
  left: 0%;
  top: -100px;
  margin-left: -58%;
  overflow: hidden;
  visibility: hidden;
  @media screen and (min-width: 1050px) {
    visibility: visible;
    width: 35%;
    height: 88%;
    margin-left: 0px;
  }
`;
