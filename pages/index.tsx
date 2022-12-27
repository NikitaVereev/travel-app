import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Home from '../src/components/Home/Home'
import { IPlace } from '../src/types/place.interface'

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
	const result = await fetch('http://localhost:3000/api/places')
	const places: IPlace[] = await result.json()
	return {
		props: {
			places,
		},
	}
}

export default HomePage
