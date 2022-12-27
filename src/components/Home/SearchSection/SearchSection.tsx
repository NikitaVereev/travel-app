import Image from 'next/image'
import { FC } from 'react'

import styles from './SearchSection.module.scss'

const SearchSection: FC = () => {
	return (
		<section className={styles.section}>
			<div className='wrapper'>
				<div className={styles.heroImage}>
					<div>
						<Image src='/image/head1.jpg' alt='head2' layout='fill' />
					</div>
					<div>
						<Image src='/image/head2.jpg' alt='head1' layout='fill' />
					</div>
				</div>
				<div className={styles.text}>
					<h1>Ready to explore the beauty of wonderful world</h1>
					<p>
						Boost and lift your mood with a vacation in the most comfortable and
						best place in the world.
					</p>
					<button className={styles.button}>Get started</button>
				</div>
			</div>
		</section>
	)
}

export default SearchSection
