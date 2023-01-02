import { GetStaticProps, NextPage } from 'next'
import { sanityClient } from '../src/sanity2'

import Home from '../src/components/Home/Home'
import { IPlace } from '../src/types/place.interface'
import { queries } from 'queryis'

const placeQuery = `*[_type == "place"]`

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
	const result = await sanityClient.fetch('*[_type == "place"]')

	return {
		props: {
			result,
		},
	}
}

export default HomePage
