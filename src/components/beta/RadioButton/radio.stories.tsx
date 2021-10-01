import React from 'react'
import RadioButton from '.'
import { ComponentStory } from '@storybook/react'

export default {
  component: RadioButton,
  title: 'Beta/RadioButton'
}

const TemplateRadio: ComponentStory<typeof RadioButton> = (args: any) => <RadioButton {...args} />

export const Default = TemplateRadio.bind({})
Default.args = {
  label: 'Male',
}
