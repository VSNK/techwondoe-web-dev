import React, { FC, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import FooterSection from "./components/sections/FooterSection";
import GetInTouchSection from "./components/sections/GetInTouchSection";
import HomeSection from "./components/sections/HomeSection";
import InfoSection from "./components/sections/InfoSection";
import LatestNewsSection from "./components/sections/LatestNewsSection";
import OurTeamSection from "./components/sections/OurTeamSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import Heading from "./components/typography/Heading";
import { ContentfulClientProvider } from "./contexts/ContentfulProvider";
import { lightTheme, ThemeType } from "./themes";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:ital,wght@1,100&display=swap');
`;

const App: FC<any> = () => {
  const [theme, useTheme] = useState<ThemeType>(lightTheme);
  return (
    <ContentfulClientProvider>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles theme={theme} /> */}
        <HomeSection />
        <WhyChooseUsSection />
        <OurTeamSection />
        <LatestNewsSection />
        <InfoSection />
        <GetInTouchSection />
        <FooterSection />
      </ThemeProvider>
    </ContentfulClientProvider>
  );
};

export default App;
