import styled from "styled-components";
import Button from "../../Button";
import Heading from "../../typography/Heading";
import Paragraph from "../../typography/Paragraph";

export const Container = styled.div`
  min-height: 430px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const WhiteButton = styled(Button)`
  background-color: white;
  color: ${(props) => props.theme.primary};
`;

export const WhiteParagraph = styled(Paragraph)`
  color: white;
  text-align: center;
  max-width: 750px;
  font-size: 16px;
  margin-top: 0px;
  @media screen and (min-width: 376px) {
    font-size: 18px;
  }
`;

export const WhiteHeading = styled(Heading)`
  color: white;
  text-align: center;
  font-size: 24px;
  margin-bottom: 0px;
  @media screen and (min-width: 376px) {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;
