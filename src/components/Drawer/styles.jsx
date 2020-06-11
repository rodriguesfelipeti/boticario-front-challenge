import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    list: {
      width: 350,
    },
    fullList: {
      width: 'auto',
    },
    header: {
      height: '2rem',
      backgroundColor: '#ccffcc'
    },
    cartIcon: {
      marginTop: '10px',
      marginRight: '15px',
      color: '#000000',
      cursor: 'pointer'
    }
}))