export const wait = (interval: number) => {
  return new Promise(resolve => setTimeout(resolve, interval))
}
