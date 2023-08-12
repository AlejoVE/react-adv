import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {};
const validations: { [x: string]: any } = {};

for (const input of formJson) {
	// TO create the initial Values Schema
	initialValues[input.name] = input.value;

	// To create the validations schema
	let schema = Yup.string();

	if (!input.validations) continue;

	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required('Required');
		}

		if (rule.type === 'onlyLetters') {
			schema = schema.matches(/^[a-zA-Z]+$/, 'Only letters are allowed');
		}

		if (rule.type === 'email') {
			schema = schema.email('Email format invalid');
		}

		if (rule.type === 'min') {
			schema = schema.min(
				(rule as any).value || 2,
				`${input.name} should contain at least ${(rule as any).value || 2} characters`
			);
		}
	}

	validations[input.name] = schema;
}

const validationsSchema = Yup.object({ ...validations });

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationsSchema}
			>
				{({ handleReset }) => (
					<div>
						<Form>
							{formJson.map(({ name, placeholder, label, type, options }) => {
								if (type === 'text' || type === 'email' || type === 'password') {
									return (
										<MyTextInput key={name} type={type} name={name} placeholder={placeholder} label={label} />
									);
								} else if (type === 'select') {
									return (
										<MySelect key={name} name={name} label={label}>
											<option key='generic-option' value='' disabled>
												Select a game
											</option>
											{options?.map(({ id, label }) => (
												<option key={id} value={id}>
													{label}
												</option>
											))}
										</MySelect>
									);
								} else {
									return <h1 key='not-supported'>{`${type} not supported`}</h1>;
								}
							})}
							<button type='button' onClick={handleReset}>
								Reset
							</button>
							<button type='submit'>Create</button>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	);
};
