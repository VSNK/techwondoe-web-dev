import styled from "styled-components";

export const Container = styled.div`
  min-height: 700px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 376px) {
    flex-direction: row;
  }
`;
