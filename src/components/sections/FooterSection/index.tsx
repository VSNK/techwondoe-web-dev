import React from "react";
import {
  Container,
  CopyRightsContainer,
  CopyRightsText,
  Link,
  LinkContainer,
  LinkContainerFour,
  LinkContainerOne,
  LinkContainerThree,
  LinkContainerTwo,
  MainContainer,
  SocialMediaIcon,
  SocialMediaLink,
  SocialMediaLinksContainer,
  UnderlinedLink,
} from "./index.styles";
import { FaInstagramSquare, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useTheme } from "styled-components";

const FooterSection = () => {
  const theme: any = useTheme();
  return (
    <>
      <Container>
        <MainContainer>
          <SocialMediaLinksContainer>
            <SocialMediaLink>
              <FaFacebookF color={theme?.primary ?? "#000"} size={24} />
            </SocialMediaLink>
            <SocialMediaLink>
              <FaLinkedinIn color={theme?.primary ?? "#000"} size={24} />
            </SocialMediaLink>
            <SocialMediaLink>
              <FaInstagramSquare color={theme?.primary ?? "#000"} size={24} />
            </SocialMediaLink>
          </SocialMediaLinksContainer>
          <LinkContainerOne>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Candidates</Link>
          </LinkContainerOne>
          <LinkContainerTwo>
            <Link>Employers</Link>
            <Link>Latest News</Link>
            <Link>Contact</Link>
          </LinkContainerTwo>
          <LinkContainerThree>
            <UnderlinedLink>+ 62 (0) 9 124 5470</UnderlinedLink>
            <UnderlinedLink>careers@namespace.com</UnderlinedLink>
          </LinkContainerThree>
          <LinkContainerFour>
            <Link>
              Level 3<br />
              79 High Street
              <br />
              Melbourne CBD
              <br />
              1010
            </Link>
          </LinkContainerFour>
        </MainContainer>
      </Container>

      <CopyRightsContainer>
        <CopyRightsText>Copyright © 2021 - Beyond Ltd. </CopyRightsText>
      </CopyRightsContainer>
    </>
  );
};

export default FooterSection;
