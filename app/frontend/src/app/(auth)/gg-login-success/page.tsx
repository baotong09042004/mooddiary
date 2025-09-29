'use client'

import { tokenAtom } from '@/store/userAtom'
import { useSetAtom } from 'jotai'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

function LoginSuccess() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const token = searchParams.get('token')
	const setToken = useSetAtom(tokenAtom)

	useEffect(() => {
		if (token) {
			localStorage.setItem('user_token', token)
			setToken(token)
		}

		router.push('/')
	}, [router, setToken, token])

	return <div>Đăng nhập thành công, đang chuyển trang ...</div>
}

export default function GoogleLoginSuccessPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LoginSuccess />
		</Suspense>
	)
}
