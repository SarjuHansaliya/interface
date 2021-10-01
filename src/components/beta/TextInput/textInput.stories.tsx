import React from 'react'
import TextInput from '.'
import { ComponentStory } from '@storybook/react'
import { ArrowDown } from 'react-feather'
import { Button } from '../Button'
import { Text } from '../Text'

export default {
  component: TextInput,
  title: 'Beta/TextInput'
}

const TemplateTextInput: ComponentStory<typeof TextInput> = (args: any) => <TextInput {...args} />

export const Default = TemplateTextInput.bind({})
Default.args = {
  label: 'To'
}

export const ExtraLabel = TemplateTextInput.bind({})
ExtraLabel.args = {
  label: 'To',
  addonLabel: <Text>Current rate: 4.5%</Text>
}

export const AddonAfter = TemplateTextInput.bind({})
AddonAfter.args = {
  label: 'To',
  addonAfter: (
    <Button variant="primary" iconBefore={<ArrowDown size={'14'} />} padding="2px" borderRadius="5px">
      Select Coin
    </Button>
  )
}

// export const NumberInput = TemplateTextInput.bind({})
// NumberInput.args = {
//   label: 'To',
//   isNumber: true
// }
