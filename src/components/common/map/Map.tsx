import { FC } from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from 'react-simple-maps'
import { TypeLocation } from '../../../types/place.interface'
import cn from 'classnames'

import styles from './Map.module.scss'

const Map: FC<{ location: TypeLocation }> = ({ location }) => {
	const geoUrl =
		'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'
	return (
		<div className={cn(styles.map, 'wrapper')}>
			<ComposableMap
				projectionConfig={{
					scale: 50,
				}}
				width={240}
				height={180}
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => {
							const isCurrent =
								geo.properties.name === location.country ||
								geo.id === location.country

							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill={isCurrent ? '#eb601e' : '#39373B'}
									stroke={isCurrent ? 'transparent' : '#2D2B2F'}
									style={{
										default: { outline: 'none' },
										hover: { outline: 'none' },
										pressed: { outline: 'none' },
									}}
								/>
							)
						})
					}
				</Geographies>
			</ComposableMap>
		</div>
	)
}

export default Map
