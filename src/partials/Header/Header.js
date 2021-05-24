import { 
  AppBar, 
  Toolbar, 
  Typography,
  Button,
  IconButton
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Header.style';

export default function Header({ title }) {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}