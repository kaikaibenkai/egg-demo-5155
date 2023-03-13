import { Service } from 'egg';

export interface CreateUserConfig {}

export default class extends Service {
  public async create(config: CreateUserConfig) {
    const { ctx } = this;
    ctx.data = config;
  }
}
