import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { IPlacePage } from '@/pages/place/[slug]'
import styles from './SinglePlace.module.scss'
import cn from 'classnames'
import Map from '@/common/map/Map'
import { urlFor } from '@/pages/api/sanity2'
import axios from 'axios'

const SinglePlace: FC<IPlacePage> = ({ place }) => {
	const getHotels = async () => {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/locations/search`,
			{
				params: {
					query: `${place.location.city}`,
					limit: '30',
					offset: '0',
					units: 'km',
					location_id: '1',
					currency: 'USD',
					sort: 'relevance',
					lang: 'en_US',
				},

				headers: {
					'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
					'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
				},
			}
		)

		return data
	}

	const [responseData, setResponseData] = useState([])

	useEffect(() => {
		getHotels().then(data => {
			setResponseData(data)
		})
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<img src={urlFor(place.bigImage).url()} alt={place.location.city} />
				<div className={cn([styles.text], 'wrapper')}>
					<div>
						<h1>
							{place.location.city}
							<span>{place.location.country}</span>
						</h1>
						<p>{place.description}</p>
					</div>
					<div className={styles.image}>
						<img
							src={urlFor(place.imagePath).url()}
							alt={place.location.city}
						/>
					</div>
				</div>
			</div>
			<div className={styles.map}>
				<Map location={place.location} />
			</div>
			<main>
				{responseData.map((data, i) => (
					<div className={styles.hotels} key={i}>
						<p>
							{
								//@ts-ignore
								data.result_object.name
							}
						</p>
						<img src={data.result_object.photo.images.original.url} />
						<div className={styles.awards}>
							<p>{data?.result_object?.awards?.award_type}</p>
							<p>{data.result_object.awards?.year}</p>
						</div>
					</div>
				))}
			</main>
		</div>
	)
}

export default SinglePlace
