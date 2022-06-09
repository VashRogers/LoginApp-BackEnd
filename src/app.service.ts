import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá mundos!';
  }
  getObject(): any {
    let objeto ={
      id:1,
      nome:'Renatin'
    }
    return objeto
  }
}
