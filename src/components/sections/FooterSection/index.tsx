import {
  Container,
  CopyRightsContainer,
  CopyRightsText,
  Link,
  LinkContainerFour,
  LinkContainerOne,
  LinkContainerThree,
  LinkContainerTwo,
  MainContainer,
  SocialMediaLink,
  SocialMediaLinksContainer,
  UnderlinedLink,
} from "./index.styles";
import { FaInstagramSquare, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useTheme } from "styled-components";
import useSingleEntryData from "../../../hooks/useSingleEntryData";
import useGetData from "../../../hooks/useGetData";

const FooterSection = () => {
  const theme: any = useTheme();
  const { copyrightsText }: any = useSingleEntryData("3EfIv6HZKyC8D3g2z7odkn");
  const sectionOneLinks = useGetData("contactSectionOneLinks", "order");
  const sectionTwoLinks = useGetData("contactSectionTwoLinks", "order");
  const sectionThreeLinks = useGetData("contactSectionThreeLinks", "order");
  const sectionFourLinks = useGetData("contactSectionFourLinks", "order");

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
            {sectionOneLinks.map(({ title, order }) => (
              <Link key={order}>{title}</Link>
            ))}
          </LinkContainerOne>
          <LinkContainerTwo>
            {sectionTwoLinks.map(({ title, order }) => (
              <Link key={order}>{title}</Link>
            ))}
          </LinkContainerTwo>
          <LinkContainerThree>
            {sectionThreeLinks.map(({ title, order }) => (
              <UnderlinedLink key={order}>{title}</UnderlinedLink>
            ))}
          </LinkContainerThree>
          <LinkContainerFour>
            {sectionFourLinks.map(({ address, order }) => (
              <Link key={order}>{address}</Link>
            ))}
          </LinkContainerFour>
        </MainContainer>
      </Container>

      <CopyRightsContainer>
        <CopyRightsText>{copyrightsText}</CopyRightsText>
      </CopyRightsContainer>
    </>
  );
};

export default FooterSection;
