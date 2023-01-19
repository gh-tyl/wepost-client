// post article page
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { FormControl, FormLabel, FormHelperText } from '@mui/material'
import { TextField, Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { InputLabel, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dec } from "../../lib/crypt";

import jsonSrv from '../../Services/jsonSrv';

const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[900],
		},
		secondary: {
			main: blueGrey[900],
		},
	},
});

function PostArticle() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [genres, setGenres] = useState([]);
	const [genre1, setGenre1] = useState("");
	const [genre2, setGenre2] = useState("");
	const [genre3, setGenre3] = useState("");

	useEffect(() => {
		jsonSrv.get("/articles/post_article.php")	// get genres
			.then(res => {
				console.log(res.data.data);
				setGenres(res.data.data);
				console.log(genres);
			})
			.catch(err => {
				console.log(err);
			})
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
		console.log(title, content, genre1, genre2, genre3);
		let data = new FormData(e.target);
		let token = sessionStorage.getItem("token");
		token = dec(token);
		data.append("token", token);
		jsonSrv.post("/articles/post_article.php", data)
			.then(res => {
				console.log(res.data);
				if (res.data.status === "success") {
					setTitle("");
					setContent("");
					setGenre1("");
					setGenre2("");
					setGenre3("");
					navigate("/feed");
				} else {
					console.log(res.data.message);
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<FormControl
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{
							mt: 1,
							mb: 1,
							width: '60%', // Fix IE 11 issue.
						}}
					>
						<TextField
							id="title"
							label="Title"
							name="title"
							value={title}
							variant="standard"
							onChange={e => setTitle(e.target.value)}
							autoFocus
							required
						/>
						<TextField
							id="standard-multiline-static"
							label="Multiline"
							name="content"
							multiline
							rows={10}
							defaultValue="Content"
							variant="standard"
							onChange={e => setContent(e.target.value)}
						/>
						{/* genres */}
						{/* <FormLabel component="legend">Genres</FormLabel> */}
						<TextField
							select
							label="Select"
							name='genre_id_01'
							onChange={e => setGenre1(e.target.value)}
							helperText="Please select your first genre"
							size="small"
							sx={{
								mt: 1,
								mb: 1,
							}}
							required
						>
							{genres.map((option) => (
								<MenuItem key={option.id} value={option.id}>
									{option.name}
								</MenuItem>
							))}
						</TextField>
						<TextField
							select
							label="Select"
							name='genre_id_02'
							// value={genre2}
							size="small"
							onChange={e => setGenre2(e.target.value)}
							helperText="Please select your second genre (optional)"
						>
							{genres.map((option) => (
								<MenuItem key={option.id} value={option.id}>
									{option.name}
								</MenuItem>
							))}
						</TextField>
						<TextField
							select
							label="Select"
							name='genre_id_03'
							// value={genre3}
							size="small"
							onChange={e => setGenre3(e.target.value)}
							helperText="Please select your third genre (optional)"
						>
							{genres.map((option) => (
								<MenuItem key={option.id} value={option.id}>
									{option.name}
								</MenuItem>
							))}
						</TextField>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, bgcolor: { blueGrey } }}
						>
							Send
						</Button>
					</FormControl>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default PostArticle;