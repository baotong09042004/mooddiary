type LoginFormValue = {
	email: string
	password: string
}

type LoginFormError = {
	email?: string
	password?: string
}

type RegisterFormValue = {
	name: string
	email: string
	password: string
	confirmPassword: string
	agreeToTerms: boolean
}

type RegisterFormError = {
	name?: string
	email?: string
	password?: string
	confirmPassword?: string
	agreeToTerms?: string
}

type ResetPasswordFormValue = {
	password: string
	confirmPassword: string
}

type ResetPasswordFormError = {
	password?: string
	confirmPassword?: string
}

export type {
	LoginFormValue,
	LoginFormError,
	RegisterFormValue,
	RegisterFormError,
	ResetPasswordFormValue,
	ResetPasswordFormError,
}
