import {
	ResetPasswordFormError,
	ResetPasswordFormValue,
} from '@/app/(auth)/_types/authForm.type'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Lock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ResetPasswordForm({
	formData,
	errors,
	handleSubmit,
	handleInputChange,
	isLoading,
}: {
	formData: ResetPasswordFormValue
	errors: ResetPasswordFormError
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}) {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	return (
		<Card className="w-full max-w-md bg-white dark:bg-diary-surface-dark border-diary-border-light dark:border-diary-border-dark">
			<CardHeader className="text-center space-y-2">
				<div className="mx-auto w-16 h-16 bg-diary-primary rounded-2xl flex items-center justify-center mb-4">
					<Lock className="w-8 h-8 text-white" />
				</div>
				<CardTitle className="text-2xl font-semibold text-diary-text-primary-light dark:text-diary-text-primary-dark">
					Đặt mật khẩu mới
				</CardTitle>
				<CardDescription className="text-diary-text-secondary-light dark:text-diary-text-secondary-dark">
					Nhập mật khẩu mới cho tài khoản của bạn
				</CardDescription>
			</CardHeader>

			<form onSubmit={handleSubmit}>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Mật khẩu mới
						</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								id="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="••••••••"
								value={formData.password}
								name="password"
								tabIndex={1}
								onChange={handleInputChange}
								className="pl-10 pr-10 bg-diary-bg-light dark:bg-diary-bg-dark border-diary-border-light dark:border-diary-border-dark text-diary-text-primary-light dark:text-diary-text-primary-dark"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark hover:text-diary-text-primary-light dark:hover:text-diary-text-primary-dark"
							>
								{showPassword ? (
									<EyeOff className="w-4 h-4" />
								) : (
									<Eye className="w-4 h-4" />
								)}
							</button>
						</div>
						{errors.password && (
							<p className="text-sm text-red-600 dark:text-red-400">
								{errors.password}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="confirmPassword"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Xác nhận mật khẩu mới
						</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								id="confirmPassword"
								tabIndex={2}
								name="confirmPassword"
								type={showConfirmPassword ? 'text' : 'password'}
								placeholder="••••••••"
								value={formData.confirmPassword}
								onChange={handleInputChange}
								className="pl-10 pr-10 bg-diary-bg-light dark:bg-diary-bg-dark border-diary-border-light dark:border-diary-border-dark text-diary-text-primary-light dark:text-diary-text-primary-dark"
								required
							/>
							<button
								type="button"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark hover:text-diary-text-primary-light dark:hover:text-diary-text-primary-dark"
							>
								{showConfirmPassword ? (
									<EyeOff className="w-4 h-4" />
								) : (
									<Eye className="w-4 h-4" />
								)}
							</button>
						</div>
						{errors.confirmPassword && (
							<p className="text-sm text-red-500">
								{errors.confirmPassword}
							</p>
						)}
					</div>

					<div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 my-2">
						<p className="text-sm text-blue-700 dark:text-blue-300 ">
							💡 Mật khẩu phải có ít nhất 8 ký tự và bao gồm chữ
							cái, số
						</p>
					</div>
				</CardContent>

				<CardFooter className="flex flex-col space-y-4">
					<Button
						type="submit"
						className="w-full bg-diary-primary hover:bg-diary-primary/90 text-white cursor-pointer"
						disabled={isLoading}
					>
						{isLoading ? 'Đang cập nhật...' : 'Cập nhật mật khẩu'}
					</Button>

					<Link href="/login" className="w-full">
						<Button
							variant="ghost"
							className="w-full text-diary-text-secondary-light dark:text-diary-text-secondary-dark cursor-pointer"
						>
							Quay lại đăng nhập
						</Button>
					</Link>
				</CardFooter>
			</form>
		</Card>
	)
}
