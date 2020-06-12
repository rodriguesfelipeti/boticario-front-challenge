import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'right'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 100,
      height: 100,
      marginTop: 20,
      marginLeft: 20
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    removeItem: {
      marginLeft: 42,
      marginTop: 10,
      color: 'red',
      fontSize: 13,
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }));
  