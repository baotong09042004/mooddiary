'use client'

import LoginForm from '@/app/(auth)/_components/LoginForm'
import type {
	LoginFormError,
	LoginFormValue,
} from '@/app/(auth)/_types/authForm.type'
import useForm from '@/hooks/useForm'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginPage() {
	const router = useRouter()
	const { login } = useUser()

	const [formError, setFormError] = React.useState('')

	const validateLoginForm = (values: LoginFormValue) => {
		const errors: LoginFormError = {}
		if (!values.email) {
			errors.email = 'Vui lòng nhập email của bạn.'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Email không đúng định dạng. Vui lòng kiểm tra lại.'
		}
		if (!values.password) {
			errors.password = 'Vui lòng nhập mật khẩu.'
		} else if (values.password.length < 6) {
			errors.password =
				'Mật khẩu phải có ít nhất 6 ký tự. Vui lòng kiểm tra lại.'
		}
		return errors
	}

	const loginUser = async (values: LoginFormValue) => {
		const result = await login(values.email, values.password)

		console.log('🚀 ~ result:', result)

		if (result.status >= 400) {
			setFormError(result.message)
			return
		}

		// FIXME: Chuyển đến trang dashboard (theo đặc tả)
		router.push('/')
	}

	const {
		values,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	}: {
		values: LoginFormValue
		errors: LoginFormError
		isLoading: boolean
		handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
		handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	} = useForm(
		{
			email: '',
			password: '',
		},
		validateLoginForm,
		loginUser,
	)

	return (
		<div className="min-h-screen bg-diary-bg-light dark:bg-diary-bg-dark flex items-center justify-center p-4">
			<LoginForm
				values={values}
				errors={errors}
				isLoading={isLoading}
				formError={formError}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}
