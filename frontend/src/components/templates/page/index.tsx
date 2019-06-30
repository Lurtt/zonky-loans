import React from 'react'

import { Grid } from '../../atoms'

export const Page: React.FC = ({ children }) => (
  <Grid
    height="100vh"
    templateRows="auto 1fr auto"
    gap="1.5rem 0"
    padding="0 16vw"
  >
    {children}
  </Grid>
)
