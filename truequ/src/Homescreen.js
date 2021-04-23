import React from 'react';
import Spinlogo from './Spinlogo';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  MuiSvgStartIcon: {
    fontSize: '50px',
  },
  button: {
    backgroundColor: '#1DB954',
    width: '200px',
    height: '100px',
    fontSize: '50px',
  },
  buttonmenu: {
    height: '250px',
    paddingTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttoncontent: {
    fontSize: '18px',
  },
  iconsvg: {
    fontSize: '50px',
  },
}));

function Homescreen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Spinlogo />
      <div className={classes.buttonmenu}>
        <Button
          component={Link}
          to={'/create'}
          className={classes.button}
          variant="contained"
        >
          <AddBoxIcon className={classes.iconsvg} />
          <div className={classes.buttoncontent}>Create Party</div>
        </Button>
        <Button
          component={Link}
          to={'/join'}
          className={classes.button}
          variant="contained"
        >
          <GroupIcon className={classes.iconsvg} />
          <div className={classes.buttoncontent}>Join Party</div>
        </Button>
      </div>
    </div>
  );
}

export default Homescreen;
