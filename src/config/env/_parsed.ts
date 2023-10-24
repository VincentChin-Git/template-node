import { config } from 'dotenv'
import path from 'path'
const { parsed = {} } = config({
    path: path.join(__dirname, `../../../.env.${process.env.NODE_ENV}`),
})

export default parsed
