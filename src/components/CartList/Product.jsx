import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch } from 'react-redux';
import { removeItemCart, increaseItem, decreaseItem } from '../../store/actions'

const Product = ( item ) => {
    const classes = useStyles();
    const product = item.product
    const index = item.itemPosition
    const image = product.images[0].imageUrl
    const dispatch = useDispatch()


    const handleRemove = () => {
      dispatch(removeItemCart(index))
    }

    const increaseItemClick = () => {
      dispatch(increaseItem(index))
    }

    const decreaseItemClick = () => {
      dispatch(decreaseItem(index))
    }

    return(
      <div className="product">
        
        <Card className={classes.root}>
          <div className={classes.cardMedia}>
            <CardMedia className={classes.cover} image={image} title="Live from space album cover" />
            <Typography onClick={handleRemove} className={classes.removeItem}>
                Remover
            </Typography>
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography >
                {product.name}
              </Typography>
              <Typography color="textSecondary">
                R$ {product.Value}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton onClick={decreaseItemClick} aria-label="remove">
                <RemoveIcon />
              </IconButton>
              <Typography color="textSecondary">
                Qtd: {product.qtd}
              </Typography>
              <IconButton onClick={increaseItemClick} aria-label="add">
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </Card>
        <Divider />
      </div>
      
    )
}

export default Product