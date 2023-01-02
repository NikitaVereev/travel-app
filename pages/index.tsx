import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import Home from '../src/components/Home/Home'
import { IPlace } from '../src/types/place.interface'

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

export default HomePage
