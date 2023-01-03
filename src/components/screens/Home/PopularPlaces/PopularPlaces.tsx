import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { IPlace } from '@/types/place.interface'
import Search, { ISearch } from '@/ui/Search/Search'
import {
	fadeIn,
	staggerContainer,
	textContainer,
	textVariant,
	textVariant2,
} from '@/utils/motion'
import FIlters from '../Filters/FIlters'
import styles from './PopularPlaces.module.scss'
import { urlFor } from '@/pages/api/sanity2'

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
		<motion.div
			className='wrapper'
			variants={staggerContainer()}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
		>
			<div className={styles.heading}>
				<div className={styles.left}>
					<motion.span variants={textContainer}>
						{Array.from(`Destination`).map((letter, index) => (
							<motion.span variants={textVariant2} key={index}>
								{letter === ' ' ? '\u00A0' : letter}
							</motion.span>
						))}
					</motion.span>
					<motion.h2 variants={fadeIn('right', 'tween', 0.2, 1)}>
						Our Best Destination For You
					</motion.h2>
				</div>
				<div>
					<motion.p variants={fadeIn('left', 'tween', 0.7, 1)}>
						With a world full of fascinating destinations, choosing the perfect
						vacation spot can present a challenge. That`s why Travely to compile
						this list of the world`s best places to visit
					</motion.p>
					<motion.div
						className={styles.filter}
						variants={fadeIn('down', 'tween', 0.2, 1)}
					>
						<Search setPlaces={setPlaces} initialPlaces={initialPlaces} />
						<span
							className='material-icons-outlined'
							onClick={() => setShowFilter(!showFilter)}
						>
							filter_alt
						</span>
						{showFilter && (
							<FIlters setPlaces={setPlaces} initialPlaces={initialPlaces} />
						)}
					</motion.div>
				</div>
			</div>

			<div className={styles.itemWrapper}>
				{places ? (
					places.map(item => (
						<motion.div
							key={item._id}
							className={styles.item}
							// variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
						>
							<div className={styles.itemImage}>
								<img
									src={urlFor(item.imagePath).url()}
									alt={item.location.city}
								/>
								<Link href={`/place/${item.slug.current}`}></Link>
							</div>
							<div className={styles.itemHeading}>
								<h4>{`${item.location.city}, ${item.location.country}`}</h4>
								<div>
									<p>
										{item.description.slice(0, 80)}...
										<Link href={`/place/${item.slug.current}`}>Readmore</Link>
									</p>
								</div>
							</div>
						</motion.div>
					))
				) : (
					<h1>Ничего подобного нету!)</h1>
				)}
			</div>
		</motion.div>
	)
}

export default PopularPlaces
