import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, FormControl, InputLabel, Input } from '@material-ui/core';

export default function MutateStockModal({ 
  isOpen = false, 
  setIsOpen,
  addStock,
  setNewStockTicker,
  setNewStockCost,
}) {
  
  const handleResetForm = () => {
    setNewStockTicker("")
    setNewStockCost("")
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdd = (e) => {
    addStock(e)
    handleClose()
  }

  const handleChangeTicker = (e) => {
    setNewStockTicker(e.target.value)
  }
  
  const handleChangCost = (e) => {
    setNewStockCost(e.target.value)
  }


  return (
    <Box>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add Stock</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form>
              <FormControl>
                <InputLabel htmlFor="my-input">Ticker</InputLabel>
                <Input 
                  id="my-input" 
                  aria-describedby="my-helper-text" 
                  onChange={handleChangeTicker}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Cost</InputLabel>
                <Input 
                  id="my-input" 
                  aria-describedby="my-helper-text" 
                  onChange={handleChangCost}
                />
              </FormControl>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleResetForm} color="primary">
            Reset Form
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleAdd} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
