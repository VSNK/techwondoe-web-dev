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

  const isBigScreen = window.screen.width > 375;

  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <Heading>Latest News</Heading>
          {isBigScreen ? <Button>View All</Button> : <Link>View All</Link>}
        </TitleContainer>
        <CardContainer>
          {cards.map(({ image, title, author, reportedTime }: any) => {
            const date = new Date(reportedTime);
            return (
              <NewsCard
                image={image?.fields?.file?.url ?? ""}
                title={title}
                imageTitle={`by ${author} | ${months[date.getMonth()].slice(
                  0,
                  3
                )} ${date.getDate()}, ${date.getFullYear()}`}
                key={title}
              />
            );
          })}
        </CardContainer>
      </MainContainer>
    </Container>
  );
};

export default LatestNewsSection;
