import React from 'react';
import { Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <List>
          {cartItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
