import { sanityClient } from '../api/sanity2'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import SinglePlace from '../../src/components/Place/SenglePlace/SinglePlace'
import { IPlace } from '../../src/types/place.interface'
import { queries } from '../../src/queryis'

export interface IPlacePage {
	place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
	return <SinglePlace place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await sanityClient.fetch(`${queries.getPlaces}{slug}`)
	const paths = result.map((place: any) => ({
		params: { slug: place.slug.current },
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const place = await sanityClient.fetch(queries.getPlace(String(params.slug)))

	return { props: { place } }
}

export default PlacePage
