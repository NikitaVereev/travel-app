import { FC } from 'react'
import Header from '../footer/Header'

type Props = {
	children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<div>{children}</div>
			<Header />
		</>
	)
}

export default Layout
