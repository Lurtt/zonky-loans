import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'

export interface HeaderProps extends React.ComponentProps<'header'> {}

export const Header = styled.header<ThemedStyledProps<HeaderProps, Theme>>`
  background-color: ${({ theme }) => theme.colors.testColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
