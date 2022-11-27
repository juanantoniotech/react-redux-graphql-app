import { Meta, Story } from "@storybook/react";
import React from "react";

import LoginPage, { Props } from "./login.page";

export default {
  title: "coponent/login",
  component: LoginPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
