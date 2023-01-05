import axios from 'axios'
import { useEffect, useState } from 'react'
import { getHotels } from './api/city'
export default function Home(props: any) {
	const [responseData, setResponseData] = useState([])

	useEffect(() => {
		getHotels().then(data => {
			setResponseData(data)
		})
	}, [])

	return (
		<div style={{ marginTop: 300 }}>
			<main>
				<button onClick={getHotels}>Make API call</button>
				{responseData.map((sr, i) => (
					<div key={i}>{sr.regionNames.shortName}</div>
				))}
			</main>
		</div>
	)
}
