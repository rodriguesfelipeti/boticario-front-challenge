import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
    const dispatch = useDispatch()

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        dispatch(drawerReducer(!drawerStore))
    }

    return(
        <Drawer anchor={anchor} open={drawerStore[anchor]} onClose={toggleDrawer(anchor, true)}>
           <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
           <AppBar className={classesHead.menuBar} position="static">
              <Toolbar>
                <ArrowBackIcon className={classes.cartIcon}/>
                <ShoppingCartIcon className={classes.cartIcon}/> 
                <Typography className={classesHead.title}>
                  Carrinho
                </Typography>     
              </Toolbar>
            </AppBar>
            <CartList />
            <Divider />
              {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List> */}
            </div>
        </Drawer>
    )

}

export default DrawerComponent