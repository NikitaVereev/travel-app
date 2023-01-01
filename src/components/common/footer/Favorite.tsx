import Link from 'next/link'
import { FC } from 'react'
import { IFavorite } from '@/types/place.interface'

import stules from './Header.module.scss'

const data: IFavorite[] = [
	{
		name: 'Tokyo , Japan',
		slug: 'tokyo',
	},
	{
		name: 'New York, USA',
		slug: 'new-york',
	},
]

const Favorite: FC = () => {
	return (
		<div>
			{data.map(item => (
				<div key={item.slug}>
					<Link href={`place/${item.slug}`}>{item.name}</Link>
				</div>
			))}
		</div>
	)
}

export default Favorite
