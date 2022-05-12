import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import SubHeading from "../components/typography/SubHeading";

export default {
  title: "Typography/H2",
  component: SubHeading,
} as ComponentMeta<typeof SubHeading>;

export const H2: ComponentStory<typeof SubHeading> = () => (
  <ThemeProvider theme={lightTheme}>
    <SubHeading>SubHeading - H2</SubHeading>
  </ThemeProvider>
);
