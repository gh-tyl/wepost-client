import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Feed from "./pages/articles/feed";
import PostArticle from "./pages/articles/post";
import Dashboard from "./pages/admin/dashboard";
import Nopage from "./pages/Nopage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Logout from "./pages/auth/logout";
import Profile from "./pages/common/profile";

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route path="/" element={<Home />} />
					<Route path="feed" element={<Feed />} />
					<Route path="post_article" element={<PostArticle />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="logout" element={<Logout />} />
					<Route path="profile" element={<Profile />} />
					<Route path="*" element={<Nopage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default Main;