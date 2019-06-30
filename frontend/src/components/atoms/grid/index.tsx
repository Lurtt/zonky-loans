import styled, { ThemedStyledProps } from 'styled-components'
import posed from 'react-pose'

import { Theme } from '../../settings'

export interface GridProps extends React.ComponentProps<'div'> {
  templateAreas?: string
  templateColumns?: string
  templateRows?: string
  gap?: string
  justifyItems?: string
  alignItems?: string
  justifyContent?: string
  alignContent?: string
  autoColumns?: string
  autoRows?: string
  autoFlow?: string
  height?: string
  padding?: string
  background?: string
  textAlign?: string
  lineHeight?: string
}

export const Grid = styled.div<ThemedStyledProps<GridProps, Theme>>`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows};
  grid-template-areas: ${({ templateAreas }) => templateAreas};
  grid-gap: ${({ gap }) => gap};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  grid-auto-columns: ${({ autoColumns }) => autoColumns};
  grid-auto-rows: ${({ autoRows }) => autoRows};
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  background-color: ${({ background }) => background};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};
`

Grid.defaultProps = {
  templateAreas: 'initial',
  templateColumns: 'initial',
  templateRows: 'initial',
  gap: 'initial',
  justifyItems: 'stretch',
  alignItems: 'stretch',
  justifyContent: 'initial',
  alignContent: 'initial',
  autoColumns: 'initial',
  autoRows: 'initial',
  autoFlow: 'row',
  padding: 'initial',
  textAlign: 'initial',
  lineHeight: 'initial',
}

export const PosedGrid = posed(Grid)({
  init: {
    y: '-4rem',
  },
  enter: {
    opacity: 1,
    y: 0,
    staggerChildren: 150,
  },
  exit: { opacity: 0 },
})
