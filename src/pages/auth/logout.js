import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { useLoginUser } from '../hooks/useLoginUser';

function Logout() {
	// const { logout } = useAuth();
	// const { setLoginUser } = useLoginUser();
	// const history = useHistory();

	const handleLogout = () => {
		// logout();
		// setLoginUser('guest');
		// history.push('/');
		console.log('logout');
	};

	return (
		<div className="logout">
			<h1>Logout</h1>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Logout;