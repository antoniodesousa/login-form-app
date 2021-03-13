export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
}

export interface IUserData extends IUser {
	password: string;
}
