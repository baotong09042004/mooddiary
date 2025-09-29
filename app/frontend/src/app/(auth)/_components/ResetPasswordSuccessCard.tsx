import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ResetPasswordSuccessCard() {
	return (
		<Card className="w-full max-w-md bg-white dark:bg-diary-surface-dark border-diary-border-light dark:border-diary-border-dark">
			<CardHeader className="text-center space-y-4">
				<div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
					<CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
				</div>
				<CardTitle className="text-2xl font-semibold text-diary-text-primary-light dark:text-diary-text-primary-dark">
					Đặt lại mật khẩu thành công
				</CardTitle>
				<CardDescription className="text-diary-text-secondary-light dark:text-diary-text-secondary-dark">
					Mật khẩu của bạn đã được cập nhật. Bạn có thể đăng nhập với
					mật khẩu mới
				</CardDescription>
			</CardHeader>

			<CardFooter>
				<Link href="/login" className="w-full">
					<Button className="w-full bg-diary-primary hover:bg-diary-primary/90 text-white">
						Đăng nhập ngay
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
