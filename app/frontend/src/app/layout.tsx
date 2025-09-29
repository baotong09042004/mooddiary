import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { JotaiProviders } from '@/components/JotaiProvider'
import { ThemeProvider } from '@/components/ThemeProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'MoodDiary',
	description: 'MoodDiary: Nhật ký cảm xúc thông minh',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<JotaiProviders>
					<ThemeProvider>{children}</ThemeProvider>
				</JotaiProviders>
			</body>
		</html>
	)
}
