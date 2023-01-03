import Image from 'next/image'
import { FC } from 'react'
import { IPlacePage } from '@/pages/place/[slug]'
import styles from './SinglePlace.module.scss'
import cn from 'classnames'
import Map from '@/common/map/Map'
import { urlFor } from '@/pages/api/sanity2'

const SinglePlace: FC<IPlacePage> = ({ place }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<img src={urlFor(place.bigImage).url()} alt={place.location.city} />
				<div className={cn([styles.text], 'wrapper')}>
					<div>
						<h1>
							{place.location.city}
							<span>{place.location.country}</span>
						</h1>
						<p>{place.description}</p>
					</div>
					<div className={styles.image}>
						<img
							src={urlFor(place.imagePath).url()}
							alt={place.location.city}
						/>
					</div>
				</div>
			</div>
			<div className={styles.map}>
				<Map location={place.location} />
			</div>
		</div>
	)
}

export default SinglePlace
