import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { get, post } from './api';
import { IUser, IUserData } from './interfaces';

export const getUsers = async (config?: AxiosRequestConfig): Promise<IUser[]> => {
	const response = await get('users', config);
	return response.data;
};

export const postUser = async (data: IUserData, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
	return await post('users', data, config);
};
