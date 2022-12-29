import { IBinanceState, initialState } from "./state";
import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const binance: Module<IBinanceState, any> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
