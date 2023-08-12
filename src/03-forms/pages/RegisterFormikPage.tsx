import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';
import { MyCheckbox, MySelect } from '../components';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: '',
					lastName: '',
					email: '',
					password: '',
					terms: false,
					jobType: '',
					confirmPassword: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.required('Required')
						.min(2, 'Name should contain at least 2 characters')
						.max(15, 'Name should contain 15 characters at max'),
					lastName: Yup.string()
						.required('Required')
						.min(2, 'Name should contain at least 2 characters')
						.max(15, 'Name should contain 15 characters at max'),
					email: Yup.string().required('Required').email('Email format invalid'),
					password: Yup.string().required('Required').min(6, 'Password should contain at least 6 characters'),
					confirmPassword: Yup.string()
						.required('Required')
						.oneOf([Yup.ref('password')], 'Passwords must match'),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label='Name' type='text' name='name' />
						<MyTextInput label='Last Name' type='text' name='lastName' />
						<MyTextInput label='Email' name='email' type='email' />
						<MyTextInput label='Password' name='password' type='password' />
						<MyTextInput label='Repeat Password' name='confirmPassword' type='password' />
						<MySelect label='Job type' name='jobType'>
							<option value=''>Select Job</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-junior'>IT Jr.</option>
							<option value='it-senior'>IT Senior</option>
						</MySelect>
						<MyCheckbox label='Terms and Conditions' name='terms' />
						<button onClick={handleReset} type='reset'>
							Reset
						</button>
						<button type='submit'>Create</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
