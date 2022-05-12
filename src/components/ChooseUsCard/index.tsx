import { FC } from "react";
import styled, { useTheme } from "styled-components";
import SubHeading from "../typography/SubHeading";
import { Text } from "./index.styles";
import { ImCheckmark } from "react-icons/im";
import { FiCheck } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  @media screen and (min-width: 376px) {
    width: 33%;
  }
`;

const IconContainer = styled.div`
  padding: 15px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

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
