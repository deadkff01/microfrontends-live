import { Injectable } from '@nestjs/common';
import { Request } from './models/request';

@Injectable()
export class AppService {
  private itemList = ['some', 'something', 'playstation', 'xbox', 'computer'];

  getItems(request: Request) {
    const filtredList = this.itemList.filter((item) =>
      item?.toLocaleLowerCase().includes(request?.search?.toLocaleLowerCase()),
    );
    return filtredList;
  }
}
