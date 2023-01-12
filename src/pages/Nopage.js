import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const primary = blueGrey[700];

function Nopage() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '100vh',
				backgroundColor: primary,
			}}
		>
			<Typography variant="h1" style={{ color: 'white' }}>
				404
			</Typography>
			<Typography variant="h6" style={{ color: 'white' }}>
				The page you’re looking for doesn’t exist.
			</Typography>
			<Link
				to="/"
				style={{
					textDecoration: 'none',
					color: blueGrey[50],
				}}
			>
				<Button
					variant="contained"
					sx={{
						backgroundColor: blueGrey[50],
						color: primary,
						marginTop: '1rem',
					}}
				>
					Back Home
				</Button>
			</Link>
		</Box>
	);
}

export default Nopage;