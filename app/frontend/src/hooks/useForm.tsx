import { useState, ChangeEvent, FormEvent } from 'react'

interface FormErrors {
	[key: string]: string | undefined
}

interface UseFormReturn<T> {
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (event: FormEvent<HTMLFormElement>) => void
	values: T
	errors: FormErrors
	isLoading: boolean
}

/**
 * @param {T} initialState initial state
 * @param {(values: T) => FormErrors} validate validation function
 * @param {(values: T) => void} callback callback function
 * @returns {UseFormReturn<T>} object with handleChange, handleSubmit, values, errors, isLoading
 */
const useForm = <T extends object>(
	initialState: T,
	validate: (values: T) => FormErrors,
	callback: (values: T) => void,
): UseFormReturn<T> => {
	const [values, setValues] = useState<T>(initialState)
	const [errors, setErrors] = useState<FormErrors>({})
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = event.target
		if (type === 'checkbox') {
			setValues({
				...values,
				[name]: checked,
			})
		} else {
			setValues({
				...values,
				[name]: value,
			})
		}
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (event) event.preventDefault()

		const validationErrors = validate(values)
		setErrors(validationErrors)

		if (Object.keys(validationErrors).length === 0) {
			setIsLoading(true)
			callback(values)
			setIsLoading(false)
		}
	}

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
		isLoading,
	}
}

export default useForm
