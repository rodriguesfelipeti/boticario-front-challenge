import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles'
import useStylesHeader from '../Header/styles'
import { drawerReducer } from '../../store/actions'
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CartList } from '../'


const DrawerComponent = () => {

    const classes = useStyles();
    const classesHead = useStylesHeader()
    const anchor = 'right'
    const drawerStore = useSelector(state => state.drawerReducer.state)
    const cart = useSelector(state => state.cartReducer.cart).length
    const totalCart = useSelector(state => state.cartReducer.totalCart)
    const dispatch = useDispatch()

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        dispatch(drawerReducer(!drawerStore))
    }

    return(
        <Drawer anchor={anchor} open={drawerStore[anchor]} onClose={toggleDrawer(anchor, true)}>
           <div className={clsx(classes.list)} role="presentation">
           <AppBar className={classesHead.menuBar} position="static">
              <Toolbar>
                <ArrowBackIcon  onClick={toggleDrawer(anchor, false)} className={classes.cartIcon}/>
                <ShoppingCartIcon className={classes.cartIcon}/> 
                <Typography className={classesHead.title}>
                  {cart > 0 &&  `Total: R$${totalCart.toFixed(2).replace('.', ',')}`}
                </Typography>     
              </Toolbar>
            </AppBar>
            <CartList />
            </div>
        </Drawer>
    )

}

export default DrawerComponent