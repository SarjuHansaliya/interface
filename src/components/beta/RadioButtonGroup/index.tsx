import React, { useState, useEffect } from 'react'
import { RadioButtonGroupProps } from './types'
import { Root } from './styles'
import RadioButton from '../RadioButton'
import { Box } from '../Box'

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = props => {
  const { value, onChange, options, type, ...rest } = props

  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Root type={type}>
      {(options || []).map((option, i) => (
        <Box key={i} ml={type === 'horizontal' ? '5px' : '0px'}>
          <RadioButton
            checked={selected === option.value}
            value={option.value}
            label={option.label}
            onChange={() => {
              onChange && onChange(option.value)
              setSelected(option.value)
            }}
            {...rest}
          />
        </Box>
      ))}
    </Root>
  )
}

export default RadioButtonGroup
