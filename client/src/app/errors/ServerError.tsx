import {
  Paper,
  Container,
  Typography,
  Divider,
  Button,
  Link,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

const ServerError = () => {
  const history = useHistory();
  const { state } = useLocation<any>();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h5" gutterBottom>
            Server error
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server error
        </Typography>
      )}

      <Link href="/catalog">Go back to the store</Link>
    </Container>
  );
};

export default ServerError;
