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
import { midLinks, navStyles, rightLinks } from "../utils/utils";
import { useStoreContext } from "../context/StoreContext";

interface HeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export const Header = ({ darkMode, handleThemeChange }: HeaderProps) => {
  const { basket } = useStoreContext();
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
            LinkComponent={Link}
            href={"/basket"}
            size="large"
            sx={{
              color: "inherit",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            <Badge badgeContent={basket?.items.length} color="secondary">
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
