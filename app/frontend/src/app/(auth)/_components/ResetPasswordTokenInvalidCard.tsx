import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ResetPasswordTokenInvalidCard() {
	return (
		<Card className="w-full max-w-md bg-white dark:bg-diary-surface-dark border-diary-border-light dark:border-diary-border-dark">
			<CardHeader className="text-center space-y-4">
				<div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
					<AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
				</div>
				<CardTitle className="text-2xl font-semibold text-diary-text-primary-light dark:text-diary-text-primary-dark">
					Liên kết không hợp lệ
				</CardTitle>
				<CardDescription className="text-diary-text-secondary-light dark:text-diary-text-secondary-dark">
					Liên kết đặt lại mật khẩu đã hết hạn hoặc không hợp lệ
				</CardDescription>
			</CardHeader>

			<CardFooter className="flex flex-col space-y-2">
				<Link href="/forgot-password" className="w-full">
					<Button className="w-full bg-diary-primary hover:bg-diary-primary/90 text-white">
						Yêu cầu liên kết mới
					</Button>
				</Link>
				<Link href="/login" className="w-full">
					<Button
						variant="ghost"
						className="w-full text-diary-text-secondary-light dark:text-diary-text-secondary-dark"
					>
						Quay lại đăng nhập
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
