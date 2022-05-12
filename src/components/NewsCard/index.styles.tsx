import styled from "styled-components";
import Paragraph from "../typography/Paragraph";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 376px) {
    min-height: 400px;
    max-width: 335px;
    width: 32%;
    margin-bottom: 0px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 224px;
  margin-bottom: 21px;
`;

export const ImageTitle = styled(Paragraph)`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.primary};
  margin-right: 5px;
`;

export const HeadingContainer = styled.div`
  flex: 1;
`;

export const RightArrow = styled.img`
  width: 15px;
`;
