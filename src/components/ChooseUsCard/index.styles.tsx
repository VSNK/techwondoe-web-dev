import styled from "styled-components";
import Paragraph from "../typography/Paragraph";

export const Text = styled(Paragraph)`
  font-size: 16px;
  line-height: 24px;
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  @media screen and (min-width: 450px) {
    width: 50%;
  }
  @media screen and (min-width: 660px) {
    width: 33%;
  }
`;

export const IconContainer = styled.div`
  padding: 15px;
`;

export const ContentContainer = styled.div`
  flex: 1;
`;
