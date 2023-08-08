import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{
					name: '',
					lastName: '',
					email: '',
					password: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string().max(15, 'Name should contains 15 character as max').required('Required'),
					lastName: Yup.string().max(15, 'Last name should contains 15 character as max').required('Required'),
					email: Yup.string().required('Required').email('Invalid email format'),
					password: Yup.string()
						.required('Required')
						.max(10, 'Password should contain 10 characters as max')
						.min(8, 'Password should contain at least 8 characters'),
					terms: Yup.boolean().isTrue('You must accept Terms and Conditions'),
					jobType: Yup.string()
						.notOneOf(['it-junior'], 'Not valid option, please select another role')
						.required('Required'),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput type='text' label='name' placeholder='First Name' name='name' />
						<MyTextInput type='text' label='lastName' placeholder='Last Name' name='lastName' />
						<MyTextInput type='email' label='email' placeholder='example@example.com' name='email' />
						<MyTextInput type='password' label='password' name='password' />

						<MySelect name='jobType' label='Job Type'>
							<option value=''>Select Your Role</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-junior'>IT Junior</option>
						</MySelect>

						<MyCheckbox label='Terms & Conditions' name='terms' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
