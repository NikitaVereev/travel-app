import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { IPlace } from '../../../types/place.interface'
import Search, { ISearch } from '../../ui/Search/Search'
import FIlters from '../Filters/FIlters'
import styles from './PopularPlaces.module.scss'

interface IPopularPlaces extends ISearch {
	places: IPlace[]
}

const PopularPlaces: FC<IPopularPlaces> = ({
	places,
	setPlaces,
	initialPlaces,
}) => {
	const [showFilter, setShowFilter] = useState(false)

	return (
		<div className='wrapper'>
			<div className={styles.heading}>
				<div className={styles.left}>
					<span>Destination</span>
					<h2>Our Best Destination For You</h2>
				</div>
				<div>
					<p>
						With a world full of fascinating destinations, choosing the perfect
						vacation spot can present a challenge. That`s why Travely to compile
						this list of the world`s best places to visit
					</p>
					<div className={styles.filter}>
						<Search setPlaces={setPlaces} initialPlaces={initialPlaces} />
						<span
							className='material-icons-outlined'
							onClick={() => setShowFilter(!showFilter)}
						>
							filter_alt
						</span>
						{showFilter && <FIlters />}
					</div>
				</div>
			</div>

			<div className={styles.itemWrapper}>
				{places.map(item => (
					<div key={item.slug} className={styles.item}>
						<div className={styles.itemImage}>
							<Image
								src={item.imagePath}
								alt={item.location.city}
								layout='fill'
							/>
							<Link href={item.slug}></Link>
						</div>
						<div className={styles.itemHeading}>
							<h4>{`${item.location.city}, ${item.location.country}`}</h4>
							<div>
								<p>
									{item.description.slice(0, 80)}...
									<Link href={item.slug}>Readmore</Link>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PopularPlaces
