import { ChangeEvent, FC, useState } from 'react'
import { TypeSetState } from '@/types/common'
import { IPlace } from '@/types/place.interface'
import styles from './Search.module.scss'

export interface ISearch {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setSearchTerm(value)
		if (value) {
			setPlaces(
				initialPlaces.filter(
					item =>
						item.location.city.toLowerCase().includes(value) ||
						item.location.country.toLowerCase().includes(value)
				)
			)
		} else {
			setPlaces(initialPlaces)
		}
	}
	return (
		<>
			<div className={styles.search}>
				<span className='material-icons-outlined'>search</span>
				<div>
					<input type='text' value={searchTerm} onChange={searchHandler} />
					<span>Search</span>
				</div>
			</div>
		</>
	)
}

export default Search
