import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(host: string): string {
    return `<h3><a href='http://${host}/api/graphql'>Click here</a> to open qraphql playground</h3>`;
  }
}
