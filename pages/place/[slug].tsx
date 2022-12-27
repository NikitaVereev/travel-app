import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { IPlace } from '../../src/types/place.interface'

interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <div>PlacePage {place.slug} </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('http://localhost:3000/api/places')
	const places = await res.json()

	const paths = places.map(post => ({
		params: { slug: post.slug },
	}))

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`http://localhost:3000/api/places/${params.slug}`)
	const place = await res.json()

	console.log(place)

	return { props: { place } }
}

export default PlacePage
