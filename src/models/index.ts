import mongoose from 'mongoose'

export const connect = async ({ address }: { address: string }) => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(address, {})
            .then(() => {
                console.log(`Connected to MongoDB at ${address}`)
                resolve(void 0)
            })
            .catch((error) => {
                console.log(`Connected to ${address} failed`)
                reject(error)
            })
    })
}
