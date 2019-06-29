import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'

export interface RootProps extends React.ComponentProps<'div'> {}

export const Root = styled.div<ThemedStyledProps<RootProps, Theme>>`
  text-align: center;
`
