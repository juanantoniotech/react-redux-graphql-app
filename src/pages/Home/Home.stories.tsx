import { Meta, Story } from "@storybook/react";

import Home, { Props } from "./Home";

export default {
  title: "coponent/Home",
  component: Home,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
