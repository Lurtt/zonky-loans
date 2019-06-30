import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, Grid } from '..'

const props = {
  as: Card,
  padding: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
}

storiesOf('Atoms/Card', module)
  .add('default', () => (
    <Grid
      padding="2rem"
      templateColumns="repeat(auto-fill, minmax(6rem, 1fr))"
      gap="2rem"
    >
      <Card background="#eeeeee" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  ))
  .add('as Grid', () => (
    <Grid
      templateColumns="repeat(auto-fit, minmax(6rem, 1fr))"
      gap="2rem"
      padding="2rem"
    >
      <Grid {...props}>A</Grid>
      <Grid {...props}>B</Grid>
      <Grid {...props}>C</Grid>
      <Grid {...props}>D</Grid>
      <Grid {...props}>E</Grid>
    </Grid>
  ))
