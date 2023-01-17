import Home from "../pages/Home"
import Feed from "../pages/articles/feed"
import PostArticle from "../pages/articles/post"
import Dashboard from "../pages/admin/dashboard"
import Login from "../pages/auth/login"
import Register from "../pages/auth/register"
import Logout from "../pages/auth/logout"
import Profile from "../pages/common/profile"
import TestLogin from "../pages/test/TestLogin"
// import Nopage from "../pages/Nopage"

export const pages = [
	{
		name: 'Home',
		path: '/',
		loginUsers: ['admin', 'user', 'guest'],
		element: Home,
	},
	{
		name: 'Feed',
		path: 'feed',
		loginUsers: ['admin', 'user', 'guest'],
		element: Feed,
	},
	{
		name: 'Post Article',
		path: 'post_article',
		loginUsers: ['user'],
		element: PostArticle,
	},
	{
		name: 'Dashboard',
		path: 'dashboard',
		loginUsers: ['admin'],
		element: Dashboard,
	},
];
export const auths = [
	{
		name: 'Profile',
		path: 'profile',
		loginUsers: ['admin', 'user'],
		element: Profile,
	},
	{
		name: 'Login',
		path: 'login',
		loginUsers: ['guest'],
		element: Login,
	},
	{
		name: 'Register',
		path: 'register',
		loginUsers: ['guest'],
		element: Register,
	},
	{
		name: 'Logout',
		path: 'logout',
		loginUsers: ['admin', 'user'],
		element: Logout,
	}
];
export const tests = [
	{
		name: 'Test Login',
		path: 'test_login',
		loginUsers: ['guest'],
		element: TestLogin,
	}
];