import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: '40px',
    marginTop: '30px'
  },
  text: {
    fontSize: '18px'
  }
});

const Item = (item) => {
   
  const product = item.item  
  const image = product.images[0].imageUrl
  const classes = useStyles();

  console.log(product)
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
    </Card>
  );
}

export default Item