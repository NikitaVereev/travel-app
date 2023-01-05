import axios from 'axios'

export const getHotels = async () => {
	const {
		data: { data },
	} = await axios.get(
		`https://travel-advisor.p.rapidapi.com/locations/search`,
		{
			params: {
				query: 'paris',
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
