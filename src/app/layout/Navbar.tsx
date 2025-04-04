import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  MenuItem,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

const Navbar = ({ openForm }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#353535" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem sx={{ display: "flex", gap: 1 }}>
                <Group fontSize="medium" />
                <Typography variant="h6" fontWeight="semi-bold">
                  Reactivites
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <MenuItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Activties
              </MenuItem>
              <MenuItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                About
              </MenuItem>
              <MenuItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Contact
              </MenuItem>
            </Box>
            <Button
              size="large"
              variant="contained"
              color="info"
              onClick={openForm}
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
