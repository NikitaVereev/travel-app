import { NextPage } from 'next'
import { useRouter } from 'next/router'

const PlacePage: NextPage = () => {
	const router = useRouter()
	return <div>PlacePage {router.query.slug}</div>
}

export default PlacePage
