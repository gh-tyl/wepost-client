import CountryChart from "./components/charts/CountryChart";
import TopicsChart from "./components/charts/TopicsChart";
import AgeChart from "./components/charts/AgeChart";
import GenderChart from "./components/charts/GenderChart";
import UserTable from "./components/tables/UserTable";

import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

function Dashboard() {
	return (
		<>
			<Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						flexWrap: "wrap",
						justifyContent: "space-around",
						gap: "5vh",
						marginY: 3
					}}
				>			
					<CountryChart />
					<TopicsChart />
					<AgeChart />
					<GenderChart />
				</Box>
				<Box>
					<UserTable />
				</Box>
			</Container>
		</>
	)
}

export default Dashboard;