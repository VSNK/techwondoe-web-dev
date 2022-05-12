import React, { FC } from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import {
  Container,
  Icon,
  IconContainer,
  Link,
  ParagraphContainer,
} from "./index.styles";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { useTheme } from "styled-components";

interface InfoCardProps {
  iconType: "users" | "briefcase";
  title: string;
  description: string;
}

const InfoCard: FC<InfoCardProps> = ({ title, description, iconType }) => {
  const theme: any = useTheme();
  return (
    <Container>
      <IconContainer
        backgroundColor={iconType === "users" ? "#E6692E20" : "#11984B20"}
      >
        {iconType === "users" ? (
          <FiUsers size={35} color="#E6692E" />
        ) : (
          <FiBriefcase size={35} color="#11984B" />
        )}
      </IconContainer>
      <Heading>{title}</Heading>
      <ParagraphContainer>
        <Paragraph>{description}</Paragraph>
      </ParagraphContainer>
      <Link>Learn more</Link>
    </Container>
  );
};

export default InfoCard;
