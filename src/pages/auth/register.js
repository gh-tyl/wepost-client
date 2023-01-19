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
// import function to send data to server
import jsonSrv from "../../Services/jsonSrv";
// import navigate to redirect to another page
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function Register() {
  // useNavigate hook to redirect to another page
  const navigate = useNavigate();

  const classes = createTheme();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fname, lname, email, pass);
    // create FormData object to send data to server
    let data = new FormData(event.target);
    // send data to server
    jsonSrv.post("/auth/register.php", data)
      .then((response) => {
        if (response.data.status === "success") {
          // CLEAR FORM FIELDS
          setFname("");
          setLname("");
          setEmail("");
          setPass("");
          // redirect to login page
          // navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                  fullWidth
                  id="fname"
                  label="First Name"
                  name="fname"
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                  autoComplete="given-name"
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                  autoComplete="family-name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  id="pass"
                  label="Password"
                  name="password"
                  type="password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  autoComplete="new-password"
                  required
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
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./login" variant="body2">
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
