import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Nopage from "./pages/Nopage";
import { pages, auths, others, tests } from './config/config';

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
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