import React, { FC } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useTheme } from "styled-components";
import SubHeading from "../typography/SubHeading";
import {
  Container,
  HeadingContainer,
  Image,
  ImageTitle,
  Link,
  LinkContainer,
} from "./index.styles";

interface NewsCardProps {
  image: string;
  imageTitle: string;
  title: string;
  linkText: string;
}

const NewsCard: FC<NewsCardProps> = ({
  image,
  imageTitle,
  title,
  linkText,
}) => {
  const theme: any = useTheme();
  return (
    <Container>
      <Image src={image} />
      <ImageTitle>{imageTitle}</ImageTitle>
      <HeadingContainer>
        <SubHeading>{title}</SubHeading>
      </HeadingContainer>
      <LinkContainer>
        <Link>{linkText}</Link>
        <FiArrowRight size={22} color={theme?.primary ?? "#000"} />
      </LinkContainer>
    </Container>
  );
};

export default NewsCard;
