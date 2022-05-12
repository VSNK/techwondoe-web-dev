import { FC, useEffect } from "react";
import { useContentfulClient } from "../../../contexts/ContentfulProvider";
import TitleBar from "../../TitleBar";
import Paragraph from "../../typography/Paragraph";
import {
  Container,
  ImageContainer,
  BackgroundImage,
  ImageContent,
  ImageText,
} from "./index.styles";

const HomeSection: FC = () => {
  return (
    <Container>
      <TitleBar />
      <ImageContainer>
        <BackgroundImage src="/home_background.png" />
        {window.screen.width <= 375 && (
          <ImageText>Take the leap with us</ImageText>
        )}
      </ImageContainer>
    </Container>
  );
};

export default HomeSection;
