'use client'

import RegisterForm from '@/app/(auth)/_components/RegisterForm'
import {
	RegisterFormError,
	RegisterFormValue,
} from '@/app/(auth)/_types/authForm.type'
import useForm from '@/hooks/useForm'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type RegisterForm = {
	name: string
	email: string
	password: string
	confirmPassword: string
	agreeToTerms: boolean
}

type FormError = {
	name?: string
	email?: string
	password?: string
	confirmPassword?: string
	agreeToTerms?: string
}

export default function RegisterPage() {
	const { register } = useUser()
	const router = useRouter()

	const [fromError, setFormError] = useState('')

	const validateRegisterForm = (values: RegisterForm) => {
		const errors: FormError = {}
		if (!values.name) {
			errors.name = 'Vui lòng nhập tên của bạn.'
		}
		if (!values.email) {
			errors.email = 'Vui lòng nhập email của bạn.'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Email không hợp lệ. Vui lòng kiểm tra lại.'
		}
		if (!values.password) {
			errors.password = 'Vui lòng nhập mật khẩu của bạn.'
		} else if (values.password.length < 6) {
			errors.password =
				'Mật khẩu phải có ít nhất 6 ký tự. Vui lòng kiểm tra lại.'
		}
		if (!values.confirmPassword) {
			errors.confirmPassword = 'Vui lòng xác nhận mật khẩu của bạn.'
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword =
				'Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại.'
		}
		if (!values.agreeToTerms) {
			errors.agreeToTerms = 'Vui lòng đồng ý với điều khoản sử dụng.'
		}
		return errors
	}

	const registerUser = async (values: RegisterFormValue) => {
		const result = await register(
			values.name,
			values.email,
			values.password,
		)

		if (result.status >= 400) {
			setFormError(result.message)
			return
		}

		router.push('/login')
	}

	const {
		values,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	}: {
		values: RegisterFormValue
		errors: RegisterFormError
		isLoading: boolean
		handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
		handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	} = useForm(
		{
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			agreeToTerms: false,
		},
		validateRegisterForm,
		registerUser,
	)

	return (
		<div className="min-h-screen bg-diary-bg-light dark:bg-diary-bg-dark flex items-center justify-center p-4">
			<RegisterForm
				values={values}
				errors={errors}
				isLoading={isLoading}
				formError={fromError}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}
