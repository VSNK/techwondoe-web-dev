import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../components/Button";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <ThemeProvider theme={lightTheme}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  backgroundColor: "primary",
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  backgroundColor: "secondary",
};
