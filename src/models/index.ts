import mongoose from 'mongoose'

export const connect = async ({ address }: { address: string }) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(address, {})
      .then(() => {
        console.log(`💾: Successfully connected to MongoDB`)
        resolve(0)
      })
      .catch(error => {
        console.log(`😭: MongoDB connect failed`)
        reject(error)
      })
  })
}

export * from './tests'
