'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
	const { user, isAuthenticated, logout, getUserInfo } = useUser()

	useEffect(() => {
		if (isAuthenticated && !user) {
			console.log('get user info')
			getUserInfo().then(() => console.log('get user info done'))
		}
	}, [getUserInfo, isAuthenticated, user])

	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-4">
			<h1 className="text-2xl font-bold">Trang chủ</h1>

			{isAuthenticated ? (
				<div className="p-4 border rounded-md">
					<h2 className="text-xl">Chào mừng trở lại!</h2>
					<p>
						<strong>Trạng thái:</strong> Đã đăng nhập
					</p>
					<p>
						<strong>Dữ liệu User từ hook:</strong>
					</p>
					{/* Hiển thị object bằng JSON.stringify */}
					<pre className="p-2 mt-2 text-sm bg-gray-100 rounded">
						{JSON.stringify(user, null, 2)}
					</pre>
					<Button
						onClick={logout}
						variant="destructive"
						className="mt-4"
					>
						Đăng xuất
					</Button>
				</div>
			) : (
				<div className="p-4 border rounded-md">
					<p>
						<strong>Trạng thái:</strong> Chưa đăng nhập
					</p>
					<p>Bạn cần đăng nhập để xem thông tin.</p>
					<Button asChild className="mt-4">
						<Link href="/login">Đi đến trang Đăng nhập</Link>
					</Button>
				</div>
			)}
		</div>
	)
}
