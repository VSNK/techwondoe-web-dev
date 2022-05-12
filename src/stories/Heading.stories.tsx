import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import Heading from "../components/typography/Heading";

export default {
  title: "Typography/H1",
  component: Heading,
  argTypes: {
    text: { type: "string" },
  },
} as ComponentMeta<typeof Heading>;

export const H1: ComponentStory<typeof Heading> = ({ text }) => (
  <ThemeProvider theme={lightTheme}>
    <Heading>{text}</Heading>
  </ThemeProvider>
);
H1.args = {
  text: "Heading - H1",
};
