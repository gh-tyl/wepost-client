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
import CheckIcon from '@mui/icons-material/Check';
import jsonSrv from '../../../../Services/jsonSrv';
import { useState, useEffect } from 'react';

function PostsTable() {
  const [posts, setPosts] = useState();
  // console.log(posts);
  const init = () => {
    jsonSrv.get("/articles/feed_copy.php")
      .then((res) => {
        // console.log(res.data.data.articles);
        let resData = res.data.data.articles;
        setPosts(resData);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const onEdit = ({id, postInfo}) => {
    setInEditMode({
        status: true,
        rowKey: id
    })
    setPostInfo(postInfo)
  }
  const deleteThis = (array, id)=>{
      const newArray = [];
      for ( let i = 0; i < array.length; i++) {
          if(array[i] !== id) {
              newArray.push(array[i]);
          }
      }
    setPosts(newArray)
  }

  const onSave = (id, genre) => {
    // console.log(posts[id]);
    id = id-1;
    setPosts(prevPosts=>{
      prevPosts[id].genre = genre;
      return prevPosts
      // posts[id].genre = genre
    })
    setInEditMode({
      status: false,
      rowKey: null
  })
  }
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null
  });
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    init();
  },[]);



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
                <TableCell align="center">
                  {post.first_name+" "+post.last_name}
                </TableCell>
                <TableCell align="center">
                {
                  inEditMode.status && inEditMode.rowKey === post.id ? (
                      <input value={postInfo}
                        onChange={(event) => setPostInfo(event.target.value)}
                      />
                  ) : (post.genre)
                }  
                </TableCell>
                <TableCell align="center">{post.likes}</TableCell>
                <TableCell align="center">{post.stores}</TableCell>
                <TableCell align="center">{post.datetime}</TableCell>
                <TableCell align="center">
                  {
                    inEditMode.status && inEditMode.rowKey === post.id ? (
                      <Button color="primary" variant="outlined" onClick={()=>onSave(post.id, postInfo)} startIcon={<CheckIcon />} sx={{marginRight: 1}}>Save</Button>) : (
                         <Button color="primary" variant="outlined" onClick={()=>onEdit({id: post.id, postInfo: post.genre})} startIcon={<EditIcon />} sx={{marginRight: 1}}>Edit</Button>
                    )
                  }
                  <Button color="primary" variant="outlined" onClick={()=>deleteThis(posts, post.id)} endIcon={<DeleteIcon />}>Delete</Button>
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