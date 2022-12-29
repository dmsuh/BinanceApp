export interface IBinanceResponse {
  lastUpdateId: number;
  bids: Array<Array<string>>;
  asks: Array<Array<string>>;
}

export interface IWsBinance {
  id?: number;
  name: string;
  value: string;
  unit: string;
}

export interface IBinanceItem {
  id: number;
  name: string;
  value: string;
  unit: string;
}
