import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { IPlacePage } from '@/pages/place/[slug]'
import styles from './SinglePlace.module.scss'
import cn from 'classnames'
import Map from '@/common/map/Map'
import { urlFor } from '@/pages/api/sanity2'
import axios from 'axios'
import { useSession } from 'next-auth/react'

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
	const [show, setShow] = useState('activeHotel')

	const { data } = useSession()

	const handleClick = () => {
		if (show === '') {
			setShow('activeHotel')
		} else if (show === 'activeHotel') {
			setShow('')
		}
	}

	useEffect(() => {
		getHotels().then(data => {
			setResponseData(data)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<Image
					src={urlFor(place.bigImage).url()}
					alt={place.location.city}
					layout='fill'
				/>
				<div className={cn([styles.text], 'wrapper')}>
					<div>
						<div className={styles.headerTop}>
							<h1>
								{place.location.city}
								<span>{place.location.country}</span>
							</h1>
						</div>
						<p>{place.description}</p>
					</div>
					<div className={styles.image}>
						<Image
							src={urlFor(place.imagePath).url()}
							alt={place.location.city}
							layout='fill'
						/>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				<div className={styles.map}>
					<Map location={place.location} />
				</div>
				<h2 className={styles.hotelTitle}>Hotels in {place.location.city}</h2>

				<div className={cn(styles.hotelsWrapper, 'wrapper', show)}>
					{responseData
						.filter(data => {
							//@ts-ignore
							if (data.result_object.category.name === 'Hotel') {
								return data
							}
						})
						.map((data, i) => (
							<div
								className={styles.hotels}
								key={i}
								style={{
									backgroundImage: `url(${
										//@ts-ignore
										data.result_object.photo.images.original.url
									})`,
								}}
							>
								<p>
									{
										//@ts-ignore
										data.result_object.name
									}
								</p>

								<div className={styles.awards}>
									<p>
										{
											//@ts-ignore
											data.result_object.awards?.display_name
										}
									</p>
									<p>
										<span>Rating - </span>
										{
											//@ts-ignore
											data.result_object.rating
										}
									</p>
									<p>
										{
											//@ts-ignore
											data.result_object.address
										}
									</p>
								</div>
							</div>
						))}
				</div>

				<button className={styles.btn} onClick={handleClick}>
					Show more
				</button>
			</div>
		</div>
	)
}

export default SinglePlace
