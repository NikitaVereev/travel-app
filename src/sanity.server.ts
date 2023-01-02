import { createClient } from 'next-sanity'
import { config } from '../pages/api/sanity2'

export const sanityClientServer = createClient(config)
