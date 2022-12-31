import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Header.module.scss'

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
		icon: 'explore',
		link: '/explore',
		title: 'Explore',
	},
	{
		icon: 'place',
		link: '/place/tokio',
		title: 'Place',
	},
	{
		icon: 'bookmark',
		link: '.favorites',
		title: 'Favorite',
	},
	{
		icon: 'hotel',
		link: '/hotels',
		title: 'Hotels',
	},
	{
		icon: 'person',
		link: '/profile',
		title: 'Profile',
	},
]

const Footer: FC = () => {
	const { push, pathname } = useRouter()
	return (
		<footer className={styles.header}>
			<nav>
				<ul>
					{navItem.map(item => (
						<li key={item.link}>
							<button
								onClick={() => push(item.link)}
								className={pathname === item.link ? styles.active : ''}
							>
								<span className={styles.title}>{item.title}</span>
							</button>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default Footer
