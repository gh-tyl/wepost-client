import * as React from 'react';
import jsonSrv from "../../Services/jsonSrv";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Paper, Grid, Avatar, Container, Link, Button, Typography, Card } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { dec } from '../../lib/crypt';

function Profile() {
	const [user, setUser] = useState({
			userName: "",
	});
	const [posts, setPosts] = useState([

	]);
	const [stats, setStats] = useState({});

	const navigate = useNavigate(); 

	// token = session ID
	const init = () => {
		let data = new FormData();
		// token = session ID from php
		// Got token from session storage in react
		let token = sessionStorage.getItem("token");
		// need to decode bc when user login token is encoded
		token = dec(token);
		// name "token" token, append to formData(data)
		data.append("token", token);
		// send data to php
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

	// to get from php whn user go to profile page
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
						<Typography sx={{ mb: 1.5, fontSize: "14px" }} color="text.secondary">
							{posts.length > 0 ? posts.length : 0} POSTS
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<PersonIcon color="primary" />
						<Typography sx={{ mb: 1.5, fontSize: "14px" }} color="text.secondary">
							{stats.followers > 0 ? stats.followers : 0} FOLLOWERS
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<FavoriteIcon color="primary" />
						<Typography sx={{ mb: 1.5, fontSize: "14px" }} color="text.secondary">
							{stats.rc_likes > 0 ? stats.rc_likes : 0} LIKES
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<TurnedInIcon color="primary" />
						<Typography sx={{ mb: 1.5, fontSize: "14px" }} color="text.secondary">
							{stats.rc_saves > 0 ? stats.rc_saves : 0} SAVED
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

export default Profile;

