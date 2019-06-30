import styled, { ThemedStyledProps } from 'styled-components'

import { Theme } from '../../settings'
import { rotate } from '..'

export interface ImageProps extends React.ComponentProps<'img'> {
  height?: string
}

export const Image = styled.img<ThemedStyledProps<ImageProps, Theme>>`
  animation: ${rotate} infinite 20s linear;
  height: ${({ height }) => height || '40vmin'};
  pointer-events: none;
`
