import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { IUserData } from '../services/interfaces';
import { passwordValidator } from '../validators/password-validator';

interface ILoginForm {
	onSubmit: (values: IUserData) => void;
}

function LoginForm(props: ILoginForm) {
	const { onSubmit } = props;
	const [form] = Form.useForm();
	const [disabled, setDisabled] = useState(true);

	const onFieldsChange = () => {
		const fieldsError = form.getFieldsError();
		const isFieldsTouched = form.isFieldsTouched(true);

		setDisabled(() => {
			return fieldsError.some((field) => field.errors.length > 0) || !isFieldsTouched;
		});
	}

	return (
		<Form
			name="login"
			form={form}
			className={'login-form'}
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 18 }}
			initialValues={{ remember: false }}
			onFinish={onSubmit}
			onFieldsChange={onFieldsChange}
		>
			<Form.Item
				label="First name"
				name="firstName"
				rules={[
					{
						required: true,
						message: 'Please input your first name!'
					}
				]}
			>
				<Input/>
			</Form.Item>

			<Form.Item
				label="Last name"
				name="lastName"
				rules={[
					{
						required: true,
						message: 'Please input your last name!'
					}
				]}
			>
				<Input/>
			</Form.Item>

			<Form.Item
				label="Email"
				name="email"
				rules={[
					{
						type: 'email',
						message: 'The input is not valid E-mail!'
					},
					{
						required: true,
						message: 'Please input your E-mail!'
					}
				]}
			>
				<Input/>
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!'
					},
					{
						pattern: /^\S*$/,
						message: 'Should not contain whitespaces!'
					},
					{
						pattern: /^(?=.*?[a-z])(?=.*?[A-Z]).*$/g,
						message: 'Should contain lower and uppercase letters!'
					},
					{
						min: 8,
						message: 'Should be a minimum of 8 characters!'
					},
					passwordValidator
				]}
			>
				<Input.Password/>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 23 }} style={{textAlign: 'right'}}>
				<Button type="primary"
				        htmlType="submit"
				        disabled={disabled}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export { LoginForm };
