import { colors } from './colors'

export interface Theme {
  colors: typeof colors
}

export const theme: Theme = {
  colors,
}
