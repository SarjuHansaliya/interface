import React from 'react'
import Checkbox from '.'
import { ComponentStory } from '@storybook/react'

export default {
  component: Checkbox,
  title: 'Base/Beta/Checkbox'
}

const TemplateCheckbox: ComponentStory<typeof Checkbox> = (args: any) => <Checkbox {...args} />

export const Default = TemplateCheckbox.bind({})
Default.args = {
  label: 'Is Popular',
}
