import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { cartReducer } from '../../store/actions'

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    marginLeft: '40px',
    marginTop: '30px' 
  },
  text: {
    fontSize: '14px'
  }
});

const Item = (item) => {
   
  const product = item.item  
  const image = product.images[0].imageUrl
  const classes = useStyles();
  const dispatch = useDispatch()


  const handleAddCart = () => {
    console.log('ola')
    dispatch(cartReducer(product))
    
  } 

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.text} gutterBottom component="h2">
            {product.name}
          </Typography>
          <Typography className={classes.text} gutterBottom component="h2">
            R$ {product.Value}
          </Typography>
        </CardContent>
      </CardActionArea> 
      <CardActions>
        <Button onClick={handleAddCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Item