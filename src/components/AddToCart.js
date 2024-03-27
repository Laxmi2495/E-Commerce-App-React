import React, { useState } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';

const AddToCart = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = event => {
    const { value } = event.target;
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart(quantity);
  };

  return (
    <div>
    fskjdf
      <Typography variant="h6" gutterBottom>
        Add to Cart
      </Typography>
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: 1,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
