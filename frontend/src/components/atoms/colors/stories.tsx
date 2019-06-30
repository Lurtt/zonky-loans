import React from 'react'
import { storiesOf } from '@storybook/react'
import { compose, map, zipObj, toPairs } from 'ramda'

import { Grid, Card, colors } from '..'

const colorsArray = compose(
  map(zipObj(['name', 'value'])),
  (input: any) => toPairs(input)
)(colors)

storiesOf('Atoms', module).add('Colors', () => (
  <Grid
    padding="2rem"
    templateColumns="repeat(auto-fill, minmax(8rem, 1fr))"
    gap="2rem"
  >
    {map(
      (color: any) => (
        <Grid
          key={color.name}
          textAlign="center"
          templateRows="6rem 1rem"
          gap="2rem 0"
        >
          <Card background={color.value}></Card>
          <p>{color.name}</p>
        </Grid>
      ),
      colorsArray
    )}
  </Grid>
))
