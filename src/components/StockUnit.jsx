import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

export default function StockUnit({ stock }) {
  const {
    id,
    ticker,
    cost,
    extra,
  } = stock;

  const firstStockTickerLetter= ticker.slice(0, 1);
  const secondaryStockInformation = `$${cost} | PE: ${extra?.peRatio ?? "N/A"}`;

  return (
    <ListItem key={id}>
      <ListItemAvatar>
      <Avatar>
        {firstStockTickerLetter}
      </Avatar>
      </ListItemAvatar>
      <ListItemText 
        primary={ticker} 
        secondary={secondaryStockInformation} 
      />
    </ListItem>
  )
}
