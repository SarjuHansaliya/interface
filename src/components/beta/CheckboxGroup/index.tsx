import React, { useState, useEffect } from 'react'
import { CheckboxGroupProps } from './types'
import { Root } from './styles'
import Checkbox from '../Checkbox'
import { Box } from '../Box'

const CheckboxGroup: React.FC<CheckboxGroupProps> = props => {
  const { value, onChange, options, type, ...rest } = props

  const [selected, setSelected] = useState([] as Array<any>)

  const handleOnChange = (isChecked: boolean, checkValue: any) => {
    const index = selected?.indexOf(checkValue as any)
    const newValues = [...selected]

    if (isChecked) {
      ;(newValues || [])?.push(checkValue)
    } else {
      ;(newValues || []).splice(index, 1)
    }
    setSelected(newValues)
  }

  useEffect(() => {
    if (value) {
      setSelected(value as Array<any>)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Root type={type}>
      {(options || []).map((option, i) => (
        <Box key={i} ml={type === 'horizontal' ? '5px' : '0px'}>
          <Checkbox
            value={option.value}
            label={option.label}
            onChange={(chekced: boolean, value: any) => {
              handleOnChange(chekced, value)
            }}
            checked={selected?.indexOf(option.value) > -1 ? true : false}
            {...rest}
          />
        </Box>
      ))}
    </Root>
  )
}

export default CheckboxGroup
