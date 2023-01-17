import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Paper, Grid, Avatar, Container, Link, Button, Typography, Card } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import jsonSrv from '../../Services/jsonSrv';
import { dec } from '../../lib/crypt';

// let posts = [];

// let user = {};

function TestProfile() {
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);
	const [stats, setStats] = useState({});

	const navigate = useNavigate();  // to go to the profile edit page

	const init = () => {
		let data = new FormData();
		let token = sessionStorage.getItem("token");
		token = dec(token);
		data.append("token", token);
		jsonSrv.post("/users/profile.php", data)
			.then(res => {
				const res_data = res.data.data;
				setUser(res_data.user);
				setPosts(res_data.posts);
				setStats(res_data.stats);
			}).catch((err) => {
				console.log(err)
			})
	};

	useEffect(() => {
		init();
	}, []);

	console.log(user);
	console.log(posts);
	console.log(stats);

	return (
		<Container maxWidth="sm">
			<Paper elevation={1} sx={{ padding: "20px", marginTop: "20px" }}>
				<Grid container spacing={2}>
					<Grid item xs={4} >
						<Avatar
							alt="Profile picture"
							src="/profile.jpg"
							sx={{ width: 150, height: 150 }}
						/>
					</Grid>
					<Grid item xs={8} container direction="column" justifyContent="center">
						<Typography variant="h5" component="div" >
							{user.first_name} {user.last_name}
						</Typography>

						<Typography variant="body2">
							From {user.country}
						</Typography>
						<Button variant="contained" onClick={() => navigate("/profile_edit")} sx={{ marginTop: "20px" }}>Edit Profile</Button>
					</Grid>
				</Grid>

				<Grid container spacing={4} sx={{ marginTop: "5px" }}>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<ArticleIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{posts.length > 0 ? posts.length : 0} POSTS
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<PersonIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{stats.followers > 0 ? stats.followers : 0} FOLLOWERS
							{/* {user.followers} FOLLOWERS */}
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<FavoriteIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{stats.rc_likes > 0 ? stats.rc_likes : 0} LIKES
							{/* {user.likes} LIKES */}
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<TurnedInIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{stats.rc_saves > 0 ? stats.rc_saves : 0} SAVED
							{/* {user.saved} SAVED */}
						</Typography>
					</Grid>
				</Grid>
				{posts.map(postDetails => {
					return <PostSnippet postDetails={postDetails} />
				})}
			</Paper>
		</Container>
	)
};

const PostSnippet = ({ postDetails }) => { // To get the artcle title and path 
	return (
		<Card variant='outlined' sx={{ marginBottom: "8px", padding: "8px" }}>
			<Grid>
				<Typography>
					{postDetails.title}
				</Typography>
				<Link href={postDetails.content_path}>Read the article</Link>
			</Grid>
		</Card>
	)
};

export default TestProfile;