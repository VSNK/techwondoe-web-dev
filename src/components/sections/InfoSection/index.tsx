import React, { useMemo } from "react";
import useGetData from "../../../hooks/useGetData";
import InfoCard from "../../InfoCard";
import { CardContainer, Container } from "./index.styles";

const InfoSection = () => {
  const cards = useGetData("infoCard", "order");

  return (
    <Container>
      <CardContainer>
        {cards.map(({ title, description, iconType, order }) => (
          <InfoCard
            title={title}
            description={description}
            iconType={iconType}
            key={order}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default InfoSection;
