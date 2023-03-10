// dashboard page for admin
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from "react-chartjs-2"
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import jsonSrv from "../../../../Services/jsonSrv";

ChartJS.register(ArcElement, Tooltip, Legend);
//Make query on database to search for all topics and display them accorddly
let topics = [];
let topicsVal = [];
export const data = {
	labels: topics,
	datasets: [
		{
			label: '# of Votes',
			data: topicsVal,
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

const init = () => {
	jsonSrv.get("/articles/topics.php")
		.then((res) => {
			let resData = res.data.data.topics;
			resData.forEach((val) => {
				topics.push(val.genre);
				topicsVal.push(parseInt(val.qtd));
			})
			topics.push("Others");
			topicsVal.push(14);
			data.labels = topics;
			data.datasets[0].data = topicsVal;
		})
		.catch((err) => {
			console.log(err);
		})
}

init();

function TopicsChart() {
	console.log(data);
	return (
		<Paper elevation={3}
			sx={{ width: "50vh", display: "flex", flexDirection: "column", p: 2, alignItems: "center", textAlign: "center" }}>
			<Typography component={"h2"} variant={"h5"} color={"red"}>Popular Topics</Typography>
			<Pie data={data} />
		</Paper>
	)
}

export default TopicsChart;