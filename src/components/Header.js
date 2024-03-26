import { React, useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,  
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import { MenuIcon } from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6
  },
  divider: {
    margin: '8px 0'
  }
}));

export default function ButtonAppBar() {  
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>            
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            {/* passHref - Quando não é utilizado com a âncora <a></a> */}
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            {/* Passando o e.curretTarget o menu será ancorado no IconButton, que é o alvo que queremos para abrir o menu */}
            <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src="" />
                  : <AccountCircle />
              }
              <Typography variant='subtitle2' color="secondary" className={classes.userName}>
                Gustavo Paulino
              </Typography>              
            </IconButton>

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider}/>
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
