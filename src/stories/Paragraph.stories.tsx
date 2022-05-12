import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import Paragraph from "../components/typography/Paragraph";

export default {
  title: "Typography/P",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const P: ComponentStory<typeof Paragraph> = () => (
  <ThemeProvider theme={lightTheme}>
    <Paragraph>Paragraph - P</Paragraph>
  </ThemeProvider>
);
