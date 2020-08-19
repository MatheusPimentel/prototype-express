import Controller from '../Controller/CrudController'

export default class CrudRoute {
  app
  domain = ''
  controller = new Controller()

  constructor (app) {
    this.app = app
  }

  getById () {
    this.app.get(`/${this.domain}/:_id`, (req, res, next) => {
      this.controller.getById(req, res, next)
    })
  }

  getAll () {
    this.app.get(`/${this.domain}`, (req, res, next) => {
      this.controller.getAll(req, res, next)
    })
  }

  deleteById () {
    this.app.delete(`/${this.domain}/:_id`, (req, res, next) => {
      this.controller.deleteById(req, res, next)
    })
  }

  alter () {
    this.app.put(`/${this.domain}`, (req, res, next) => {
      this.controller.alter(req, res, next)
    })
  }

  save () {
    this.app.post(`/${this.domain}`, (req, res, next) => {
      this.controller.save(req, res, next)
    })
  }

  getRouter () {
    this.startRoutes()
    return this.app
  }

  startRoutes (){
    this.getById()
    this.getAll()
    this.deleteById()
    this.alter()
    this.save()
  }
}
