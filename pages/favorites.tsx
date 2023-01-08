import { NextPageAuth } from '@/types/auth'
import Favorite from '../src/components/screens/Favorites/Favorite'

const FavoritePage: NextPageAuth = () => {
	return <Favorite />
}

FavoritePage.isOnlyUser = true

export default FavoritePage
