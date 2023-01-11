export const queries = {
	getPlaces: `*[_type == "place"]`,
	getPlace: (slug: string) =>
		`*[_type == "place" && slug.current == "${slug}"][0]{_id,bigImage, location, imagePath, description, rating, duration}`,

	getFavorites: (email: string) =>
		`*[_type == "favorites" && email == "${email}"][0]{places[]->{_id, slug, location, imagePath}}`,

	addToFavorites: (_id: string) => {},
}
