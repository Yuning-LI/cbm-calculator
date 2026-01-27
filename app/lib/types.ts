export interface CargoItem {
  id: string;
  qty: number;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export type UnitSystem = 'metric' | 'imperial';
