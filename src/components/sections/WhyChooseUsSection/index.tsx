import { FC } from "react";
import useGetData from "../../../hooks/useGetData";
import useSingleEntryData from "../../../hooks/useSingleEntryData";
import ChooseUsCard from "../../ChooseUsCard";
import {
  CardContainer,
  CenteredHeading,
  CenteredText,
  Container,
} from "./index.styles";

const WhyChooseUsSection: FC = () => {
  const cards = useGetData("whyChooseUs", "order");
  const { title, description }: any = useSingleEntryData(
    "2y40t3f9FaLhZkn6Qlt3Wo"
  );

  return (
    <Container>
      <CenteredHeading>{title}</CenteredHeading>
      <CenteredText>{description}</CenteredText>
      <CardContainer>
        {cards.map(({ title, description, order }) => (
          <ChooseUsCard key={order} title={title} description={description} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default WhyChooseUsSection;
