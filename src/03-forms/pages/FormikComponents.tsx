import '../styles/styles.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>

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
						<label htmlFor='name'>Name</label>
						<Field name='name' type='text' />
						<ErrorMessage name='name' component='span' />

						<label htmlFor='lastName'>Last name</label>
						<Field name='lastName' type='text' />
						<ErrorMessage name='lastName' component='span' />

						<label htmlFor='email'>Email</label>
						<Field name='email' type='text' />
						<ErrorMessage name='email' component='span' />

						<label htmlFor='password'>Password</label>
						<Field name='password' type='password' />
						<ErrorMessage name='password' component='span' />

						<label htmlFor='jobType'>Job Type</label>
						<Field name='jobType' as='select'>
							<option value=''>Select Your Role</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-junior'>IT Junior</option>
						</Field>
						<ErrorMessage name='jobType' component='span' />

						<label>
							<Field name='terms' type='checkbox' />
							Terms and Conditions
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
