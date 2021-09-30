import React, { useEffect, useState } from 'react'
import { CheckboxProps } from './types'
import { Root, OuterSquare, InnerSquare, Label } from './styles'

const Checkbox: React.FC<CheckboxProps> = props => {
  const { value, label, onChange, disabled, size, checked } = props

  const [internalChekced, setInternalChecked] = useState(checked)

  useEffect(() => {
    setInternalChecked(checked)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  return (
    <Root
      disabled={disabled}
      onClick={() => {
        onChange && onChange(!internalChekced, value)
        setInternalChecked(prev => !prev)
      }}
    >
      <OuterSquare size={size as number}>
        <InnerSquare selected={internalChekced} size={size as number} />
      </OuterSquare>
      {Boolean(label) && <Label>{label}</Label>}
    </Root>
  )
}
Checkbox.defaultProps = {
  size: 15
}

export default Checkbox
