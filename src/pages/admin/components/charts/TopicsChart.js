// dashboard page for admin
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from "react-chartjs-2"
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

ChartJS.register(ArcElement, Tooltip, Legend);
//Make query on database to search for all topics and display them accorddly
export const data = {
	labels: ['Studies', 'Sports', 'Nature', 'Cryptocurrency', 'Tech', 'Carrers'],
	datasets: [
	  {
		label: '# of Votes',
		data: [12, 19, 3, 5, 2, 3],
		backgroundColor: [
		  'rgba(255, 99, 132, 0.2)',
		  'rgba(54, 162, 235, 0.2)',
		  'rgba(255, 206, 86, 0.2)',
		  'rgba(75, 192, 192, 0.2)',
		  'rgba(153, 102, 255, 0.2)',
		  'rgba(255, 159, 64, 0.2)',
		],
		borderColor: [
		  'rgba(255, 99, 132, 1)',
		  'rgba(54, 162, 235, 1)',
		  'rgba(255, 206, 86, 1)',
		  'rgba(75, 192, 192, 1)',
		  'rgba(153, 102, 255, 1)',
		  'rgba(255, 159, 64, 1)',
		],
		borderWidth: 1,
	  },
	],
  };

function TopicsChart() {
	return (
		<Paper elevation={3}
		sx={{width: "60vh", display: "flex", flexDirection: "column", p: 2, alignItems: "center", textAlign: "center"}}>
				<Typography component={"h2"} variant={"h4"} color={"red"}>Popular Topics</Typography>
				<Pie data={data} />
		</Paper>
	)
}

export default TopicsChart;