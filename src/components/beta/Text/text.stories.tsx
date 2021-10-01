import React from 'react'
import { Text } from '.'
import { ComponentStory } from '@storybook/react'

export default {
  component: Text,
  title: 'Beta/Text'
}

const TemplateText: ComponentStory<typeof Text> = (args: any) => <Text {...args}>Sample Text</Text>

export const Default = TemplateText.bind({})
Default.args = {
  color: 'text1'
}
