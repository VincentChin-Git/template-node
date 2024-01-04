import Koa from 'koa'

import EnvConfig from './config/env'
import middleware from './middleware'
import { connect } from './models'
import Router from './routes'
import cron from './services/cron'

const start = async (app: Koa, port: number) => {
  try {
    await connect({ address: EnvConfig.databaseAddress }).then(async () => {}) // await db connect

    cron() // start cron job

    app.use(middleware) // register global middleware
    app.use(Router) // register router
    // start app listen
    const conn = app.listen(port, () => {
      console.log(`🌐: Server is now listening at port: ${port} `)

      // initHistoryData();
    })

    process.on('SIGINT', () => {
      conn.keepAliveTimeout = 1
      console.log('Closing server...')
      conn.close(() => {
        console.log('Server closed !!!')
        process.exit()
      })
    })
  } catch (error) {
    console.log(error)
  }
}

const App = new Koa()
App.proxy = true
start(App, EnvConfig.port)
