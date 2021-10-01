import styled from 'styled-components'
import { TextInputProps } from './types'
import { Box } from '../Box'
import { Text } from '../Text'

export const InputWrapper = styled(Box)`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid transparent;
  display: flex;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg3};
  color: ${({ theme }) => theme.text1};
`
export const StyledInput = styled.input<TextInputProps>`
  flex: 1;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.bg3};
  color: ${({ theme }) => theme.text1};
  outline: none;
`
export const AddonAfter = styled(Box)`
  position: relative;
`
export const AddonBefore = styled(Box)`
  position: relative;
`
export const ErrorText = styled(Text)`
  margin-top: 5px;
  color: ${({ theme }) => theme.red2};
  font-size: 12px;
`
