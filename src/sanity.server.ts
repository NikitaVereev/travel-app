import { createClient } from 'next-sanity'
import { config } from './sanity2'

export const sanityClientServer = createClient(config)
