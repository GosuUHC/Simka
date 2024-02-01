import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import CitySelector from "./citySelector/CitySelector";

const buttons = ["Поиск по адресу", "Обратный звонок", "Избранное"];

const UpperPart = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap>
            СИМКА
          </Typography>
          <CitySelector />
          {/*visible until shrink*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {buttons.map((button) => (
              <Button
                key={button}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {button}
              </Button>
            ))}
          </Box>
          {/*Invisible until shrink*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {buttons.map((button) => (
                <MenuItem key={button} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{button}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UpperPart;
