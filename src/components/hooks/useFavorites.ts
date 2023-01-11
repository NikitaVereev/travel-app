import { sanityClient } from '@/pages/api/sanity2'
import { IPlace } from '@/types/place.interface'
import { queries } from '../../queryis'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useMemo, useState } from 'react'

export const useFavorites = () => {
	const { data } = useSession()
	const [favorites, setFavorites] = useState<IPlace[]>([])

	useEffect(() => {
		sanityClient
			.fetch(queries.getFavorites(data?.user?.email))
			.then(data => setFavorites(data.places))
	}, [data])

	const checkFavorites = useCallback(
		(_id: string) => favorites.map(item => item._id === _id),
		[favorites]
	)
	console.log(checkFavorites)

	return useMemo(
		() => ({
			favorites,
			checkFavorites,
		}),
		[favorites, checkFavorites]
	)
}
