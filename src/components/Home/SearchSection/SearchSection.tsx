import Image from 'next/image'
import { FC } from 'react'
import styles from './SearchSection.module.scss'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '@/utils/motion'

const SearchSection: FC = () => {
	return (
		<section className={styles.section}>
			<motion.div
				className='wrapper'
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
			>
				<div className={styles.heroImage}>
					<motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
						<Image src='/image/head1.jpg' alt='head2' layout='fill' />
					</motion.div>
					<motion.div variants={slideIn('left', 'tween', 0.5, 1)}>
						<Image src='/image/head2.jpg' alt='head1' layout='fill' />
					</motion.div>
				</div>
				<div className={styles.text}>
					<motion.h1 variants={textVariant(0.5)}>
						Ready to explore the beauty of wonderful world
					</motion.h1>

					<motion.p variants={textVariant(0.8)}>
						Boost and lift your mood with a vacation in the most comfortable and
						best place in the world.
					</motion.p>
					<motion.button variants={textVariant(1.1)} className={styles.button}>
						Get started
					</motion.button>
				</div>
			</motion.div>
		</section>
	)
}

export default SearchSection
