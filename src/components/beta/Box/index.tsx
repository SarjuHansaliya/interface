import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  position,
  PositionProps
} from 'styled-system'
import { Colors } from '../../../theme/styled'

export interface Props {
  color?: keyof Colors
  bgColor?: keyof Colors
}

export type BoxProps = SpaceProps & LayoutProps & FlexboxProps & TypographyProps & BorderProps & PositionProps

export const Box = styled.div<BoxProps & Props>`
color: ${({ color, theme }) => (color ? theme[color] : 'black')};
background-color:  ${({ bgColor, theme }) => (bgColor ? theme[bgColor] : 'transparent')};
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${border}
  ${position}
`
