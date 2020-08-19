import CrudService from '../Service/CrudService'

export default class CrudController {
  service = new CrudService()

  getById (req, res, next) {
    this.service.getById(req.params._id)
      .then((result) => {
        res.status(200).send(result)
      }).catch((error) => {
        res.status(500).send({ err: 'Was not possible to find the register!' })
    })
  }

  getAll (req, res, next) {
    this.service.getAll()
      .then((result) => {
        res.status(200).send(result)
      }).catch((error) => {
      res.status(500).send({ err: 'Was not possible to find the registers!' })
    })
  }

  deleteById (req, res, next) {
    this.service.deleteById(req.params._id)
      .then((result) => {
        res.status(200).send(result)
      }).catch((error) => {
      res.status(500).send({ err: 'Was not possible to delete the register!' })
    })
  }

  alter (req, res, next) {
    this.service.update(req.body)
      .then((result) => {
        res.status(200).send(result)
      }).catch((error) => {
        res.status(500).send({ err: 'Was not possible to update the register!' })
    })
  }

  save (req, res, next) {
    this.service.insert(req.body)
      .then((result) => {
        res.status(200).send(result)
      }).catch((error) => {
        res.status(500).send({ err: 'Was not possible to insert a new register!' })
    })
  }
}
