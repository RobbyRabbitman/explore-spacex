export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Diameter;
  engines: Engines;
  first_flight: string;
  first_stage: FirstStage;
  height: Diameter;
  id: string;
  landing_legs: LandingLegs;
  mass: Mass;
  name: string;
  payload_weights: PayloadWeight[];
  second_stage: SecondStage;
  stages: number;
  success_rate_pct: number;
  type: string;
  wikipedia: string;
}

export interface Diameter {
  feet: number;
  meters: number;
}

export interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: string;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  thrust_to_weight: number;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface FirstStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  reusable: boolean;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
}

export interface LandingLegs {
  number: number;
  material: string;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface PayloadWeight {
  id: string;
  kg: number;
  lb: number;
  name: string;
}

export interface SecondStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  payloads: Payloads;
  thrust: Thrust;
}

export interface Payloads {
  option_1: string;
  composite_fairing: CompositeFairing;
}

export interface CompositeFairing {
  height: Diameter;
  diameter: Diameter;
}
