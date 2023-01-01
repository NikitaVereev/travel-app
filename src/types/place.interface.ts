export type TypeLocation = {
	city: string
	country: string
	coordinates: {
		x: number
		y: number
	}
}

export interface IPlace {
	_id: string
	slug: string
	location: TypeLocation
	imagePath: string
	description: string
	rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	duration: string
	distance: number
	bigImage: string
}

export interface IFavorite {
	slug: string
	name: string
}
