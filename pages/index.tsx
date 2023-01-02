import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { sanityClient } from './api/sanity2'

import Home from '../src/components/Home/Home'
import { IPlace } from '../src/types/place.interface'
import { queries } from 'queryis'
import { client } from '../lib/sanity.client'
import { createClient } from 'next-sanity'

// const query = `*[_type == "place"]`

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

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: 'rttcnujz',
		dataset: 'production',
		apiVersion: '2021-10-21',
		useCdn: false,
	})
	const query = `*[_type == "place"]`
	const place = await client.fetch(query)
	return {
		props: {
			places: place,
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
