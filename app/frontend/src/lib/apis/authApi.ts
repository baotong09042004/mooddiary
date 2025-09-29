const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const loginUserApi = async (email: string, password: string) => {
	const response = await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	})
	return response
}

const registerUserApi = async (
	name: string,
	email: string,
	password: string,
) => {
	const response = await fetch(`${BASE_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ fullname: name, email, password }),
	})
	return response
}

const loginWithGoogleApi = async () => {
	const response = await fetch(`${BASE_URL}/auth/login/google`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response
}

const requestForgotPasswordApi = async (email: string) => {
	const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	})
	return response
}

const resetPasswordApi = async (
	token: string,
	password: string,
	confirmPassword: string,
) => {
	const response = await fetch(`${BASE_URL}/auth/reset-password`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ token, newPassword: password, confirmPassword }),
	})
	return response
}

const logoutApi = async () => {
	const response = await fetch(`${BASE_URL}/auth/logout`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response
}

const getUserInfoApi = async (token: string) => {
	const response = await fetch(`${BASE_URL}/users/my-info`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			'ngrok-skip-browser-warning': 'true',
		},
	})
	return response
}

export {
	loginUserApi,
	registerUserApi,
	loginWithGoogleApi,
	logoutApi,
	requestForgotPasswordApi,
	resetPasswordApi,
	getUserInfoApi,
}
