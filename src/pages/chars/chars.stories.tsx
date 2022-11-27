import React from "react";
import { Meta, Story } from "@storyxbook/react";

import CharsPage, { Props } from "./chars.page";

export default {
  title: "coponent/Home",
  component: CharsPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CharsPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
