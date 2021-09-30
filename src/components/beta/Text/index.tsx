import styled from 'styled-components'
import { space, typography, TypographyProps, SpaceProps, position, PositionProps } from 'styled-system'
import { Colors } from '../../../theme/styled'

export interface TextProps {
  color?: keyof Colors
  cursor?: string
}

export const Text = styled.p<TextProps & TypographyProps & SpaceProps & PositionProps>`
  ${space}
  ${typography}
  ${position}
  color: ${({ color, theme }) => color && theme[color]};
  cursor: ${props => (props.cursor ? props.cursor : 'context-menu')};
`
