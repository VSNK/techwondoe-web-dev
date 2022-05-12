import { FC } from "react";
import styled, { useTheme } from "styled-components";
import SubHeading from "../typography/SubHeading";
import {
  Container,
  ContentContainer,
  IconContainer,
  Text,
} from "./index.styles";
import { FiCheck } from "react-icons/fi";

interface ChooseUsCardProps {
  title: string;
  description: string;
}

const ChooseUsCard: FC<ChooseUsCardProps> = ({ title, description }) => {
  const theme: any = useTheme();
  return (
    <Container>
      <IconContainer>
        <FiCheck size={24} color={theme?.primary ?? "#000"} />
      </IconContainer>
      <ContentContainer>
        <SubHeading>{title}</SubHeading>
        <Text>{description}</Text>
      </ContentContainer>
    </Container>
  );
};

export default ChooseUsCard;
