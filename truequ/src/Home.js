import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconsvg: {
    fontSize: '30px',
  },
  button: {
    marginRight: '100%',
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      component={Link}
      to={'/'}
      variant="contained"
    >
      <HomeIcon className={classes.iconsvg} />
    </Button>
  );
}

export default Home;
