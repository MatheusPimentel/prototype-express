import CrudService from '../../Crud/Service/CrudService'

export default class PessoaService extends CrudService {
  entity = 'pessoa'
  schema = 'sistema'
}