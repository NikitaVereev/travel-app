import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './Footer.module.scss'

const navItem = [
	{
		icon: 'home',
		link: '/',
	},
	{
		icon: 'explore',
		link: '/explore',
	},
	{
		icon: 'place',
		link: '/place',
	},
	{
		icon: 'person',
		link: '/profile',
	},
]

const Footer: FC = () => {
	const { push, pathname } = useRouter()
	return (
		<footer className={styles.footer}>
			<nav>
				<ul>
					{navItem.map(item => (
						<li key={item.link}>
							<button
								onClick={() => push(item.link)}
								className={pathname === item.link ? styles.active : ''}
							>
								<span className='material-icons-outlined'>{item.icon}</span>
							</button>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default Footer
