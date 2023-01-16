import CountryChart from "./components/charts/CountryChart";
import TopicsChart from "./components/charts/TopicsChart";
import AgeChart from "./components/charts/AgeChart"
import GenderChart from "./components/charts/GenderChart"
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';


function Dashboard() {
	return (
		<>
			<Grid container spacing={4} rowSpacing={6} marginY={1}>			
				<CountryChart />
				<TopicsChart />
				<AgeChart />
				<GenderChart />
			</Grid>
		</>
	)
}

export default Dashboard;