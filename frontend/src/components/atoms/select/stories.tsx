import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Select, Grid } from '..'

const props = {
  values: ['A', 'B', 'C', 'D'],
  label: 'choose one...',
  onChange: action('clicked'),
}

storiesOf('Atoms', module).add('Select', () => (
  <Grid
    padding="1rem 2rem"
    templateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
    gap="2rem"
  >
    <Select {...props} />
    <Select {...props} disabled />
  </Grid>
))
