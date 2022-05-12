import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import SubHeading from "../components/typography/SubHeading";

export default {
  title: "Typography/H2",
  component: SubHeading,
  argTypes: {
    text: { type: "string" },
  },
} as ComponentMeta<typeof SubHeading>;

export const H2: ComponentStory<typeof SubHeading> = ({ text }) => (
  <ThemeProvider theme={lightTheme}>
    <SubHeading>{text}</SubHeading>
  </ThemeProvider>
);
H2.args = {
  text: "Subheading - H2",
};
