import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    '@media (max-width: 720px)': {
      container: {
        margin: '-24px' 
      }
    }
  }));
  