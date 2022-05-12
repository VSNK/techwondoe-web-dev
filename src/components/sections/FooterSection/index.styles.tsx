import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    flex-wrap: no-wrap;
  }
`;

export const SocialMediaLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  order: 5;
  @media screen and (min-width: 1000px) {
    width: auto;
    max-width: 400px;
    margin-right: 50px;
    order: 0;
  }
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  margin-right: 25px;
`;

export const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LinkContainer = styled.div`
  width: 50%;
  @media screen and (min-width: 1000px) {
    width: auto;
    margin-right: 50px;
  }
`;

export const LinkContainerOne = styled(LinkContainer)`
  order: 1;
  @media screen and (min-width: 1000px) {
    order: 0;
  }
`;

export const LinkContainerTwo = styled(LinkContainer)`
  order: 2;
  @media screen and (min-width: 1000px) {
    order: 0;
  }
`;

export const LinkContainerThree = styled(LinkContainer)`
  order: 4;
  @media screen and (min-width: 1000px) {
    order: 0;
  }
`;

export const LinkContainerFour = styled(LinkContainer)`
  order: 3;
  @media screen and (min-width: 1000px) {
    order: 0;
  }
`;

export const Link = styled.a`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin: 10px;
`;

export const UnderlinedLink = styled(Link)`
  text-decoration: underline;
  word-break: break-all;
`;

export const CopyRightsContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 1px;
`;

export const CopyRightsText = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: #000000;
  text-align: center;
`;
