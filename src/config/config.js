// let loginUser = "guest"
export const pages = [
	{
		name: 'Home',
		path: '/',
		loginUsers: ['admin', 'user', 'guest'],
	},
	{
		name: 'Feed',
		path: 'feed',
		loginUsers: ['admin', 'user', 'guest'],
	},
	{
		name: 'Post Article',
		path: 'post_article',
		loginUsers: ['user'],
	},
	{
		name: 'Dashboard',
		path: 'dashboard',
		loginUsers: ['admin'],
	},
	{
		name: 'Manage Users',
		path: 'manage_users',
		loginUsers: ['admin'],
	},
	{
		name: 'Manage Posts',
		path: 'manage_posts',
		loginUsers: ['admin'],
	}
];
export const auths = [
	{
		name: 'Profile',
		path: 'profile',
		loginUsers: ['admin', 'user'],
	},
	{
		name: 'Login',
		path: 'login',
		loginUsers: ['guest'],
	},
	{
		name: 'Register',
		path: 'register',
		loginUsers: ['guest'],
	},
	{
		name: 'Logout',
		path: 'logout',
		loginUsers: ['admin', 'user'],
	}
];