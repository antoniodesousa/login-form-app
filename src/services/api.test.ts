import axios from 'axios';
import { get, post } from './api';

const axiosGet = jest.spyOn(axios, 'get');
const axiosPost = jest.spyOn(axios, 'post');

const data = [{
	firstName: 'John',
	lastName: 'Doe',
	email: 'johndoe@gmail.com'
}];

const postData = {
	firstName: 'John',
	lastName: 'Doe',
	email: 'johndoe@gmail.com',
	password: '******'
};

describe('API Service', () => {
	it('should get successfully data', async () => {
		axiosGet.mockImplementationOnce(() => Promise.resolve(data));

		await expect(get('users')).resolves.toEqual(data);
	});

	it('should get erroneously data', async () => {
		const errorMessage = new Error('Network Error');

		axiosGet.mockImplementationOnce(() => Promise.reject(errorMessage));

		await expect(get('users')).resolves.toEqual({ data: errorMessage });
	});

	it('should post successfully data', async () => {
		axiosPost.mockImplementationOnce(() => Promise.resolve({ status: 200 }));

		await expect(post('users', postData)).resolves.toEqual({ status: 200 });
	});

	it('should fetch erroneously data', async () => {
		const errorMessage = new Error('Network Error');

		axiosPost.mockImplementationOnce(() => Promise.reject(errorMessage));

		await expect(post('users', postData)).resolves.toEqual(errorMessage);
	});
});
