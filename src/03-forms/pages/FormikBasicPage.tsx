import '../styles/styles.css';
import { FormikErrors, useFormik } from 'formik';

interface FormValues {
	name: string;
	lastName: string;
	email: string;
	password: string;
}

export const FormikBasicPage = () => {
	const validate = ({ email, lastName, name, password }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};

		if (!name) {
			errors.name = 'Required';
		} else if (name.length >= 15) {
			errors.name = 'Name should contain 15 characters or less';
		}

		if (!lastName) {
			errors.lastName = 'Required';
		} else if (lastName.length >= 15) {
			errors.lastName = 'lastName should contain 15 characters or less';
		}
		if (!password) {
			errors.password = 'Required';
		} else if (password.length >= 8) {
			errors.password = 'Password should contain 8 characters or less';
		}

		if (!email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			errors.email = 'Invalid email address';
		}

		return errors;
	};

	const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validate,
	});
	return (
		<div>
			<h1>Formik Basic Page</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor='name'>Name</label>
				<input type='text' onBlur={handleBlur} onChange={handleChange} value={values.name} name='name' />
				{touched.name && errors.name && <span>{errors.name}</span>}

				<label htmlFor='lastName'>Last name</label>
				<input type='text' onBlur={handleBlur} onChange={handleChange} value={values.lastName} name='lastName' />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input type='text' onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.password}
					name='password'
				/>
				{touched.password && errors.password && <span>{errors.password}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
