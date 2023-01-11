import { useFavorites } from '@/components/hooks/useFavorites'
import { FC } from 'react'

const Favorites: FC<{ _id: string }> = ({ _id }) => {
	const { checkFavorites, toggleFavorite, isLoading } = useFavorites(_id)
	return (
		<div>
			<button onClick={toggleFavorite} disabled={isLoading}>
				{checkFavorites(_id) ? (
					<span>add to favorite</span>
				) : (
					<span>remove to favorite</span>
				)}
			</button>
		</div>
	)
}

export default Favorites
