import { useRouter } from 'next/router'
import { FC, memo } from 'react'

import styles from './Header.module.scss'
import { useSession, signOut } from 'next-auth/react'

type TypeNavItem = {
	icon: string
	link: string
	title: string
}

const navItem: TypeNavItem[] = [
	{
		icon: 'home',
		link: '/',
		title: 'Home',
	},
	{
		icon: 'place',
		link: '/profile',
		title: 'Profile',
	},
	{
		icon: 'hotel',
		link: '/hotels',
		title: 'Hotels',
	},
	{
		icon: 'person',
		link: '/auth',
		title: 'Auth/Reg',
	},
]

const Footer: FC = () => {
	const { push, pathname } = useRouter()
	const { data } = useSession()
	return (
		<footer className={styles.header}>
			<nav>
				<ul>
					{navItem.map(item => (
						<li key={item.link}>
							<button
								onClick={() =>
									item.link === '/auth' && data ? signOut() : push(item.link)
								}
								className={pathname === item.link ? styles.active : ''}
							>
								<span className={styles.title}>
									{item.link === '/auth' && data ? 'Logout' : item.title}
								</span>
							</button>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default memo(Footer)
