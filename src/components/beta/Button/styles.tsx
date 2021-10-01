import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

const Primary = (props: ButtonProps) =>
  props.variant === 'primary' &&
  css`
    background-color: ${({ theme }) => theme.primary1};
    color: white;
  `

const Secondary = (props: ButtonProps) =>
  props.variant === 'secondary' &&
  css`
    background-color: ${({ theme }) => theme.primary6};
    color: ${({ theme }) => theme.primary1};
  `

const Outline = (props: ButtonProps) =>
  props.variant === 'outline' &&
  css`
    border: 1px solid ${({ theme }) => theme.bg2};
    background-color: transparent;
    color: ${({ theme }) => theme.text1};
  `

const Plain = (props: ButtonProps) =>
  props.variant === 'plain' &&
  css`
    background-color: transparent;
    color: ${({ theme }) => theme.primary1};
    display: flex;
    justify-content: center;
    align-items: center;
  `

export const Root = styled.button<ButtonProps>`
  padding: ${props => (props?.padding ? props?.padding : '18px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  text-align: center;
  border-radius: 12px;
  border-radius: ${props => props?.borderRadius && props?.borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  ${Primary}
  ${Secondary}
  ${Outline}
  ${Plain}

  > * {
    user-select: none;
  }
`

export const IconAfter = styled.div`
  color: white;
  margin-left: 10px;
  display: flex;
  align-items: center;
`

export const IconBefore = styled.div`
  color: white;
  margin-right: 10px;
  display: flex;
  align-items: center;
`
