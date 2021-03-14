import { FormInstance, RuleObject, RuleRender } from 'antd/es/form';

type IFormInstance = Omit<FormInstance, 'scrollToField' | '__INTERNAL__' | 'getFieldInstance'>;

export const passwordValidator: RuleRender = ({ getFieldValue }: IFormInstance): RuleObject => ({
	validator(_: RuleObject, value: any) {
		if (!value) {
			return Promise.resolve();
		}

		const name = `${getFieldValue('firstName')}|${getFieldValue('lastName')}`;
		const nameRegex = new RegExp(name, 'gi');

		if (nameRegex.test(value)) {
			return Promise.reject(new Error('Should not contain user’s first or last name!'));
		}

		return Promise.resolve();
	}
});
