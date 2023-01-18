import CountryChart from "./charts/CountryChart";
import TopicsChart from "./charts/TopicsChart";
import AgeChart from "./charts/AgeChart"
import GenderChart from "./charts/GenderChart"
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";




function Dashboard() {
	return (
		<>
			<Grid container paddingY={4} textAlign={"center"}>
				<Grid item sm={12}>
					<Container maxWidth="xs">					  
						<h1>Dashboard</h1>
						<p>Dashboard page for admin</p>
					</Container>
				</Grid>
			</Grid>
			<Grid container paddingBottom={4} spacing={4} rowSpacing={6}>			
				<CountryChart />
				<TopicsChart />
				<AgeChart />
				<GenderChart />
			</Grid>
		</>
	)
}

export default Dashboard;