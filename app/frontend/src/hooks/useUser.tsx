'use client'

import {
	getUserInfoApi,
	loginUserApi,
	logoutApi,
	registerUserApi,
} from '@/lib/apis/authApi'
import {
	isAuthenticatedAtom,
	logoutAtom,
	tokenAtom,
	userAtom,
} from '@/store/userAtom'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

export function useUser() {
	const [user, setUser] = useAtom(userAtom)
	const [token, setToken] = useAtom(tokenAtom)
	const isAuthenticated = useAtomValue(isAuthenticatedAtom)
	const performLogout = useSetAtom(logoutAtom)

	const login = async (email: string, password: string) => {
		const response = await loginUserApi(email, password)

		const body = await response.json()
		if (response.ok) {
			const { user: userFromApi, token } = body

			setUser(userFromApi)
			setToken(token)
		}

		return body
	}

	const register = async (name: string, email: string, password: string) => {
		const response = await registerUserApi(name, email, password)

		const body = await response.json()

		if (response.ok) {
			setUser(body.user)
			setToken(body.token)
		}

		return body
	}

	const logout = async () => {
		performLogout()

		await logoutApi()
	}

	const getUserInfo = async () => {
		if (!token) return
		const response = await getUserInfoApi(token)
		if (response.ok) {
			const body = await response.json()

			setUser(body)
		}
	}

	return {
		user,
		isAuthenticated,
		login,
		register,
		logout,
		getUserInfo,
	}
}
