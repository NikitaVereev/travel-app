import NextAuth, { NextAuthOptions } from 'next-auth'
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity'
import { sanityClient } from '../sanity2'
const options: NextAuthOptions = {
	providers: [
		//@ts-ignore
		SanityCredentials(sanityClient), // only if you use sign in with credentials
	],
	session: {
		strategy: 'jwt',
	},
	//@ts-ignore
	adapter: SanityAdapter(sanityClient),
}

export default NextAuth(options)
