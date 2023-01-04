import { signUpHandler } from 'next-auth-sanity'
import { sanityClient } from '../sanity2'

//@ts-ignore
export default signUpHandler(sanityClient)
