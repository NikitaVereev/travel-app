import { FC, useState } from 'react'
import styles from './Filters.module.scss'
import cn from 'classnames'
import { IPlace } from '../../../types/place.interface'
import { TypeSetState } from '../../../types/common'

const countries = [
	{
		location: 'France',
	},
	{
		location: 'Japan',
	},
	{
		location: 'Russia',
	},
	{
		location: 'USA',
	},
	{
		location: 'Italy',
	},
	{
		location: 'Norway',
	},
]

interface IFilters {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
}

const FIlters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
	const [filter, setFilter] = useState('')

	const handleFilter = (location: string) => {
		if (filter === location) {
			setPlaces(initialPlaces)
			setFilter('')
		} else {
			setFilter(location)
			setPlaces(
				initialPlaces.filter(
					item => item.location.country.toLowerCase() === location.toLowerCase()
				)
			)
		}
	}

	return (
		<div className={styles.wrapper}>
			{countries.map(item => (
				<button
					className={cn({ [styles.active]: item.location === filter })}
					onClick={() => handleFilter(item.location)}
					key={item.location}
				>
					{item.location}
				</button>
			))}
		</div>
	)
}

export default FIlters
