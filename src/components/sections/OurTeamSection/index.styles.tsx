import styled from "styled-components";
import Paragraph from "../../typography/Paragraph";

export const Container = styled.div`
  min-height: 700px;
  background: #fae1d54d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  @media screen and (min-width: 376px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 0px;
  @media screen and (min-width: 376px) {
    padding: 50px;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (min-width: 376px) {
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
