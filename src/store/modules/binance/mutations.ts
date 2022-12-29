import { IBinanceState } from "@/store/modules/binance/state";
import { MutationTree } from "vuex";
import { IBinanceResponse } from "@/types";

export enum mutationTypes {
  SUBSCRIBE_EVENT = "subscribe",
  UNSUBSCRIBE_EVENT = "unsubscribe",
  GET_EVENT = "get",
}

export const mutations: MutationTree<IBinanceState> = {
  [mutationTypes.GET_EVENT]: (state: IBinanceState, data: IBinanceResponse) => {
    state.getInfo = data;
  },

  [mutationTypes.SUBSCRIBE_EVENT]: (state: IBinanceState, data: WebSocket) => {
    state.WS.push(data);
  },

  [mutationTypes.UNSUBSCRIBE_EVENT]: (state: IBinanceState) => {
    const ws = state.WS.pop();
    if (ws !== undefined) ws.close();
  },
};
