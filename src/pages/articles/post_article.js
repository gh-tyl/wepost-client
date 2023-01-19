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

function PostArticle() {
	return (
		<>
			<FormControl>
				<FormLabel></FormLabel>

				<FormHelperText></FormHelperText>
			</FormControl>
		</>
	)
}

export default PostArticle;