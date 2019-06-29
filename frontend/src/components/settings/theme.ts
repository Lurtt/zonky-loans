import { colors } from '../atoms'

export interface Theme {
  colors: typeof colors
}

export const theme: Theme = {
  colors,
}
