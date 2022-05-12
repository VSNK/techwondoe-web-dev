import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import Heading from "../components/typography/Heading";

export default {
  title: "Typography/H1",
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const H1: ComponentStory<typeof Heading> = () => (
  <ThemeProvider theme={lightTheme}>
    <Heading>Heading - H1</Heading>
  </ThemeProvider>
);
