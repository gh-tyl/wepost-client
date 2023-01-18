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

const posts = [
  {
    id: 1,
    authorID: 1004,
    authorName: "Matty Munning",
    title: "Programming",
    likes: 23,
    stores: 32,
    date: "test"
  },
  {
    id: 4,
    authorID: 1005,
    authorName: "Tobe Radclige",
    title: "Programming",
    likes: 13,
    stores: 2,
    date: "test"
  },
]

function PostsTable() {
  return (
    <Box>
      <Typography component={"h2"} variant={"h4"} align={"center"} color={"red"}>Posts table</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="posts table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Posted by</TableCell>
              <TableCell align="center">Topic</TableCell>
              <TableCell align="center">Likes</TableCell>
              <TableCell align="center">Stores</TableCell>
              <TableCell align="center">Date Posted</TableCell>
              <TableCell align="center">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.id}
                </TableCell>
                <TableCell align="center">{post.authorName}</TableCell>
                <TableCell align="center">{post.title}</TableCell>
                <TableCell align="center">{post.likes}</TableCell>
                <TableCell align="center">{post.stores}</TableCell>
                <TableCell align="center">{post.date}</TableCell>
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
export default PostsTable;