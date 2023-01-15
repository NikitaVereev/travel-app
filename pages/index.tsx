import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { sanityClient } from './api/sanity2'

import Home from '../src/components/screens/Home/Home'
import { IPlace } from '../src/types/place.interface'
import { queries } from '../src/queryis'
import Meta from '@/components/utils/Meta'

interface IHome {
	places: IPlace[]
}

const HomePage: NextPage<IHome> = ({ places }) => {
	return (
		<div>
			<Meta
				title='Главная страница'
				description='Это главная страница данного pet проект'
			/>
			<Home initialPlaces={places} />
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await sanityClient.fetch(queries.getPlaces)

	return {
		props: {
			places: result,
		},
	}
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const result = await sanityClient.fetch(query)

// 	return {
// 		props: {
// 			initialPlaces: result,
// 		},
// 	}
// }
export default HomePage
