import CountryChart from "./components/charts/CountryChart";
import TopicsChart from "./components/charts/TopicsChart";
import AgeChart from "./components/charts/AgeChart";
import GenderChart from "./components/charts/GenderChart";
import UserTable from "./components/tables/UserTable";

import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import jsonSrv from "../../Services/jsonSrv";
import cryptoJs from "crypto-js";
import PostsTable from "./components/tables/PostsTable";

// function initDash(){
// 	const data = new FormData(event.target);
// 	jsonSrv.post("/users/profile.php", data)
// 	.then((response) => {
// 		console.log(response.data);
// 		if (response.data.status === "success") {
// 			let data = response.data.data;
// 			console.log(data);
// 			let token = cryptoJs.AES.encrypt(data.token,
// 				process.env.REACT_APP_CRYPTOJS_SECRET_KEY).toString();
// 			sessionStorage.setItem("token", token);
// 			console.log(sessionStorage.getItem("token"));
// 		}
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// }


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
						gap: "8vh",
						marginY: 3
					}}
				>			
					<CountryChart />
					<TopicsChart />
					<AgeChart />
					<GenderChart />
				</Box>
				<Box my={2} sx={{display: "flex", flexDirection: "column", rowGap: "10vh"}}>
					<UserTable />
					<PostsTable />
				</Box>
			</Container>
		</>
	)
}

export default Dashboard;