import { FC, useState } from 'react'
import styles from './Filters.module.scss'
import cn from 'classnames'

const cities = [
	{
		location: 'Paris',
	},
	{
		location: 'Bora Bora',
	},
	{
		location: 'Maui',
	},
	{
		location: 'Tahiti',
	},
	{
		location: 'Brazil',
	},
	{
		location: 'Norway',
	},
]

const FIlters: FC = () => {
	const [filter, setFilter] = useState('')

	return (
		<div className={styles.wrapper}>
			{cities.map(item => (
				<button
					className={cn({ [styles.active]: item.location === filter })}
					onClick={() => setFilter(item.location)}
					key={item.location}
				>
					{item.location}
				</button>
			))}
		</div>
	)
}

export default FIlters
