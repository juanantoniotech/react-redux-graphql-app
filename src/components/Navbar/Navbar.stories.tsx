
import { Meta, Story } from "@storybook/react"
import React from "react"

import Navbar, { Props } from "./Navbar"

export default {
  title: "coponent/Navbar",
  component: Navbar,
  argTypes: {
    
  }
} as Meta

const Template: Story<Props> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
}

