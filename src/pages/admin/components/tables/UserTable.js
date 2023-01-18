import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const users = [
  {
    id: 1004,
    fname: "Matty",
    lname: "Munning",
    email: "mmunning4@nymag.com",
    gender: "Male",
    age: 20,
    country: "Indonesia",
    img: "pic2.jpg"
  },
  {
    id: 1005,
    fname: "Tobe",
    lname: "Radclige",
    email: "tradcliffe5@imageshack.us",
    gender: "Other",
    age: 33,
    country: "Sweden",
    img: "pic1.jpg"
  },
]

function UserTable() {
  return (
    <Box>
      <Typography component={"h2"} variant={"h4"} align={"center"} color={"red"}>Users table</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.fname}</TableCell>
                <TableCell align="center">{user.lname}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.gender}</TableCell>
                <TableCell align="center">{user.age}</TableCell>
                <TableCell align="center">{user.country}</TableCell>
                <TableCell align="center">
                  <Button color="primary" variant="outlined" startIcon={<EditIcon />} sx={{marginRight: 1}}>Edit</Button>
                  <Button color="primary" variant="outlined" endIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default UserTable;