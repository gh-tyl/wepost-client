// This is the feed page
import FeedCard from './feedcard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import jsonSrv from '../../Services/jsonSrv';
import { useState } from 'react';
import { useEffect } from 'react';

function Feed() {
	const [res, setRes] = useState([]);
	useEffect(() => {
		const get = () => {
			jsonSrv.post("articles/feed_react.php", "")
				.then(response => {
					setRes(response.data);
					console.log(response.data);
				})
				.catch(err => {
					console.log(err);
				})
		};
		get();
	}, []);

	return (
		<div>
			<Container sx={{ marginY: 3 }}>
				<Grid container spacing={3}>
					{res.map((post, key) => <FeedCard post={post} key={key} />)}
				</Grid>
			</Container>
		</div>
	);
}
export default Feed;