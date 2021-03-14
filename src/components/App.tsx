import React, { useState } from 'react';
import { getUsers, postUser } from '../services/resources';
import { LoginForm } from './LoginForm';

function App() {
	const [loading, setLoading] = useState(false);

	const onSubmit = async (values: any) => {
		setLoading(true);
		const response = await postUser(values);

		if (response.status === 200) {
			setTimeout(async () => {
				const users = await getUsers();
				setLoading(false);
				console.log('getUsers:', users);
			}, 4000);
		}
	};

	return (
		<div className={'main'}>
			<LoginForm onSubmit={onSubmit} loading={loading}/>
		</div>
	);
}

export default App;
