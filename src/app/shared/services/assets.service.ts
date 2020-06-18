import { Injectable } from '@angular/core';

@Injectable()
export class AssetsService {
  public readonly FALCON_1: string = 'assets/images/rockets/falcon1.jpg';
  public readonly FALCON_9: string = 'assets/images/rockets/falcon9.jpg';
  public readonly FALCON_HEAVY: string =
    'assets/images/rockets/falcon_heavy.jpg';
  public readonly STARSHIP: string = 'assets/images/rockets/starship.jpg';
  public readonly ROCKETS: Map<string, string> = new Map([
    ['falcon1', this.FALCON_1],
    ['falcon9', this.FALCON_9],
    ['falconheavy', this.FALCON_HEAVY],
    ['starship', this.STARSHIP],
  ]);
  public readonly ROCKET_ICON: string = 'assets/images/rockets/rocket.svg';

  constructor() {}
}
