import Axios, { AxiosRequestConfig } from 'axios';

const API = 'https://demo-api.now.sh/';
const axios = Axios.create({ baseURL: API });

export const get = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
	try {
		return await axios.get(url, config);
	}
	catch (error) {
		return { data: error };
	}
};

export const post = async (url: string, data?: any, config?: AxiosRequestConfig): Promise<any> => {
	try {
		return await axios.post(url, data, config);
	}
	catch (error) {
		return error;
	}
};
