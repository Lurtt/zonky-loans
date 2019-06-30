import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Grid, Button } from '..'

const props = {
  onClick: action('button-click'),
}

storiesOf('Atoms', module).add('Button', () => (
  <Grid
    padding="1rem 2rem"
    templateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
    gap="2rem"
  >
    <Button {...props}>Button</Button>
    <Button {...props} disabled>
      Disabled
    </Button>
  </Grid>
))
