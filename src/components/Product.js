// Product.js

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  image: {
    height: 200, // Set the height of the image
    width: '100%', // Set the width of the image to fill the container
    objectFit: 'cover', // Maintain aspect ratio and crop excess
  },
  addButton: {
    marginTop: theme.spacing(2), // Adjust margin as needed
  },
}));

const Product = ({ product }) => {
  const { id, name, image, price, category, inStock } = product;
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        component="img"
        alt={name}
        image={image}
        title={name}
        className={classes.image} // Apply image styling
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={!inStock}
          className={classes.addButton} // Apply margin to the button
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
