import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles'

import { useSelector, useDispatch } from 'react-redux';

const CartList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const cart = useSelector(state => state.cartReducer.cart)

  const image = cart[0].images[0].imageUrl
  console.log(cart)
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Card>
  );
}

export default CartList 