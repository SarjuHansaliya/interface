import React from 'react'
import { ButtonProps } from './types'
import { Root, IconAfter, IconBefore } from './styles'

export const Button: React.FC<ButtonProps> = props => {
  const { iconBefore, children, iconAfter, ...rest } = props
  return (
    <Root {...rest}>
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      {children}
      {iconAfter && <IconAfter>{iconAfter}</IconAfter>}
    </Root>
  )
}
