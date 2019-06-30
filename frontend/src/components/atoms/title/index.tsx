import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'

export interface TitleProps extends React.ComponentProps<'h1'> {
  size?: string
  color?: string
  align?: string
  padding?: string
}

export const Title = styled.h1<ThemedStyledProps<TitleProps, Theme>>`
  margin: 0;
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size || 'calc(2.5rem + 1vmin)'};
  color: ${({ color, theme }) => color || theme.colors.black};
  text-align: ${({ align }) => align};
`
