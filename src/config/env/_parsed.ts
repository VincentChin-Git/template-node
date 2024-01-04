import dotenv from 'dotenv'
import path from 'path'
const { parsed = {} } = dotenv.config({
  path: path.join(__dirname, `../../../.env.local`),
})

export default parsed
