import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid, Title, colors } from '..'

storiesOf('Atoms', module).add('Title', () => (
  <Grid padding="1rem 2rem" gap="2rem">
    <Title>Default</Title>
    <Title size="2.5rem">Size</Title>
    <Title size="2rem" color={colors.cyan}>
      Color
    </Title>
    <Title size="1.5rem" align="center">
      Center
    </Title>
    <Title size="1rem" align="right">
      Left
    </Title>
  </Grid>
))
