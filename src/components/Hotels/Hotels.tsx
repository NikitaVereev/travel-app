import axios from 'axios'
import { useState } from 'react'
export default function Hotels() {
	const [searchCity, setSearchCity] = useState(null)
	const [city, setCity] = useState(null)
	const [checkIn, setCheckIn] = useState(null)
	const [checkOut, setCheckOut] = useState(null)
	const [guests, setGuests] = useState(null)
	const [hotels, setHotels] = useState(null)
	const getCity = async () => {
		try {
			const res = await axios.get('api/city/', {
				params: { searchCity },
			})
			const { data } = res
			setCity(data.suggestions[0].entities[0].destinationId)
		} catch (error) {
			console.log(error)
		}
	}
	const callAPI = async (e: any) => {
		e.preventDefault()
		try {
			const res = await axios.get('api/hotels/', {})

			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			<button style={{ marginTop: 200 }} onClick={callAPI}>
				Make API Call
			</button>
		</div>
	)
}
