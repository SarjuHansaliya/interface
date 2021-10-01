import React from 'react'
import { Button } from '.'
import { ComponentStory } from '@storybook/react'
import { CheckCircle } from 'react-feather'

export default {
  component: Button,
  title: 'Beta/Buttons'
}

const TemplateButton: ComponentStory<typeof Button> = (args: any) => <Button {...args}>Button</Button>

export const Primary = TemplateButton.bind({})
Primary.args = {
  variant: 'primary'
}

export const AfterIcon = TemplateButton.bind({})
AfterIcon.args = {
  variant: 'primary',
  iconAfter: <CheckCircle size={'12'} />
}

export const BeforeIcon = TemplateButton.bind({})
BeforeIcon.args = {
  variant: 'primary',
  iconBefore: <CheckCircle size={'14'} />
}

const TemplateIconButton: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args}>
    <CheckCircle size={'16'} />
  </Button>
)

export const IconButton = TemplateIconButton.bind({})
IconButton.args = {
  variant: 'primary',
  width: 'auto'
}
