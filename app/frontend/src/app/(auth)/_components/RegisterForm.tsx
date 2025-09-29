import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import GoogleButton from 'react-google-button'
import { useState } from 'react'
import {
	RegisterFormError,
	RegisterFormValue,
} from '@/app/(auth)/_types/authForm.type'

export default function RegisterForm({
	values,
	errors,
	isLoading,
	formError,
	handleChange,
	handleSubmit,
}: {
	values: RegisterFormValue
	errors: RegisterFormError
	isLoading: boolean
	formError: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}) {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	return (
		<Card className="w-full max-w-md bg-white dark:bg-diary-surface-dark border-diary-border-light dark:border-diary-border-dark">
			<CardHeader className="text-center space-y-2">
				<div className="mx-auto w-16 h-16 bg-diary-primary rounded-2xl flex items-center justify-center mb-4">
					<span className="text-white font-bold text-xl">📔</span>
				</div>
				<CardTitle className="text-2xl font-semibold text-diary-text-primary-light dark:text-diary-text-primary-dark">
					Tạo tài khoản
				</CardTitle>
				<CardDescription className="text-diary-text-secondary-light dark:text-diary-text-secondary-dark">
					Bắt đầu hành trình ghi nhật ký của bạn
				</CardDescription>
			</CardHeader>

			<form onSubmit={handleSubmit}>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label
							htmlFor="name"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Họ và tên
						</Label>
						<div className="relative">
							<User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								name="name"
								type="text"
								tabIndex={1}
								placeholder="Nguyễn Văn A"
								value={values.name}
								onChange={handleChange}
								className="pl-10 bg-diary-bg-light dark:bg-diary-bg-dark border-diary-border-light dark:border-diary-border-dark text-diary-text-primary-light dark:text-diary-text-primary-dark"
								required
							/>
						</div>

						{errors.name && (
							<p className="text-red-600 text-sm">
								{errors.name}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="text"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Email
						</Label>
						<div className="relative">
							<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								id="email"
								name="email"
								tabIndex={2}
								placeholder="your@email.com"
								value={values.email}
								onChange={handleChange}
								className="pl-10 bg-diary-bg-light dark:bg-diary-bg-dark border-diary-border-light dark:border-diary-border-dark text-diary-text-primary-light dark:text-diary-text-primary-dark"
								required
							/>
						</div>

						{errors.email && (
							<p className="text-red-600 text-sm">
								{errors.email}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Mật khẩu
						</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								id="password"
								name="password"
								tabIndex={3}
								type={showPassword ? 'text' : 'password'}
								placeholder="••••••••"
								value={values.password}
								onChange={handleChange}
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
							<p className="text-red-600 text-sm">
								{errors.password}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="confirmPassword"
							className="text-diary-text-primary-light dark:text-diary-text-primary-dark"
						>
							Xác nhận mật khẩu
						</Label>
						<div className="relative">
							<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-diary-text-secondary-light dark:text-diary-text-secondary-dark w-4 h-4" />
							<Input
								id="confirmPassword"
								name="confirmPassword"
								tabIndex={4}
								type={showConfirmPassword ? 'text' : 'password'}
								placeholder="••••••••"
								value={values.confirmPassword}
								onChange={handleChange}
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
							<p className="text-red-600 text-sm">
								{errors.confirmPassword}
							</p>
						)}
					</div>

					<div className="space-y-2 mb-2">
						<div className="flex gap-2 ">
							<Input
								id="terms"
								type="checkbox"
								name="agreeToTerms"
								tabIndex={5}
								checked={values.agreeToTerms}
								onChange={handleChange}
								className="w-4 h-4 mt-1 bg-diary-bg-light dark:bg-diary-bg-dark border-diary-border-light dark:border-diary-border-dark text-diary-text-primary-light dark:text-diary-text-primary-dark"
							/>
							<Label
								htmlFor="terms"
								className="flex-1 text-sm text-diary-text-secondary-light dark:text-diary-text-secondary-dark whitespace-normal leading-relaxed"
							>
								<span className="inline-block">
									Tôi đồng ý với{' '}
									<Link
										href="/terms"
										className="text-diary-primary hover:text-diary-primary/80"
									>
										điều khoản sử dụng
									</Link>{' '}
									và{' '}
									<Link
										href="/privacy"
										className="text-diary-primary hover:text-diary-primary/80"
									>
										chính sách bảo mật
									</Link>
								</span>
							</Label>
						</div>

						{errors.agreeToTerms && (
							<p className="text-red-600 text-sm">
								{errors.agreeToTerms}
							</p>
						)}
					</div>
				</CardContent>

				<CardFooter className="flex flex-col space-y-4">
					<div className="w-full">
						<Button
							type="submit"
							tabIndex={6}
							className="w-full bg-diary-accent hover:bg-diary-accent/90 text-white"
							disabled={isLoading}
						>
							{isLoading
								? 'Đang tạo tài khoản...'
								: 'Tạo tài khoản'}
						</Button>
						{formError && (
							<p className="text-red-600 text-sm text-center">
								{formError}
							</p>
						)}
					</div>

					<Separator />

					<div className="flex items-center gap-2">
						<Link
							href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login/google`}
						>
							<GoogleButton
								type="dark"
								tabIndex={7}
								label="Đăng nhập với Google"
							/>
						</Link>
					</div>

					<div className="text-center text-sm text-diary-text-secondary-light dark:text-diary-text-secondary-dark">
						Đã có tài khoản?{' '}
						<Link
							href="/login"
							className="text-diary-primary hover:text-diary-primary/80 font-medium transition-colors"
						>
							Đăng nhập ngay
						</Link>
					</div>
				</CardFooter>
			</form>
		</Card>
	)
}
