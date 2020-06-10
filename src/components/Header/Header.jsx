import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuBar} position="static">
        <Toolbar>
          <div className={classes.container}>
            <Typography className={classes.title}>
                Minha Loja |
            </Typography>     
            <Typography className={classes.title}>
                Perfumaria
            </Typography>     
            <Typography className={classes.title}>
                Maquiagem
            </Typography>     
            <Typography className={classes.title}>
                Cabelos
            </Typography>     
            <Typography className={classes.title}>
                Infantil
            </Typography>     
            <div className={classes.iconCart}>
                <ShoppingCartIcon /> R$0,00
            </div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header