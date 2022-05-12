import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
`;

export const MainContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 376px) {
    padding: 5px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 376px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Link = styled.a`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.primary};
  margin-right: 5px;
`;
