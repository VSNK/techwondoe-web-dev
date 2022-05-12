import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import Paragraph from "../components/typography/Paragraph";

export default {
  title: "Typography/P",
  component: Paragraph,
  argTypes: {
    text: { type: "string" },
  },
} as ComponentMeta<typeof Paragraph>;

export const P: ComponentStory<typeof Paragraph> = ({ text }) => (
  <ThemeProvider theme={lightTheme}>
    <Paragraph>{text}</Paragraph>
  </ThemeProvider>
);
P.args = {
  text: "Paragraph - P",
};
