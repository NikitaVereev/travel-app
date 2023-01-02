import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { PortableText as PortableTextComponent } from '@portabletext/react'

const config = {
	projectId: 'rttcnujz',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false,
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source)

export const PortableText = (props: any) => (
	<PortableTextComponent components={{}} {...props} />
)
