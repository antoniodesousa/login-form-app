import React, { useState } from 'react';
import { getUsers, postUser } from '../services/resources';
import { IUser } from '../services/interfaces';
import { LoginForm } from './LoginForm';
import { message, Alert } from 'antd';

function App() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState<IUser[]>([]);

	const success = (text: string) => {
		void message.success(text);
	};

	const error = (text: string) => {
		void message.error(text);
	};

	const onSubmit = async (values: any) => {
		setUsers([]);
		setLoading(true);
		const response = await postUser(values);

		if ([200, 204].includes(response.status)) {
			success('POST was successful!');

			setTimeout(async () => {
				const users = await getUsers();

				if (Array.isArray(users)) {
					success('GET was successful!');
					setUsers(users);
					setLoading(false);
				} else {
					error(`${response}`);
					setLoading(false);
				}
			}, 4000);
		} else {
			error(`${response}`);
			setLoading(false);
		}
	};

	return (
		<div className={'main'}>
			<LoginForm onSubmit={onSubmit} loading={loading}/>
			{users.length > 0 && <Alert message={`GET: ${JSON.stringify(users)}`} type="success"/>}
		</div>
	);
}

export default App;
