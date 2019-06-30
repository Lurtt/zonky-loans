import React from 'react'
import { useTranslation } from 'react-i18next'

import { Grid, Title, colors } from '../../atoms'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Grid
      as="header"
      padding="1rem 0"
      justifyContent="start"
      alignItems="center"
    >
      <Title color={colors.cyan}>{t('AppTitle')}</Title>
    </Grid>
  )
}
