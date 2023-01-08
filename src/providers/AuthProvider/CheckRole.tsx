import { TypeComponentAuthFields } from '@/types/auth'
import { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser },
}) => {
	const { data, status } = useSession()
	const { replace, pathname } = useRouter()

	const Children = () => <>{children}</>

	if (status === 'loading') return null

	if (data) return <Children />

	if (isOnlyUser) {
		pathname !== '/auth' && replace('/auth')
		return null
	}

	return <div>CheckRole</div>
}

export default CheckRole
