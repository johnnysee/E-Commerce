import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export const Header = ({ darkMode, handleThemeChange }: HeaderProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <AppBar sx={{ marginBottom: 4 }} position="static">
      <Toolbar>
        <Typography variant="h6">E-Commerce</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
};
