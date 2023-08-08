import { ChangeEvent, FormEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {
    const [formValues, setFormValues] = useState<T>(initialState)

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formValues)
    }

    const reset = () => {
        setFormValues({ ...initialState })
    }

    const isValidEmail = (email: string) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    return {
        ...formValues,
        onSubmit,
        onChange,
        reset,
        isValidEmail
    }
}
