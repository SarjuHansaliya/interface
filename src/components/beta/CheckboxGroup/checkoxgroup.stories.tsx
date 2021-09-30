import React from 'react'
import CheckboxGroup from '.'
import { ComponentStory } from '@storybook/react'

export default {
  component: CheckboxGroup,
  title: 'Base/Beta/CheckboxGroup'
}

const TemplateCheckboxGroup: ComponentStory<typeof CheckboxGroup> = (args: any) => <CheckboxGroup {...args} />

export const Default = TemplateCheckboxGroup.bind({})
Default.args = {
  options: [
    { label: 'Cricket', value: 'cricket' },
    { label: 'Football', value: 'football' },
    { label: 'Chess', value: 'chess' }
  ],
  type: 'horizontal'
}
