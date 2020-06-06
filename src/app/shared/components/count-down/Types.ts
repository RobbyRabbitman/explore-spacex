export class Time {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  constructor(seconds: number) {
    this.days = Math.floor(seconds / 86400);
    seconds -= this.days * 86400;
    this.hours = Math.floor((seconds / 3600) % 24);
    seconds -= this.hours * 3600;
    this.minutes = Math.floor((seconds / 60) % 60);
    seconds -= this.minutes * 60;
    this.seconds = Math.floor(seconds % 60);
  }
}
