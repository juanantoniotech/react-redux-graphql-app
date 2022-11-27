import React from "react";
import { Meta, Story } from "@storyxbook/react";

import HomePage, { Props } from "./home.page";

export default {
  title: "coponent/Home",
  component: HomePage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
