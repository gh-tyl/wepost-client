// post article page
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jsonSrv from '../../Services/jsonSrv';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ThumbUp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

function PostArticle() {
	const [queryStr] = useSearchParams();
	const [postData, setData] = useState("");
	const [editFlag, setEditFlag] = useState(false);
	const navigate = useNavigate();
	const loadArticle = () => {
		let formData = new FormData();
		let id = 1;
		if (queryStr.get("id") != null) {
			id = queryStr.get("id")
		}
		if (queryStr.get("edit") != null) {
			if (queryStr.get("edit") == "true") setEditFlag(true)
		}
		formData.append('post_id', id)
		jsonSrv.post("/articles/post_article.php", formData)
			.then(res => {
				console.log(res.data);
				setData(res.data);
			})
	}
	const editUrl = () => {
		navigate(`/post_article?id=${postData.post.id}&&edit=true`);
		setEditFlag(true);
	}
	const cancelEdit = () => {
		navigate(`/post_article?id=${postData.post.id}`);
		setEditFlag(false);

	}
	const calcHeight = (value) => {
		let numberOfLineBreaks = (value.match(/\n/g) || []).length;
		let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
		return newHeight;
	}
	const textAreaHeight = () => {
		let txtarea = document.querySelector('#txtarea');
		txtarea.style.height = (calcHeight(txtarea.value) + 20) + "px";
		console.log(calcHeight(txtarea.value) + "px");
		return null;
	}
	const editArticle = (e) => {
		e.preventDefault();
		let formData = new FormData(e.target);
		formData.append('path', postData.post.content_path);
		console.log(formData);
		jsonSrv.post("/articles/edit_article.php", formData)
			.then(res => {
				console.log(res.data);

				loadArticle();
				cancelEdit();
			})
	}
	useEffect(() => { loadArticle() }, [])

	return (
		<>
			<h1 style={{ justifyContent: 'center', display: 'flex' }}> Article</h1>
			<div >
				{(!editFlag) ?
					(postData != "") ?
						< >
							<div style={{ justifyContent: 'center', display: 'flex' }} key={postData.post.id}>
								<Card sx={{ minWidth: 275, width: '80%', padding: 3 }} >
									<CardContent >
										<Typography variant='h5' component='div'>
											{postData.post.title}
										</Typography>
										<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
											Posted by: {postData.post.first_name} {postData.post.last_name}
										</Typography>
										<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
											Date posted: {(postData.post.datetime)}
										</Typography>
										<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
											Genre: {(postData.post.genre)}
										</Typography>
										<Typography sx={{ mb: 1.5 }} color='text.secondary'>
											<ThumbUp sx={{ width: 18, color: "#F75959" }} />{postData.post.likes}
										</Typography>
										<Typography variant='body2' sx={{ textAlign: "justify" }}>
											{postData.content}
										</Typography>
										<CardActions>
											<Button onClick={editUrl} variant="outlined" type="button" size='small'>Edit</Button>
										</CardActions>
										<Typography variant='body2'>
											<br />
										</Typography>
										<Typography variant='h5' component='div'>
											Comments:
										</Typography>
										<Typography variant='body2'>
											<br />
										</Typography>
										<div style={{ alignContent: 'center', display: 'flex', flexDirection: "column", rowGap: "1vh" }}>
											{postData.comments.map((comment, idx) =>
												<>
													<Card sx={{ backgroundColor: 'lightgray', padding: "1vh	" }} key={idx} >
														<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
															{comment.comment}
														</Typography>
														<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
															Date posted: {comment.datetime}
														</Typography>
													</Card>
													<br></br>
												</>
											)}
										</div>
									</CardContent>
								</Card>
							</div>
							<br></br>
						</>
						: null
					: (postData != "") ?
						< >
							<div style={{ justifyContent: 'center', display: 'flex' }} key={postData.post.id}>
								<Card sx={{ minWidth: 275, width: '80%', padding: 3 }}>
									<form onSubmit={editArticle}>
										<CardContent >
											<Typography variant='h5' component='div'>
												{postData.post.title}
											</Typography>
											<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
												Posted by: {postData.post.first_name} {postData.post.last_name}
											</Typography>
											<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
												Date posted: {(postData.post.datetime)}
											</Typography>
											<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
												Genre: {(postData.post.genre)}
											</Typography>
											<Typography sx={{ mb: 1.5 }} color='text.secondary'>
												<ThumbUp sx={{ width: 18, color: "#F75959" }} />{postData.post.likes}
											</Typography>
											<textarea name='newContent' style={{ textAlign: "justify", width: "99%", height: "300px", resize: "none" }} id="txtarea" onChange={textAreaHeight} onFocus={textAreaHeight} defaultValue={postData.content}  >
											</textarea>
											<CardActions>
												<Button onClick={cancelEdit} variant="outlined" type="button" size='small' color='error'><DeleteIcon fontSize="small" />Cancel</Button>
												<Button variant="outlined" type="submit" size='small' color='success'>Save</Button>
											</CardActions>
											<Typography variant='body2'>
												<br />
											</Typography>
											<Typography variant='h5' component='div'>
												Comments:
											</Typography>
											<Typography variant='body2'>
												<br />
											</Typography>
											<div style={{ alignContent: 'center', display: 'flex', flexDirection: "column", rowGap: "1vh" }}>
												{postData.comments.map((comment, idx) =>
													<>
														<Card sx={{ backgroundColor: 'lightgray', padding: "1vh" }} key={idx} >
															<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
																{comment.comment}
															</Typography>
															<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
																Date posted: {comment.datetime}
															</Typography>
														</Card>
														<br></br>
													</>
												)}
											</div>
										</CardContent>
									</form>
								</Card>
							</div>
							<br></br>
						</>
						: null
				}
			</div>
		</>
	);
}

export default PostArticle;