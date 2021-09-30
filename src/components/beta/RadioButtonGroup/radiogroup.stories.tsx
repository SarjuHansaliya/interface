import React from 'react'
import RadioButtonGroup from '.'
import { ComponentStory } from '@storybook/react'

export default {
  component: RadioButtonGroup,
  title: 'Base/Beta/RadioButtonGroup'
}

const TemplateRadioGroup: ComponentStory<typeof RadioButtonGroup> = (args: any) => <RadioButtonGroup {...args} />

export const Default = TemplateRadioGroup.bind({})
Default.args = {
  options: [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ],
  type: 'horizontal'
}

export const Checked = TemplateRadioGroup.bind({})
Checked.args = {
  options: [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ],
  type: 'horizontal',
  value: 'female'
}
