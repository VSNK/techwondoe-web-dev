import useSingleEntryData from "../../../hooks/useSingleEntryData";
import {
  Container,
  WhiteButton,
  WhiteHeading,
  WhiteParagraph,
} from "./index.styles";

const GetInTouchSection = () => {
  const resp: any = useSingleEntryData("5r1bz7KmLVgpVFrirWbzMn");
  const { buttonText, title, description } = resp;
  return (
    <Container>
      <WhiteHeading>{title}</WhiteHeading>
      <WhiteParagraph>{description}</WhiteParagraph>
      <WhiteButton>{buttonText}</WhiteButton>
    </Container>
  );
};

export default GetInTouchSection;
