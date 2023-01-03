import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { sanityClient } from './api/sanity2'

import Home from '../src/components/screens/Home/Home'
import { IPlace } from '../src/types/place.interface'

import { client } from '../lib/sanity.client'
import { createClient } from 'next-sanity'

import { queries } from '../src/queryis'

interface IHome {
	places: IPlace[]
}

const HomePage: NextPage<IHome> = ({ places }) => {
	return (
		<div>
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
