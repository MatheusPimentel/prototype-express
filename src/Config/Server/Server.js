import Express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from '../../Routes/index'

export default class Server {

  app = Express()

  startServer () {
    dotenv.config()
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
    Object.keys(routes).forEach((route) => {
      let app = new routes[route](this.app)
      this.app = app.getRouter()
    })

    this.app.listen(process.env.PORT, () => console.log(`servidor ouvindo na porta ${process.env.PORT}!`))
  }
}
