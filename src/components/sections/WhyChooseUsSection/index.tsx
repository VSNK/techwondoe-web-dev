import { FC } from "react";
import useGetData from "../../../hooks/useGetData";
import ChooseUsCard from "../../ChooseUsCard";
import {
  CardContainer,
  CenteredHeading,
  CenteredText,
  Container,
} from "./index.styles";

const WhyChooseUsSection: FC = () => {
  const cards = useGetData("whyChooseUs", "order");

  return (
    <Container>
      <CenteredHeading>Why choose us?</CenteredHeading>
      <CenteredText>
        We have decades of experience, having successfully recruited across the
        globe for many years.
      </CenteredText>
      <CardContainer>
        {cards.map(({ title, description, order }) => (
          <ChooseUsCard key={order} title={title} description={description} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default WhyChooseUsSection;
