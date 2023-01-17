import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme();
function Register() {
  const classes = createTheme();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fname, lname, email, pass);
    // CLEAR FORM FIELDS
    setFname("");
    setLname("");
    setEmail("");
    setPass("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Avatar sx={{ m: 2, bgcolor: { blueGrey } }}>
            <LockOutlinedIcon />
          </Avatar>


          <form className={classes.form} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  label="First Name"
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                  autoComplete="given-name"
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  className={classes.textField}
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  className={classes.textField}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className={classes.textField}
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  name="pass"
                  label="Password"
                  type="pass"
                  id="pass"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: { blueGrey } }}
            >
              Sign Up
            </Button >
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>

        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Register;
