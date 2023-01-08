import { TypeComponentAuthFields } from '@/types/auth'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false,
})

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser },
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider
