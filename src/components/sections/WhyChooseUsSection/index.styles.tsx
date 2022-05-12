import styled from "styled-components";
import Heading from "../../typography/Heading";
import Paragraph from "../../typography/Paragraph";

export const Container = styled.div`
  padding: 20px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  @media screen and (min-width: 376px) {
    flex-direction: row;
  }
`;

export const CenteredText = styled(Paragraph)`
  text-align: center;
`;

export const CenteredHeading = styled(Heading)`
  text-align: center;
`;
