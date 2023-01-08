import { FC, useState } from 'react'
import styles from './Filters.module.scss'
import cn from 'classnames'
import { IPlace } from '@/types/place.interface'
import { TypeSetState } from '@/types/common'
import uniqBy from 'lodash/uniqBy'

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
			{uniqBy(initialPlaces, 'location.country').map(item => {
				const location = item.location.country
				return (
					<button
						className={cn({ [styles.active]: location === filter })}
						onClick={() => handleFilter(location)}
						key={location}
					>
						{location}
					</button>
				)
			})}
		</div>
	)
}

export default FIlters
