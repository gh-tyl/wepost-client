import * as React from "react";
import jsonSrv from "../../Services/jsonSrv";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { Paper, Grid, Avatar, Container, Link, Button, Typography, Card } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

const posts = [  // dummy articles
	{
		articleId: 1,
		userId: 1000,
		articlePath: "path",
		title: "Summer is the best season",
		body: "asdfghjhgfdsdfgbhnmfdfghj",
		genreId: 20,
		likes: 50000,
	},
	{
		articleId: 2,
		userId: 1000,
		articlePath: "path",
		title: "Vitamin D is important in the winter",
		body: "asdfghjhgfdsdfgbhnmfdfghj",
		genreId: 20,
		likes: 50000
	},
	{
		articleId: 3,
		userId: 1000,
		articlePath: "path",
		title: "Time flies!",
		body: "asdfghjhgfdsdfgbhnmfdfghj",
		genreId: 20,
		likes: 50000
	}
];

const user = { // dummy user info
	userName: "Miku Fujiwara",
	followers: "?",
	likes: "?",
	saved: "?",
	country: "Japan",
	posts: posts,
};

function Profile() {
	const [dbuser, setdbUser] = useState()
	const navigate = useNavigate();  // to go to the profile edit page

	const getUser = () => {
		jsonSrv.post({ token: 1000 })
			.then(res => {
				console.log(res);
				setdbUser(res.data);
			}).catch((err) => {
				console.log(err)
			})
		// add async before () for this to work
		// const res = await jsonSrv.get("test2.php")
		// console.log(res);
		// setSid(res.data);
		// sessionStorage.setItem("sid",enc(res.data.sid,"H01D0g")) 
	};

	useEffect(() => {
		getUser()

	}, [])
	useEffect(() => {
		console.log("from profile page user is ", dbuser)

	}, [dbuser])


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
							{user.userName}
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
							{user.posts.length} POSTS
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<PersonIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{user.followers} FOLLOWERS
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<FavoriteIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{user.likes} LIKES
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<TurnedInIcon color="primary" />
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{user.saved} SAVED
						</Typography>
					</Grid>
				</Grid>
				{user.posts.map(postDetails => {
					return <PostSnippet postDetails={postDetails} />
				})}
			</Paper>
		</Container>
	)
};

const PostSnippet = ({ postDetails }) => { // To get the artcle title and path 
	return (
		<Card variant="outlined" sx={{ marginBottom: "8px", padding: "8px" }}>
			<Grid>
				<Typography>
					{postDetails.title}
				</Typography>
				<Link href={postDetails.articlePath}>Read the article</Link>
			</Grid>
		</Card>
	)
};

export default Profile;

