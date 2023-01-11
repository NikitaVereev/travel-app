import { sanityClient } from '@/pages/api/sanity2'
import { IPlace } from '@/types/place.interface'
import { queries } from '../../queryis'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useMemo, useState } from 'react'

export const useFavorites = (placeId: string) => {
	const { data } = useSession()
	const [favorites, setFavorites] = useState<IPlace[]>([])
	const [currentFavoriteId, setCurrentFavoriteId] = useState<string>('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		sanityClient
			.fetch<{ places: IPlace[]; _id: string }>(
				queries.getFavorites(data?.user?.email)
			)
			.then(data => {
				setFavorites(data.places)
				setCurrentFavoriteId(data._id)
			})
			.catch(e => console.log(e))
	}, [data])

	const checkFavorites = useCallback(
		(_id: string) => favorites.some(item => item._id === _id),
		[favorites]
	)

	const addToFavorites = useCallback(async () => {
		await sanityClient
			.patch(currentFavoriteId)
			.setIfMissing({ places: [] })
			.append('places', [
				{
					_ref: placeId,
					_type: 'reference',
				},
			])
			.commit()
			.finally(() => setIsLoading(false))
	}, [currentFavoriteId, placeId])

	const removeFromFavorites = useCallback(async () => {
		await sanityClient
			.delete(currentFavoriteId)
			.finally(() => setIsLoading(false))
	}, [currentFavoriteId])

	const toggleFavorite = useCallback(async () => {
		setIsLoading(true)
		if (!checkFavorites(placeId)) await removeFromFavorites()
		else await addToFavorites()
	}, [currentFavoriteId, placeId])

	return useMemo(
		() => ({
			favorites,
			checkFavorites,
			toggleFavorite,
			isLoading,
		}),
		[favorites, checkFavorites, toggleFavorite, isLoading]
	)
}
