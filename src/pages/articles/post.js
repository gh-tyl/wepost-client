// post article page
import { useSearchParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import jsonSrv from '../../Services/jsonSrv';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ThumbUp } from '@mui/icons-material';
function PostArticle() {
	const [queryStr] = useSearchParams();
	const [postData,setData] = useState("");
	const [editFlag,setEditFlag] = useState(false);
	const navigate = useNavigate();
	const loadArticle = ()=>{
		let formData = new FormData();
		let id = 1;
		if(queryStr.get("id") != null){
			id = queryStr.get("id")
		}
		if(queryStr.get("edit") != null){
			setEditFlag(queryStr.get("edit"))
		}
		formData.append('post_id',id)
		jsonSrv.post("/pages/articles/post_article.php",formData)
		.then(res=>{
			console.log(res.data);
			setData(res.data);
		})
	}
	const editArticle = ()=>{

		navigate(`/post_article?id=${postData.post.id}&&edit=true`);
		setEditFlag(true);
		console.log(editFlag);
	}
	useEffect(()=>{loadArticle()},[])
	return (
		<>
			
			<h1 style={{justifyContent: 'center' ,display: 'flex'}}> Article</h1>
			<div >
			{(!editFlag)?
			(postData != "")?
				< >
					<div style={{justifyContent: 'center' ,display: 'flex'}} key={postData.post.id}>
						<Card sx={{ minWidth: 275 ,width:'80%'} }>
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
									<Typography sx={{ mb: 1.5 }} color='text.secondary'>
									<ThumbUp sx={{width:18, color:"#F75959"}} />{postData.post.likes}
									</Typography>
									<Typography variant='body2'>
									 "content"
									</Typography>
									<Typography variant='body2'>
									 <br/>
									</Typography>
									<div style={{alignContent: 'center' ,display: 'flex', flexDirection : "column", rowGap : "1vh"}}>
									{postData.comments.map((comment,idx) =>

										<>
										<Card sx={{ width: "80%" ,backgroundColor: 'lightgray',padding: "1vh	"}} key={idx} >
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
								<CardActions>
									<Button onClick={editArticle} type="button" size='small'>Edit</Button>
								</CardActions>
						</Card>
					</div>
					<br></br>
					</>
				
				:null
				:(postData != "")?
				< >
					<div style={{justifyContent: 'center' ,display: 'flex'}} key={postData.post.id}>
						<Card sx={{ minWidth: 275 ,width:'80%'} }>
								<form >
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
									<Typography sx={{ mb: 1.5 }} color='text.secondary'>
									<ThumbUp sx={{width:18, color:"#F75959"}} />{postData.post.likes}
									</Typography>
									<Typography variant='body2'>
									 "content"
									</Typography>
									<Typography variant='body2'>
									 <br/>
									</Typography>
									<div style={{alignContent: 'center' ,display: 'flex', flexDirection : "column", rowGap : "1vh"}}>
									{postData.comments.map((comment,idx) =>

										<>
										<Card sx={{ width: "80%" ,backgroundColor: 'lightgray',padding: "1vh	"}} key={idx} >
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
								<CardActions>
									<Button onClick={editArticle} type="button" size='small' color='error'>Cancel</Button>
									<Button onClick={editArticle} type="button" size='small' color='success'>Save</Button>
								</CardActions>
							</form>
						</Card>
					</div>
					<br></br>
					</>
				
				:null
				}
			</div>
			

		</>
	);
}

export default PostArticle;