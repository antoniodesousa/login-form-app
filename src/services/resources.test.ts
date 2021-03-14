import axios from 'axios';
import { getUsers, postUser } from './resources';

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

describe('Resources Service', () => {
	it('should get users successfully', async () => {
		axiosGet.mockImplementationOnce(() => Promise.resolve({ data }));

		await expect(getUsers()).resolves.toEqual(data);
	});

	it('should fail to get users data', async () => {
		const errorMessage = new Error('Network Error');

		axiosGet.mockImplementationOnce(() => Promise.reject(errorMessage));

		await expect(getUsers()).resolves.toEqual(errorMessage);
	});

	it('should post user successfully', async () => {
		axiosPost.mockImplementationOnce(() => Promise.resolve({ status: 200 }));

		await expect(postUser(postData)).resolves.toEqual({ status: 200 });
	});

	it('should fail to post user data', async () => {
		const errorMessage = new Error('Network Error');

		axiosPost.mockImplementationOnce(() => Promise.reject(errorMessage));

		await expect(postUser(postData)).resolves.toEqual(errorMessage);
	});
});
