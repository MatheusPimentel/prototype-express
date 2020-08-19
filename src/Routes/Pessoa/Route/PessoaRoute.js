import CrudRoute from '../../Crud/Route/CrudRoute'
import PessoaController from '../Controller/PessoaController'

export default class PessoaRoute extends CrudRoute {
  domain = 'pessoa'
  controller = new PessoaController()
}