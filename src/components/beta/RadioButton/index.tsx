import React from 'react'
import { RadioButtonProps } from './types'
import { Root, OuterCircle, InnerCircle, Label } from './styles'

const RadioButton: React.FC<RadioButtonProps> = props => {
  const { value, label, onChange, disabled, size, checked } = props
  return (
    <Root
      disabled={disabled}
      onClick={() => {
        onChange && onChange(value)
      }}
    >
      <OuterCircle size={size as number}>
        <InnerCircle selected={checked} size={size as number} />
      </OuterCircle>
      {Boolean(label) && <Label>{label}</Label>}
    </Root>
  )
}
RadioButton.defaultProps = {
  size: 15
}

export default RadioButton
