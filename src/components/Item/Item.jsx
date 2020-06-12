import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
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
   
  const cart = useSelector(state => state.cartReducer.cart)
  const product = item.item  
  const image = product.images[0].imageUrl
  const classes = useStyles();
  const dispatch = useDispatch()


  const handleAddCart = () => {
    let indexElmnt = false
    product.qtd = 1
    cart.map( (item, index) => {
        if(item.name === product.name) {
            indexElmnt = index
        }   
        return true
    })
    dispatch(cartReducer(product, indexElmnt))
    
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