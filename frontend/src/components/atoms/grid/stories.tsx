import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid } from '..'

storiesOf('Atoms', module).add('Grid', () => (
  <Grid
    templateColumns="repeat(auto-fit, minmax(6rem, 1fr))"
    gap="1rem"
    padding="2rem"
    justifyItems="center"
  >
    <div>1.1</div>
    <div>1.2</div>
    <div>1.3</div>
    <Grid templateColumns="repeat(auto-fit, minmax(1rem, 1fr))" gap="1rem">
      <div>2.1</div>
      <div>2.2</div>
      <div>2.3</div>
    </Grid>
    <div>1.4</div>
    <div>1.5</div>
    <div>1.6</div>
  </Grid>
))
