import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../src/components/common/Layout/Layout'
import React from 'react'
import NextProgressBar from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from 'next-auth/react'

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<>
			<NextProgressBar
				color={'rgba(255,255,255, .5)'}
				startPosition={0.3}
				stopDelayMs={200}
				height={5}
			/>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
					<ToastContainer theme='dark' />
				</Layout>
			</SessionProvider>
		</>
	)
}
