import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'

export interface CardProps extends React.ComponentProps<'div'> {
  padding?: string
  cursor?: string
  background?: string
}

export const Card = styled.div<ThemedStyledProps<CardProps, Theme>>`
  min-height: 5.5rem;
  padding: ${({ padding }) => padding};
  color: ${({ theme }) => theme.colors.cyan};
  background-color: ${({ background, theme }) =>
    background || theme.colors.white};
  border-radius: 2px;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: ${({ cursor }) => cursor};
  transition: box-shadow 200ms ease-in;

  :hover {
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.2);
  }
`
