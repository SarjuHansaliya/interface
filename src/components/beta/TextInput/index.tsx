import * as React from 'react'
import { TextInputProps } from './types'
import { Box } from '../Box'
import { Text } from '../Text'
import { StyledInput, InputWrapper, AddonAfter, AddonBefore, ErrorText } from './styles'

const TextInput: React.FC<TextInputProps> = props => {
  const { label, addonLabel, addonAfter, addonBefore, error, showErrorMessage = true, id, ...rest } = props

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        {label && <Text>{label}</Text>}
        {addonLabel && addonLabel}
      </Box>
      <InputWrapper>
        {addonBefore && <AddonBefore>{addonBefore}</AddonBefore>}
        <StyledInput {...(rest as any)} />
        {addonAfter && <AddonAfter>{addonAfter}</AddonAfter>}
      </InputWrapper>
      {showErrorMessage && <ErrorText>{error}</ErrorText>}
    </Box>
  )
}

export default TextInput
