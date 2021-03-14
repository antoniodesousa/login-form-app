import React from 'react';
import { getUsers, postUser } from '../services/resources';
import { LoginForm } from './LoginForm';

function App() {
	const onSubmit = async (values: any) => {
		const response = await postUser(values);

		if (response.status === 200) {
			setTimeout(async () => {
				const users = await getUsers();
				console.log('getUsers:', users);
			}, 4000);
		}
	};

	return (
		<div className={'main'}>
			<LoginForm onSubmit={onSubmit}/>
		</div>
	);
}

export default App;
