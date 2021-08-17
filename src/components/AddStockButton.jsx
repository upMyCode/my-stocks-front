import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MutateStockModal from './MutateStockModal';

export default function AddStockButton({
  refetch,
  addNewStock,
}) {
  const [isOpen, setIsOpen] = useState(false); 
  const [newStockTicker, setNewStockTicker] = useState(""); 
  const [newStockCost, setNewStockCost] = useState(""); 

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const addStock = (e) => {
    e.preventDefault()
    addNewStock({
      variables: {
        input: {
          ticker: newStockTicker,
          cost: newStockCost,
        }
      }
    }).then(refetch)
  }

  return <>
    <IconButton onClick={handleOpenModal}>
      <AddCircleIcon />
    </IconButton> 
    <MutateStockModal 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addStock={addStock}
        setNewStockTicker={setNewStockTicker}
        setNewStockCost={setNewStockCost}
      />
  </>
}
