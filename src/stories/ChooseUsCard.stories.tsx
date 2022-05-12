import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import ChooseUsCard from "../components/ChooseUsCard";

export default {
  title: "WhyChooseUsSection/ChooseUsCard",
  component: ChooseUsCard,
  argTypes: {
    title: { type: { name: "string" } },
    description: { type: { name: "string" } },
  },
} as ComponentMeta<typeof ChooseUsCard>;

const Template: ComponentStory<typeof ChooseUsCard> = (args: any) => (
  <ThemeProvider theme={lightTheme}>
    <ChooseUsCard {...args} />
  </ThemeProvider>
);

export const Sample: ComponentStory<typeof ChooseUsCard> = Template.bind({});
Sample.args = {
  title: "Some Random Title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita consequuntur officia totam? Vero optio, consequuntur ipsum tempore aliquid minima at delectus sint omnis expedita quas eligendi, repellendus perspiciatis enim?",
};
