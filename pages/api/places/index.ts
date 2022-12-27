// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '../../../src/types/place.interface'
import tokyo from 'public/image/tokyo.jpg'
import newYork from 'public/image/new-york.jpg'
import sweden from 'public/image/sweden.jpg'
import rome from 'public/image/rome.jpg'

export const places: IPlace[] = [
	{
		slug: 'tokyo',
		description:
			'After a pair of quiet years, Japan has reopened its borders, and Tokyo’s distinct energy is back in full force. There`s so much to see, including new shopping megaplexes, elegant hotels, and restaurants with rising-star chefs at their helms. Locals and visitors are once again rushing to futuristic skyscrapers and the famous Shibuya Crossing, an intersection that`s so lively, it feels like a flash mob. But these places are a bit less hectic in winter and early spring. Even better, March and April bring cherry blossom season, when the whole city slows down to stroll past thousands of pink blossoms. You can find other quiet moments in ancient Buddhist temples and peaceful gardens, or those secret ramen counters, chill record bars, and other little gems often hiding in plain sight.',
		imagePath: tokyo.src,
		location: { city: 'Tokyo', country: 'Japan' },
		rating: 5,
		duration: '10 days',
		distance: 10453,
		googleMapLink: 'its map',
		mapImage: 'its map image',
	},
	{
		slug: 'new-york',
		description:
			'The tallest buildings, biggest museums, and best pizza—NYC is a city of superlatives, and it lives up to every one of them. From the dazzling spectacle of Broadway to MoMA’s world-class galleries, the boutiques of SoHo, and the array of restaurants offering cuisines from every corner of the world, there’s a different New York to discover every time you visit. Beyond those iconic landmarks, though, New York’s secret side awaits. You’re likely to stumble upon indie vintage shops and locals-only brunch spots even on the shortest of strolls. And when the crowds and noise are too much to take, just look up—that skyline will remind you why you came in the first place.',
		imagePath: newYork.src,
		location: { city: 'New York', country: 'USA' },
		rating: 5,
		duration: '2 days',
		distance: 3953,
		googleMapLink: 'its map',
		mapImage: 'its map image',
	},
	{
		slug: 'Rome',
		description:
			'The sprawling city of Rome remains one of the most significant stops in the world, thanks to its seamless blend of Old World wonders and modern delights. The ruins of the Colosseum, her iconic fountains, lazy wanders through cobblestone streets with gelato in hand: All this and more beckon. Rome is a winding, spectacular city full of places to discover.',
		imagePath: rome.src,
		location: { city: 'Rome', country: 'Italy' },
		rating: 5,
		duration: '2 days',
		distance: 3953,
		googleMapLink: 'its map',
		mapImage: 'its map image',
	},
	{
		slug: 'stockholm',
		description:
			'Sweden`s dynamic capital combines contemporary attractions—avant-garde art, chic shopping, innovative dining—with regal palaces and gabled buildings that look lifted out of a storybook. Stroll through fantastic parks and gardens (the 19th-century Skansen was the world’s first open-air museum), over picturesque bridges connecting the city`s islands, and down narrow cobblestone streets of Old Town—possibly the most impeccably preserved historic center in Europe. Dedicate a day or two for exploring Stockholm’s UNESCO World Heritage Sites: Drottningholm Palace (the residence of the royal family) and the magical Skogskyrkogården (aka Woodland Cemetery).',
		imagePath: sweden.src,
		location: { city: 'Stockholm', country: 'Sweden' },
		rating: 5,
		duration: '2 days',
		distance: 3953,
		googleMapLink: 'its map',
		mapImage: 'its map image',
	},
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IPlace[]>
) {
	res.status(200).json(places)
}
