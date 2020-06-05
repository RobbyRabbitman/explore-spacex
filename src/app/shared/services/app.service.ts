import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private readonly _name: string = 'SpaceX Explorer';

  constructor() {}

  get name() {
    return this._name;
  }
}
