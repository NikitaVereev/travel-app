import Image from 'next/image'
import { FC } from 'react'
import { IPlacePage } from '../../../../pages/place/[slug]'
import styles from './SinglePlace.module.scss'
import cn from 'classnames'

const SinglePlace: FC<IPlacePage> = ({ place }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<Image src={place.bigImage} alt={place.slug} layout='fill' />
				<div className={cn([styles.text], 'wrapper')}>
					<div>
						<h1>
							{place.location.city}
							<span>{place.location.country}</span>
						</h1>
						<p>{place.description}</p>
					</div>
					<div className={styles.image}>
						<Image
							src={place.imagePath}
							alt={place.location.city}
							layout='fill'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SinglePlace