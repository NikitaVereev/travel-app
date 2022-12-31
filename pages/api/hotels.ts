import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
		params: { id: '1178275040' },
		headers: {
			'X-RapidAPI-Key': '2afbf96d17msha7b2fec3dccfc30p194741jsn6cad92cd89e5',
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
