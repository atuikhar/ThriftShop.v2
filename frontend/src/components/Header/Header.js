import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@mui/material'
import {
  AccountCircle,
  MoreVert as MoreIcon,
  Search as SearchIcon,
} from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Text,
} from './HeaderStyles'
import { Link } from 'react-router-dom'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const location = useLocation()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: '40px', ml: '10px' }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login">
          <Text color="#000">Profile</Text>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login">
          <Text color="#000">Account</Text>
        </Link>
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {location.pathname !== '/' && (
        <MenuItem>
          <IconButton size="large" aria-label="Cart Items" color="inherit">
            <Badge badgeContent={4} color="error">
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
          <Link to="/cart">
            <Text color="#000">Cart</Text>
          </Link>
        </MenuItem>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="User"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography>User</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Link to="/">
            <Text
              noWrap
              component="div"
              sx={{
                fontFamily: 'Poppins, Sans Serif',
              }}
            >
              ThriftShop
            </Text>
          </Link>
          {location.pathname !== '/' && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {location.pathname !== '/' && (
              <IconButton size="large" aria-label="Cart Items" color="inherit">
                <Badge badgeContent={4} color="error">
                  <Link to="/cart">
                    <ShoppingCartIcon
                      sx={{ fontSize: '35px', color: '#cbced4' }}
                    />
                  </Link>
                </Badge>
              </IconButton>
            )}
            <IconButton
              size="large"
              edge="end"
              aria-label="User"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle
                sx={{ fontSize: '35px', color: '#cbced4', mb: 0.8 }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}

export default Header
