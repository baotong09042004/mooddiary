import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ArrowLeft, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ForgotPasswordEmailForm({
	email,
	setEmail,
	isLoading,
	handleSubmit,
}: {
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	isLoading: boolean
	handleSubmit: (e: React.FormEvent<Element>) => Promise<void>
}) {
	return (
		<Card className="w-full max-w-md bg-white dark:bg-diary-surface-dark border-diary-border-light dark:border-diary-border-dark">
			<CardHeader className="text-center space-y-2">
				<div className="mx-auto w-16 h-16 bg-diary-primary rounded-2xl flex items-center justify-center mb-4">
					<Mail className="w-8 h-8 text-white" />
				</div>
				<CardTitle className="text-2xl font-semibold text-diary-text-primary-light dark:text-diary-text-primary-dark">
					Quên mật khẩu?
				</CardTitle>
				<CardDescription className="text-diary-text-secondary-light dark:text-diary-text-secondary-dark">
					Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
				</CardDescription>
			</CardHeader>

			<form onSubmit={handleSubmit}>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label
							htmlFor="email"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Email
						</Label>
						<div className="relative">
							<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								id="email"
								type="email"
								placeholder="your@email.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="pl-10 bg-diary-bg-light dark:bg-diary-bg-dark border-diary-border-light dark:border-diary-border-dark text-diary-text-primary-light dark:text-diary-text-primary-dark"
								required
							/>
						</div>
					</div>

					<div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
						<p className="text-sm text-blue-700 dark:text-blue-300">
							💡 Chúng tôi sẽ gửi một liên kết đặt lại mật khẩu
							đến email này
						</p>
					</div>
				</CardContent>

				<CardFooter className="flex flex-col space-y-4 mt-4">
					<Button
						type="submit"
						className="w-full bg-diary-primary hover:bg-diary-primary/90 text-white"
						disabled={isLoading}
					>
						{isLoading ? 'Đang gửi...' : 'Gửi hướng dẫn'}
					</Button>

					<Link href="/login" className="w-full">
						<Button
							variant="ghost"
							className="w-full text-diary-text-secondary-light dark:text-diary-text-secondary-dark flex gap-4 items-center"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							<span>Quay lại đăng nhập</span>
						</Button>
					</Link>
				</CardFooter>
			</form>
		</Card>
	)
}
