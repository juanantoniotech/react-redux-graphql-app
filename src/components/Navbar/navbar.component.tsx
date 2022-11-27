import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  Box,
  Menu,
  MenuItem,
  Container,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export type Props = {};

const Navbar: React.FC<Props> = (props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Star Wars
          </Typography>

          {/* Mobile buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="main-menu"
              open={Boolean(anchorElNav)}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              href="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontWeight: 700 }}
            >
              Inicio
            </Button>
            <Button
              href="/characters"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontWeight: 700 }}
            >
              Personajes
            </Button>
            <Button
              href="/favs"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontWeight: 700 }}
            >
              Favoritos
            </Button>
            <Button
              href="/login"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontWeight: 700 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
