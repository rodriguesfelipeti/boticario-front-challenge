import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    menuBar: {  
      backgroundColor: '#ccffcc',
      height: '5rem'
    },
    menuButton: {
      color: '#000000',
      display: 'none'
    },
    title: {
      flexGrow: 1,
      color: '#000000',
      marginTop: '10px',
      '&:first-child': {
          color: 'gray',
          fontSize: '1.5rem',
          marginTop: 0,
      },
      '&:hover': {
          color: 'gray',
          cursor: 'pointer'
      }
    },
    container: {
      width: '70%',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '12rem',
    },
    iconCart: {
      cursor: 'pointer',
      marginLeft: '10%',
      color:  '#000000',  
      marginTop: '5px',
      width: '150px',
      height: '30px',
      border: 'solid 1px #000000',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center'
    },
    iconSpan: {
      marginLeft: 10,
      marginTop: 3
    },
    list: {
      width: 250,
      },
      fullList: {
        width: 'auto',
      },
    '@media (max-width: 900px)': {
        container: {
            marginLeft: 0,
            width: '100%'
        },
        
    },

    '@media (max-width: 720px)': {
        container: {
            marginLeft: 0,
            width: '130%'
        },
        iconCart: {
            display: 'none' 
        },
        title: {
            display: 'none',
            "&:first-child": {
                color: 'gray',
                fontSize: '1.5rem',
                marginTop: 0,
                display: 'flex',
                justifyContent: 'left'
            },
        },
        menuButton: {
            display: 'flex',
            justifyContent: 'right'
        }
        
    },
    
  }));
  