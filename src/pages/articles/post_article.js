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
import { FormControl, FormLabel, FormHelperText } from '@mui/material'
import { TextField, Box } from '@mui/material';

function PostArticle() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						id="outlined-multiline-flexible"
						label="Multiline"
						multiline
						maxRows={4}
					/>
					<TextField
						id="outlined-textarea"
						label="Multiline Placeholder"
						placeholder="Placeholder"
						multiline
					/>
					<TextField
						id="outlined-multiline-static"
						label="Multiline"
						multiline
						rows={4}
						defaultValue="Default Value"
					/>
				</div>
				<div>
					<TextField
						id="filled-multiline-flexible"
						label="Multiline"
						multiline
						maxRows={4}
						variant="filled"
					/>
					<TextField
						id="filled-textarea"
						label="Multiline Placeholder"
						placeholder="Placeholder"
						multiline
						variant="filled"
					/>
					<TextField
						id="filled-multiline-static"
						label="Multiline"
						multiline
						rows={4}
						defaultValue="Default Value"
						variant="filled"
					/>
				</div>
				<div>
					<TextField
						id="standard-multiline-flexible"
						label="Multiline"
						multiline
						maxRows={4}
						variant="standard"
					/>
					<TextField
						id="standard-textarea"
						label="Multiline Placeholder"
						placeholder="Placeholder"
						multiline
						variant="standard"
					/>
					<TextField
						id="standard-multiline-static"
						label="Multiline"
						multiline
						rows={4}
						defaultValue="Default Value"
						variant="standard"
					/>
				</div>
			</Box>
		</>
	)
}

export default PostArticle;