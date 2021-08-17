import React from 'react'
import StockUnit from './StockUnit';
import { Box, Typography } from '@material-ui/core';

export default function StockSection({
  loading,
  error,
  stocks = [],
}) {
  if (loading) return <Typography>Please, keep waiting ...</Typography>;
  if (error) return <Typography>UNEXPECTED ERROR</Typography>;
  if (!stocks) return <Typography>Stocks not found. Add a new one!</Typography>;

  return (
    <Box component="section">
      {stocks.map(stock => (
        <StockUnit stock={stock} />
      ))}
    </Box>
  )
}
