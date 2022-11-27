
import { Meta, Story } from "@storybook/react"
import React from "react"

import char-card, { Props } from "./char-card"

export default {
  title: "coponent/char-card",
  component: char-card,
  argTypes: {
    
  }
} as Meta

const Template: Story<Props> = (args) => <char-card {...args} />

export const Default = Template.bind({})
Default.args = {
}

