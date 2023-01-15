import Auth from '@/components/screens/Auth/Auth'
import Meta from '@/components/utils/Meta'
import { NextPage } from 'next'

const auth: NextPage = () => {
	return (
		<>
			<Meta
				title='Страница авторизации'
				description='Это страница авторизации данного pet проект'
			/>
			<Auth />
		</>
	)
}

export default auth
