import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Nopage from "./pages/Nopage";
import { pages, auths, tests } from './config/config';

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route path="*" element={<Nopage />} />
					{
						pages.map((page, index) => {
							return (
								<Route key={index} path={page.path} element={<page.element />} />
							)
						})
					}
					{
						auths.map((auth, index) => {
							return (
								<Route key={index} path={auth.path} element={<auth.element />} />
							)
						})
					}
					{
						tests.map((test, index) => {
							return (
								<Route key={index} path={test.path} element={<test.element />} />
							)
						})
					}
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default Main;