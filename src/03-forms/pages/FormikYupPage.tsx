import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {
	const { handleSubmit, errors, touched, getFieldProps } = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			name: Yup.string().max(15, 'Name should contains 15 character as max').required('Required'),
			lastName: Yup.string().max(15, 'Last name should contains 15 character as max').required('Required'),
			email: Yup.string().required('Required').email('Invalid email format'),
			password: Yup.string()
				.required('Required')
				.max(10, 'Password should contain 19 characters as max')
				.min(8, 'Password should contain at least 8 characters'),
		}),
	});
	return (
		<div>
			<h1>Formik Yup Page</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor='name'>Name</label>
				<input type='text' {...getFieldProps('name')} />
				{touched.name && errors.name && <span>{errors.name}</span>}

				<label htmlFor='lastName'>Last name</label>
				<input type='text' {...getFieldProps('lastName')} />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input type='text' {...getFieldProps('email')} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<label htmlFor='password'>Password</label>
				<input type='password' {...getFieldProps('password')} />
				{touched.password && errors.password && <span>{errors.password}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
