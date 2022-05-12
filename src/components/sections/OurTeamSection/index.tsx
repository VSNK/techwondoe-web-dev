import React from "react";
import useGetData from "../../../hooks/useGetData";
import Button from "../../Button";
import Heading from "../../typography/Heading";
import {
  CardContainer,
  Container,
  ContentContainer,
  Image,
  SmallPrimaryText,
  Text,
} from "./index.styles";

type DataType = {
  title: string;
  description: string;
  miniTitle: string;
  buttonText: string;
  image: any;
};

const OurTeamSection = () => {
  const data = useGetData("ourTeamSection");
  const { title, description, miniTitle, buttonText, image }: DataType =
    data.length > 0
      ? data[0]
      : {
          title: "",
          description: "",
          miniTitle: "",
          buttonText: "",
          image: null,
        };

  console.log("data", data);

  return (
    <Container>
      <CardContainer>
        <div>
          <Image src={image?.fields?.file.url} />
        </div>
        <ContentContainer>
          <SmallPrimaryText>{miniTitle}</SmallPrimaryText>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Button>{buttonText}</Button>
        </ContentContainer>
      </CardContainer>
    </Container>
  );
};

export default OurTeamSection;
