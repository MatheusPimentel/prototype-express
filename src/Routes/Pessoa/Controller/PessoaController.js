import CrudController from '../../Crud/Controller/CrudController'
import PessoaService from '../Service/PessoaService'

export default class PessoaController extends CrudController {
  service = new PessoaService()


}