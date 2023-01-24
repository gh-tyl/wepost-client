// This is the Home page
// It's going to be the welcome page
// Write the introduction here
import { Container, Typography} from "@mui/material";

function Home() {
	return (
		<>
			<Container maxWidth="sm">
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Typography variant="h2" component="h2" sx={{ fontWeight: "bold", color: "#082c69" }} >
						WePost
					</Typography>
					<Typography variant="h6" component="h2" sx={{ backgroundColor: "#f0f4fa", p: "20px", mt: "20px", color: "#1c1c1c" }}>
						<Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#082c69" }} >
							What is WePost?
						</Typography>
						WePost is an encyclopedia where you can post articles from simple ideas up to a full scientific article!

						<Typography variant="h5" component="h2" sx={{ fontWeight: "bold", color: "#082c69", mt: "10px" }} >
							Our source is Reliable!
						</Typography>
						We make sure scientific articles come from a trustable source, it requires a scientific ID from a valid institution.
					</Typography>
				</div>
			</Container>
		</>
	)
}

export default Home;