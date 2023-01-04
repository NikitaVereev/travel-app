import { signUpHandler } from 'next-auth-sanity'
import { sanityClient } from '../sanity2'

export default signUpHandler(sanityClient)
