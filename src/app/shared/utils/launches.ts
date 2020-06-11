import { Launch } from '../model/launch';

export const showCountDown = (launch: Launch): Boolean =>
  new Date(launch.launch_date_utc).getTime() > Date.now();
