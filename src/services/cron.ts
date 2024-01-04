import { scheduleJob } from 'node-schedule'

export default function cron() {
  try {
    // refresh top coins
    scheduleJob('0 0 0 1 1 *', async () => {
      console.log('Cron HIHI')
    })

    console.log('⏰: Cron job started')
  } catch (error) {
    console.log(error, '😭: Cron job error')
  }
}
