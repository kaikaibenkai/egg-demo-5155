import { Controller } from 'egg';
import {
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
} from '@eggjs/tegg';

@HTTPController({
  path: '/user',
})
export default class extends Controller {

  @HTTPMethod({
    path: '/register',
    method: HTTPMethodEnum.POST,
  })
  public async register() {
    this.logger.info('h');
  }

}
