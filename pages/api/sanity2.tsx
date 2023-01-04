import { ClientConfig, createClient } from 'next-sanity'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

export const config: ClientConfig = {
	projectId: 'rttcnujz',
	dataset: 'production',
	apiVersion: '2021-10-21',
	token: process.env.SANITY_API_TOKEN,
	useCdn: typeof document !== 'undefined',
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
	createImageUrlBuilder({ clientConfig: config }).image(source)
export const PortableText = (props: any) => (
	<PortableTextComponent components={{}} {...props} />
)
