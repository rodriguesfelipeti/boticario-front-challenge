import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import DrawerComponent from '../Drawer/Drawer';
import { drawerReducer } from '../../store/actions'


const Header = () => {

  // const [cart, setCart] = useState([])
  const classes = useStyles();
  // const cart = useSelector(state => state.cartReducer.cart)
  const totalCart = useSelector(state => state.cartReducer.totalCart)
  const drawerState = useSelector(state => state.drawerReducer.state.right)
  const dispatch = useDispatch()

  const toggleDrawer = () => {
    dispatch(drawerReducer(!drawerState))
  } 

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
            <div onClick={toggleDrawer} className={classes.iconCart}>
                <ShoppingCartIcon /> { totalCart !== 0 ? `R$ ${totalCart.toFixed(2)}` :  ''}
            </div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <DrawerComponent />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header