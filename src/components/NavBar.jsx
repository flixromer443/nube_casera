import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.svg';
import '../css/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { displayLoginForm, displayRegisterForm, sessionDestroy } from '../redux/actions/Actions';
import { useNavigate } from 'react-router';

const NavBar = () => {
    const data=useSelector(state=>state.NameOfPage)
    const titulo=data.nombre
    const data2=useSelector(state=>state.SesionReducer)
    const session=data2.session
    const data3=useSelector(state=>state.AcountFormsReducer)
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseSession = () => {
    setAnchorElUser(null);
    dispatch(sessionDestroy(''))
    navigate("/")
  };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
         <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={logo}  className="App-logo" />
              </IconButton>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={logo}  className="App-logo" />
              </IconButton>
            
              <Button

                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                {!session?<div style={{fontStyle:"oblique"}}><strong>re</strong>drive</div>:titulo}
                
              </Button>
        
          </Box>
          
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {!session?<div style={{fontStyle:"oblique"}}><strong>re</strong>drive</div>:titulo}
              </Button>
        
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {session===true?
              <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={data2.username.toUpperCase()} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>:
            <>
            {data3.form?
            <Button
            onClick={()=>dispatch(displayRegisterForm())}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            crear cuenta
          </Button>
            :<Button
            onClick={()=>dispatch(displayLoginForm())}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            iniciar sesion
          </Button>}
            </>
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{data2.username} </Typography>
            </MenuItem>
            <MenuItem  onClick={handleCloseSession}>
            <Typography textAlign="center">  Cerrar Sesi&oacute;n </Typography>
            </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
