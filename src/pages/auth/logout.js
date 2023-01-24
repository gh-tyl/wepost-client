import React from "react";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jsonSrv from "../../Services/jsonSrv";
import { dec } from "../../lib/crypt";
// import { useAuth } from "../hooks/useAuth";
// import { useLoginUser } from "../hooks/useLoginUser";

function Logout({ data }) {
	const navigate = useNavigate();
	let loginUser = data.loginUser;
	const setUser = data.setUser;

	if (loginUser != "admin" || loginUser != "user") {
		navigate("/login")
	}
	if (loginUser == "admin" || loginUser == "user") {
		let token = dec(sessionStorage.getItem("token"));
		let data = new FormData();
		data.append("token", token);
		jsonSrv.post("/auth/logout.php", data)
			.then((response) => {
				console.log(response.data);
				if (response.data.status === "success") {
					setUser("guest");
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("loginUser");
				}
			})
			.catch((error) => {
				console.log(error);
			});
		navigate("/login")
	}
	// const { logout } = useAuth();
	// const { setLoginUser } = useLoginUser();
	// const history = useHistory();

	return (
		<div className="logout">
			<h1>Logout</h1>
		</div>
	);
}

export default Logout;