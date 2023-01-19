import { Outlet, Link } from "react-router-dom"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { blueGrey } from "@mui/material/colors";
import { pages, auths } from "../config/config";
import { useState, useEffect } from "react";

// let loginUser = sessionStorage.getItem("userRole");
// if (!loginUser) {
// 	loginUser = "guest"
// }

// console.log(loginUser)
// You can change the login user here.
// let loginUser = "admin"
// let loginUser = "user"
// let loginUser = "guest"

// function Layout({ loginUser, setUser }) {
function Layout({ data }) {
	let loginUser = data.loginUser;
	const setUser = data.setUser;
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	// const [loginUser, setLoginUser] = useState("");

	useEffect(() => {
		// let loginUser = sessionStorage.getItem("loginUser");
		// if (!loginUser) {
		// loginUser = "guest";
		// }
		// setLoginUser(loginUser);
		// setUser()
		console.log("before: loginUser");
		console.log(loginUser);
		if (sessionStorage.getItem("loginUser")) {
			setUser(sessionStorage.getItem("loginUser"))
		}
		console.log("after: loginUser");
		console.log(loginUser);
	}, []);
	// console.log(loginUser);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<AppBar
				position="static"
				sx={{
					backgroundColor: blueGrey[800],
					color: blueGrey[50],
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									page.loginUsers.includes(loginUser) && (
										<MenuItem key={page.name} onClick={handleCloseNavMenu}>
											<Link
												to={page.path}
												style={{
													textDecoration: "none",
													color: blueGrey[800],
												}}
											>
												<Typography textAlign="center">{page.name}</Typography>
											</Link>
										</MenuItem>
									)
								))}
							</Menu>
						</Box>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								page.loginUsers.includes(loginUser) && (
									<Link
										key={page.name}
										to={page.path}
										style={{
											textDecoration: "none",
											color: blueGrey[50],
										}}
									>
										<Button color="inherit">{page.name}</Button>
									</Link>
								)
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt={loginUser} src="/static/images/avatar/2.jpg" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{
									mt: "45px",
								}}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{auths.map((auth) => (
									auth.loginUsers.includes(loginUser) && (
										<MenuItem
											key={auth.name}
											onClick={handleCloseNavMenu}
										>
											<Link
												to={auth.path}
												style={{
													textDecoration: "none",
													color: blueGrey[800],
												}}
											>
												<Typography textAlign="center">{auth.name}</Typography>
											</Link>
										</MenuItem>
									)
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Outlet />
		</>
	)
}

export default Layout;