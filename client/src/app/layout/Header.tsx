import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

interface HeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  {
    title: "catalog",
    path: "/catalog",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const rightLinks = [
  {
    title: "login",
    path: "/login",
  },
  {
    title: "register",
    path: "/register",
  },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export const Header = ({ darkMode, handleThemeChange }: HeaderProps) => {
  return (
    <AppBar sx={{ marginBottom: 4 }} position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" href="/" component={Link} sx={navStyles}>
            E-Commerce
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem key={path} href={path} component={Link} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            sx={{
              color: "inherit",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem key={path} href={path} component={Link} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
