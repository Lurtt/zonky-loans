import React from 'react'

import { Image, Grid, Title } from '../../atoms'
import logo from '../../../assets/logo.svg'

export const Footer: React.FC = () => (
  <Grid
    as="footer"
    padding="1rem 0"
    templateColumns="auto 5rem"
    justifyContent="end"
    alignItems="center"
  >
    <Title size="1rem">Powered by</Title>
    <Image src={logo} alt="logo" height="4rem" />
  </Grid>
)
