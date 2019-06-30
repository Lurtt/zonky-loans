import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'

export interface ButtonProps extends React.ComponentProps<'button'> {
  onClick: any
  padding?: string
}

export const Button = styled.button<ThemedStyledProps<ButtonProps, Theme>>`
  padding: ${({ padding }) => padding};
  background-color: ${({ theme }) => theme.colors.transparent};
  font-size: calc(1rem + 1vmin);
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 150ms ease-in;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.cyan};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.gray};
  }
`
