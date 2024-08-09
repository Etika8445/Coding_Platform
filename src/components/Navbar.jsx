import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const themes = {
  light: {
    background: '#f5f5f5',
    color: '#333',
  },
  dark: {
    background: '#1e1e1e',
    color: '#f5f5f5',
  },
};

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${(props) => props.theme.color};
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
      color: #0077ff;
    }
  }
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const muiTheme = createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <MuiThemeProvider theme={muiTheme}>
        <NavbarWrapper>
          <Logo>CodeMaster</Logo>
          <NavLinks>
            <a href="#playground">Playground</a>
            <a href="#codearena">Code Arena</a>
            <a href="#battlefield">Battlefield</a>
          </NavLinks>
          <ThemeSwitcher>
            {theme === 'dark' ? <Brightness4 /> : <Brightness7 />}
            <Switch
              checked={theme === 'dark'}
              onChange={toggleTheme}
              color="default"
            />
          </ThemeSwitcher>
        </NavbarWrapper>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default Navbar;