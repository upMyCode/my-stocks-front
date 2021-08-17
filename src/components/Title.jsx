import { Typography } from '@material-ui/core'
import React from 'react'
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default function Title() {
  return (
    <Typography component="h1" display="flex" alignItems="center">
      <ShowChartIcon /> My<Typography component="code">Stocks</Typography>
    </Typography>
  )
}
