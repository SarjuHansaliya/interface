import React from 'react'
import { Box } from '.'
import { ComponentStory } from '@storybook/react'

export default {
  component: Box,
  title: 'Beta/Box'
}

const TemplateBox: ComponentStory<typeof Box> = (args: any) => (
  <Box {...args} width={200} height={200}>
    Sample Text
  </Box>
)

export const Default = TemplateBox.bind({})
Default.args = {
  color: 'text1',
  bgColor: 'primary1'
}
