import { Paper, Grid, Container, TextField, CardContent, Button } from "@mui/material"

function ProfileEdit() {
	return (
		<>
			<Container maxWidth="sm" >
				<Paper elevation={1} style={{ padding: "20px", marginTop: "20px" }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<input
								style={{ display: "none" }}
								id="contained-button-file"
								type="file"
							/>
							<label htmlFor="contained-button-file">
								<Button variant="contained" color="primary" component="span">
									Upload photo
								</Button>
							</label>
							<div>
								<TextField variant="outlined" label="First name" type="name" gutterBottom /><br />
								<TextField variant="outlined" label="Last name" type="name" /><br />
								<TextField variant="outlined" label="Email" type="text" /><br />
								<TextField variant="outlined" label="Age" type="number" /><br />
								<TextField variant="outlined" label="Country" type="text" />
							</div>
							<Button variant="contained">Save changes</Button>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	)
}

export default ProfileEdit;