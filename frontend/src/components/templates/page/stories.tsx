import React from 'react'
import { storiesOf } from '@storybook/react'

import { Page } from '..'

storiesOf('Templates', module).add('Page', () => (
  <Page>
    <header>Header</header>
    <main>Main Content</main>
    <footer>Footer</footer>
  </Page>
))
