export interface Launch {
  details: string;
  id: number;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: string;
  launch_date_utc: string;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_year: string;
  links: Links;
  mission_id: string[];
  mission_name: string;
  rocket: LaunchRocket;
  static_fire_date_unix: string;
  static_fire_date_utc: string;
  telemetry: Telemetry;
  tentative_max_precision: string;
  upcoming: boolean;
  ships: Ship[];
}

export interface LaunchSite {
  site_id: string;
  site_name_long: string;
  site_name: string;
}

export interface Links {
  article_link: string;
  flickr_images: string[];
  mission_patch_small: string;
  mission_patch: string;
  presskit: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_media: string;
  reddit_recovery: string;
  video_link: string;
  wikipedia: string;
}

export interface LaunchRocket {
  fairings: Fairings;
  first_stage: PurpleFirstStage;
  rocket_name: string;
  rocket_type: string;
  rocket: RocketRocket;
  second_stage: FluffySecondStage;
}

export interface Fairings {
  recovered: boolean;
  recovery_attempt: boolean;
  reused: boolean;
  ship: string;
}

export interface PurpleFirstStage {
  cores: CoreElement[];
}

export interface CoreElement {
  block: number;
  core: CoreCore;
  flight: number;
  gridfins: boolean;
  land_success: boolean;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;
  legs: boolean;
  reused: boolean;
}

export interface CoreCore {
  asds_attempts: number;
  asds_landings: number;
  block: number;
  id: number;
  missions: CoreMission[];
  original_launch: number;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  status: string;
  water_landing: boolean;
}

export interface CoreMission {
  flight: number;
  name: string;
}

export interface RocketRocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Diameter;
  engines: Engines;
  first_flight: string;
  first_stage: FluffyFirstStage;
  height: Diameter;
  id: number;
  landing_legs: LandingLegs;
  mass: Mass;
  name: string;
  payload_weights: PayloadWeight[];
  second_stage: PurpleSecondStage;
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

export interface FluffyFirstStage {
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

export interface PurpleSecondStage {
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

export interface FluffySecondStage {
  block: number;
  payloads: Payload[];
}

export interface Payload {
  customers: string[];
  id: number;
  manufacturer: string;
  nationality: string;
  norad_id: number[];
  orbit_params: OrbitParams;
  orbit: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  payload_type: string;
  reused: boolean;
}

export interface OrbitParams {
  apoapsis_km: number;
  arg_of_pericenter: number;
  eccentricity: number;
  epoch: string;
  inclination_deg: number;
  lifespan_years: number;
  longitude: number;
  mean_anomaly: number;
  mean_motion: number;
  periapsis_km: number;
  period_min: number;
  raan: number;
  reference_system: string;
  regime: string;
  semi_major_axis_km: number;
}

export interface Ship {
  abs: number;
  active: boolean;
  attempted_landings: number;
  class: number;
  course_deg: number;
  home_port: string;
  id: number;
  image: string;
  imo: number;
  missions: ShipMission[];
  mmsi: number;
  model: string;
  name: string;
  position: Position;
  roles: string[];
  speed_kn: number;
  status: string;
  successful_landings: number;
  type: string;
  url: string;
  weight_kg: number;
  weight_lbs: number;
  year_built: number;
}

export interface ShipMission {
  flight: string;
  name: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Telemetry {
  flight_club: string;
}
