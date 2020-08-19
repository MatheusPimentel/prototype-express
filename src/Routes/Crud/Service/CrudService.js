import pool from '../../../Config/Database/pool'
import { getColumns, getValues, getValuesUpdate } from './helper'

export default class CrudService {
  entity = ''
  schema = ''

  query (sql = '', parameters = []) {
    return new Promise((resolve, reject) => {
      pool.query(sql, parameters)
        .then((result) => {
          resolve(result.rows)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  getById (id) {
    return this.query(`SELECT * FROM ${this.schema + '.' + this.entity} en WHERE ($1::INTEGER) = en.id`, [id])
  }

  getAll () {
    return this.query(`SELECT * FROM ${this.schema + '.' + this.entity}`)
  }

  deleteById (id) {
    return this.query(`DELETE FROM ${this.schema + '.' + this.entity} WHERE ($1::INTEGER) = id`, [id])
  }

  insert (register) {
    const columns = getColumns(register)
    const values = getValues(register)
    return this.query(`INSERT INTO ${this.schema + '.' + this.entity} (${columns}) VALUES (${values})`)
  }

  update (register) {
    const update = getValuesUpdate(register)
    return this.query(`UPDATE ${this.schema + '.' + this.entity} SET ${update} WHERE id = ${register.id}`)
  }
}