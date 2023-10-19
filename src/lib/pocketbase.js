import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL)

export default pb
