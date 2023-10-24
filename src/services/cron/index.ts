// export const

import * as schedule from 'node-schedule'

export const testJob = () => {
    // 每天 0 点更新排行榜
    schedule.scheduleJob('0 0 0 * * *', async function () {
        console.log('⏰: test job started')

        console.log('⏰: test job finished')
    })
}

export default function cron() {
    try {
        testJob()

        console.log('⏰: cron job started')
    } catch (error) {
        console.log(error, 'cron job error')
    }
}
