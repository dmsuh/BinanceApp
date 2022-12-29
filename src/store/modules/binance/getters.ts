import { GetterTree } from "vuex";
import { IBinanceState } from "@/store/modules/binance/state";

export const getters: GetterTree<IBinanceState, any> = {
  getInfo: (state) => state.getInfo,
};
