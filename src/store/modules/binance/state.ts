import { IBinanceResponse } from "@/types";

export interface IBinanceState {
  WS: WebSocket[];
  getInfo: IBinanceResponse;
}

export const initialState = (): IBinanceState => {
  return {
    WS: [],

    getInfo: {
      lastUpdateId: 100000,
      bids: [["0"]],
      asks: [["0"]],
    },
  };
};
