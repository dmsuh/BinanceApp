import { mutationTypes } from "./mutations";
import { ActionTree } from "vuex";
import { SDK } from "@/plugins/SDK";
import { IBinanceState } from "@/store/modules/binance/state";

export enum actionTypes {
  UNSUBSCRIBE = "unsubscribe",
  SUBSCRIBE = "subscribe",
  GET = "get",
}

export const actions: ActionTree<IBinanceState, any> = {
  [actionTypes.GET]: async ({ commit }, payload: string) => {
    const response = await SDK.get(payload);
    console.log(response);

    commit(mutationTypes.GET_EVENT, response);
  },

  [actionTypes.SUBSCRIBE]: async ({ commit }, payload: string) => {
    const response = await SDK.subscribe(payload);
    console.log(response);

    commit(mutationTypes.SUBSCRIBE_EVENT, response);
  },

  [actionTypes.UNSUBSCRIBE]: async ({ commit }) => {
    commit(mutationTypes.UNSUBSCRIBE_EVENT);
  },
};
