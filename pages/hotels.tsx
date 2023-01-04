import axios from 'axios'
import { useState } from 'react'
export default function Home(props: any) {
	const [responseData, setResponseData] = useState('')

	const fetchData = async () => {
		const options = {
			method: 'GET',
			url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
			params: {
				q: 'new york',
				locale: 'en_US',
				langid: '1033',
				siteid: '300000001',
			},
			headers: {
				'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
				'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
			},
		}

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.error(error)
			})
	}

	return (
		<div style={{ margin: 300 }}>
			<main>
				<button onClick={fetchData}>Make API call</button>
			</main>
		</div>
	)
}
