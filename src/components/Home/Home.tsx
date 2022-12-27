import { FC, useState } from 'react'
import { IPlace } from '../../types/place.interface'
import PopularPlaces from './PopularPlaces/PopularPlaces'
import SearchSection from './SearchSection/SearchSection'
interface IHome {
	initialPlaces: IPlace[]
}

const Home: FC<IHome> = ({ initialPlaces }) => {
	const [places, setPlaces] = useState(initialPlaces)
	return (
		<div>
			<SearchSection />
			<PopularPlaces
				places={places}
				setPlaces={setPlaces}
				initialPlaces={initialPlaces}
			/>
		</div>
	)
}

export default Home
