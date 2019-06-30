import React from 'react'
import { useTranslation } from 'react-i18next'

import { Image, Grid, Title } from '../../atoms'
import logo from '../../../assets/logo.svg'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Grid
      as="footer"
      padding="1rem 0"
      templateColumns="auto 5rem"
      justifyContent="end"
      alignItems="center"
    >
      <Title size="1rem">{t('Engine')}</Title>
      <Image src={logo} alt="logo" height="4rem" />
    </Grid>
  )
}
