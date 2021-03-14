import { passwordValidator } from './password-validator';

const formData: any = {
	firstName: 'John',
	lastName: 'Doe'
};

const getFieldValue = (name: any): any => {
	return formData[name];
};

describe('Password Validator', () => {
	it('should validate correctly all cases', async () => {
		const password = passwordValidator({getFieldValue} as any) as any;
		await expect(password.validator({}, null)).resolves.toBeFalsy();
		await expect(password.validator({}, '')).resolves.toBeFalsy();
		await expect(password.validator({}, 'users')).resolves.toBeFalsy();
		await expect(password.validator({}, 'usersJohn')).rejects.toThrowError();
		await expect(password.validator({}, 'usersDoe')).rejects.toThrowError();
	});
});
