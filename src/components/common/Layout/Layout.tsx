import { FC } from 'react'
import Footer from '../footer/Footer'

type Props = {
	children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<div>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
