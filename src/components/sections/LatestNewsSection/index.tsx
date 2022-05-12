import React from "react";
import useGetData from "../../../hooks/useGetData";
import Button from "../../Button";
import NewsCard from "../../NewsCard";
import Heading from "../../typography/Heading";
import {
  CardContainer,
  Container,
  Link,
  MainContainer,
  TitleContainer,
} from "./index.styles";
import { months } from "../../../constants";

const LatestNewsSection = () => {
  const cards = useGetData("newsCard", "reportedTime", true);

  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <Heading>Latest News</Heading>
          <Link>View All</Link>
        </TitleContainer>
        <CardContainer>
          {cards.map(
            ({ image, title, author, linkText, reportedTime }: any) => {
              const date = new Date(reportedTime);
              return (
                <NewsCard
                  image={image?.fields?.file?.url ?? ""}
                  title={title}
                  linkText={linkText}
                  imageTitle={`by ${author} | ${months[date.getMonth()].slice(
                    0,
                    3
                  )} ${date.getDate()}, ${date.getFullYear()}`}
                  key={title}
                />
              );
            }
          )}
        </CardContainer>
      </MainContainer>
    </Container>
  );
};

export default LatestNewsSection;
