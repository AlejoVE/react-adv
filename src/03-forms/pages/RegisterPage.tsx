
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'


export const RegisterPage = () => {

   const {name, email, password, confirmPassword, onSubmit, onChange, reset, isValidEmail} = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
   })

  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={onSubmit}>
            <input
                onChange={ (event)=>onChange(event)}
                value={name}
                className={`${name.trim().length <= 0 && 'has-error'}`}
                type="text"
                name='name'
                placeholder="Name"
            />
            {name.trim().length <= 0 && <span>Field is mandatory</span>}
            <input
                onChange={onChange}
                value={email}
                type="email"
                className={`${!isValidEmail(email) && 'has-error'}`}
                name='email'
                placeholder="Email"
            />
            {!isValidEmail(email) && <span>Invalid email</span>}
            <input
                onChange={onChange}
                value={password}
                className={`${password.trim.length < 0 && 'has-error'}`}
                type="password"
                name='password'
                placeholder="Password"
            />
            {password.trim().length <= 0 && <span>Field is mandatory</span>}
            {password.trim().length < 6 && password.trim().length > 1 && <span>Password should contain at least 6 characters</span>}

            <input
                onChange={onChange}
                value={confirmPassword}
                className={`${confirmPassword.trim.length < 0 && 'has-error'}`}
                type="password"
                name='confirmPassword'
                placeholder="Repeat password"
            />
            {confirmPassword.trim().length <= 0 && <span>Field is mandatory</span>}
            {confirmPassword.trim().length > 1 && confirmPassword !== password && <span>Passwords don't match</span>}

            <button type="submit">Create</button>
            <button onClick={reset} type-='button'>Reset</button>
        </form>
    </div>
  )
}
