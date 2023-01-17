// import { Paper, Grid, Container, TextField, CardContent, Button } from "@mui/material"
import { Paper, Grid, Container, TextField, Typography, Button } from "@mui/material"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function ProfileEdit() {
	return (
		<>
			<Container maxWidth="sm" >
				{/* <Paper elevation={1} style={{ padding: "20px", marginTop: "20px" }}> */}
				<Paper elevation={1} sx={{ padding: "20px", marginTop: "20px" }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<Typography variant="h5" component="div" color="primary" sx={{ fontWeight: 'bold' }}>
								EDIT PROFILE
							</Typography>
							<div>
								<TextField variant="outlined" label="First name" type="name" gutterBottom sx={{ width: 300, margin: "10px 0 5px 0" }} /><br />
								<TextField variant="outlined" label="Last name" type="name" sx={{ width: 300, margin: "5px 0" }} /><br />
								<TextField variant="outlined" label="Email" type="text" sx={{ width: 300, margin: "5px 0" }} /><br />
								<TextField variant="outlined" label="Age" type="number" sx={{ width: 300, margin: "5px 0" }} /><br />
								<TextField variant="outlined" label="Country" type="text" sx={{ width: 300, margin: "5px 0" }} />
							</div>
							<input
								style={{ display: "none" }}
								id="contained-button-file"
								type="file"
							/>
							<label htmlFor="contained-button-file">
								{/* <Button variant="contained" color="primary" component="span"> */}
								<Button variant="contained" color="primary" component="span" sx={{ width: 300, margin: "5px 0" }}>
									<PhotoCameraIcon color="white" sx={{ marginRight: "5px" }} />
									Upload photo
								</Button>
							</label>
							<Button variant="contained" sx={{ width: 300, margin: "5px 0 10px 0" }}>Save changes</Button>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	)
}

export default ProfileEdit;