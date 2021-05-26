import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { 
  AppBar, 
  Toolbar, 
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';

import useStyles from './Header.style';

export default function Header({ title }) {
  const classes = useStyles();
  const history = useHistory();

  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClick(route) {
    history.push(route);
    handleToggleMenu();
  }

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton onClick={() => handleToggleMenu()} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          
          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem button onClick={() => handleMenuClick('/customers')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Listagem de Clientes</ListItemText>
          </ListItem>


          <ListItem button onClick={() => handleMenuClick('/customers/add')}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de Cliente</ListItemText>
          </ListItem>

        </List>
      </Drawer>
    </>
  );
}