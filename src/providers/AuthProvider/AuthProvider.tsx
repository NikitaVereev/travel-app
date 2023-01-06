import { TypeComponentAuthFields } from '@/types/auth'
import { FC } from 'react'
import { useSession } from 'next-auth/react'
import CheckRole from './CheckRole'

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser },
}) => {
	const { data } = useSession()

	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<CheckRole Component={{ isOnlyUser }}>{children}</CheckRole>
	)
}

export default AuthProvider
