import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'

export interface LinkProps extends React.ComponentProps<'a'> {}

export const Link = styled.a<ThemedStyledProps<LinkProps, Theme>>`
  color: ${({ theme }) => theme.colors.cyan};
  background: ${(props: ThemedStyledProps<LinkProps, Theme>) =>
    props.theme.colors.cyan};
`
