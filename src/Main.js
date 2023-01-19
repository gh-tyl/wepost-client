import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import { pages, auths, others, tests } from "./config/config";
import { useState, useEffect } from "react";


function Main() {
	const [user, setUser] = useState("")
	const data = { loginUser: user, setUser: setUser }

	useEffect(() => {
		console.log("Main.js: useEffect")
		console.log(sessionStorage.getItem('loginUser'))
		if (sessionStorage.getItem('loginUser')) {
			setUser(sessionStorage.getItem('loginUser'))
		} else {
			setUser("guest")
		}
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Layout loginUser={user} setUser={setUser} />} > */}
				<Route path="/" element={<Layout data={data} />} >
					{
						pages.map((page, index) => {
							return (
								<Route key={index} path={page.path} element={<page.element data={data} />} />
							)
						})
					}
					{
						auths.map((auth, index) => {
							return (
								<Route key={index + pages.length} path={auth.path} element={<auth.element />} />
							)
						})
					}
					{
						others.map((other, index) => {
							return (
								<Route key={index} path={other.path} element={<other.element />} />
							)
						})
					}
					{
						tests.map((test, index) => {
							return (
								<Route key={index + pages.length + auths.length} path={test.path} element={<test.element />} />
							)
						})
					}
				</Route>
			</Routes>
		</BrowserRouter>
	)
};
export default Main;