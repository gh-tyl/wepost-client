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
import jsonSrv from '../../../../Services/jsonSrv';
import { useState, useEffect } from 'react';

function UserTable() {
  const [users, setUser] = useState([]);

  const init = () => {
    jsonSrv.get("/users/all_users.php")
      .then((res) => {
        let resData = res.data.data;
        // console.log(resData);
        setUser(resData);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  useEffect(() => {
    init();
  },[]);
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
                <TableCell align="center">{user.first_name}</TableCell>
                <TableCell align="center">{user.last_name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">
                {
                  (user.gender==null) ? "Not Informed" : user.gender
                }</TableCell>
                <TableCell align="center">
                {
                  (user.age==null) ? "Not Informed" : user.age
                }</TableCell>
                <TableCell align="center">
                {
                  (user.country==null) ? "Not Informed" : user.country
                }</TableCell>
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