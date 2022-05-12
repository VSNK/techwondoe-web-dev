import styled from "styled-components";

export const Container = styled.div`
  max-width: 425px;
  height: 400px;
  padding: 40px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const IconContainer = styled.div<{ backgroundColor: string }>`
  width: 76px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 100%;
  margin-bottom: 16px;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

export const ParagraphContainer = styled.div`
  flex: 1;
`;

export const Link = styled.a`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.primary};
`;
