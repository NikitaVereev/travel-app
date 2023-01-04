import { FC, useState } from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
} from 'react-simple-maps'
import { TypeLocation } from '@/types/place.interface'
import cn from 'classnames'

import styles from './Map.module.scss'

const Map: FC<{ location: TypeLocation }> = ({ location }) => {
	const geoUrl =
		'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

	const markersBegin = [
		{
			markerOffset: -30,
			name: 'Buenos Aires',
			coordinates: [-58.3816, -34.6037],
		},
	]

	const [scale, setSclae] = useState(1)
	const [markers, setMarkers] = useState(markersBegin)
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
					{({ geographies }: any) =>
						geographies.map((geo: any) => {
							const isCurrent =
								geo.properties.name === location.country ||
								geo.id === location.country

							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill={
										isCurrent ? 'rgba(155,155,155)' : 'rgba(34, 60, 80, 0.2)'
									}
									stroke={isCurrent ? 'transparent' : 'rgba(0, 0, 0, 0.1)'}
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

				<Annotation
					subject={[location.coordinates.y, location.coordinates.x]}
					dx={-5}
					dy={-5}
					connectorProps={{
						stroke: '#fff',
						strokeWidth: 0.3,
						strokeLinecap: 'round',
					}}
				>
					<text
						x='-1'
						textAnchor='end'
						alignmentBaseline='middle'
						fill='#fff'
						style={{ fontSize: 4 }}
					>
						{location.city}
					</text>
				</Annotation>
			</ComposableMap>
		</div>
	)
}

export default Map
