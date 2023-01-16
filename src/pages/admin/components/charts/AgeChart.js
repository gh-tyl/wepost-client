import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
// dashboard page for admin
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
//Make query on database to search for all topics and display them accorddly
export const data = {
	labels: ['18 < 23', '24 < 29', '30 < 35', '36+'],
	datasets: [
	  {
		label: '# of Votes',
		data: [12, 19, 3, 5],
		backgroundColor: [
		  'rgba(255, 99, 132, 0.2)',
		  'rgba(54, 162, 235, 0.2)',
		  'rgba(255, 206, 86, 0.2)',
		  'rgba(75, 192, 192, 0.2)'
		],
		borderColor: [
		  'rgba(255, 99, 132, 1)',
		  'rgba(54, 162, 235, 1)',
		  'rgba(255, 206, 86, 1)',
		  'rgba(75, 192, 192, 1)'
		],
		borderWidth: 1,
	  },
	],
  };

function AgeChart() {
	return (
		<Paper elevation={3}
		sx={{width: "60vh", display: "flex", flexDirection: "column", p: 2, alignItems: "center", textAlign: "center"}}>
				<Typography component={"h2"} variant={"h4"} color={"red"}>Ages</Typography>
				<Pie data={data} />
		</Paper>
	)
}

export default AgeChart;