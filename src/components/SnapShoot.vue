<template>
  <div class="content">
    <div class="symbol-type">Symbol = {{ symbol }}</div>
    <div class="wrapper">
      <vuetable :items="glass.bids">Bids</vuetable>
      <vuetable :items="glass.asks">Asks</vuetable>
    </div>
  </div>
</template>

<script>
import vuetable from "./VueTable.vue";
export default {
  name: "SnapShoot",
  components: { vuetable },
  data: () => ({
    glass: {
      bids: null,
      asks: null,
    },
    symbol: "BTCUSDT",
    ws: null,
  }),
  async created() {
    this.$bus.$on("symbol", (symbol) => {
      this.symbol = symbol;
      this.ws.close();
      this.wsSubscribe();
    });
    console.log(this.symbol);
    await this.snapshot();
    this.wsSubscribe();
  },
  methods: {
    async snapshot() {
      let glass = await this.sdk.get(this.symbol); // делаем снепшот
      glass.bids = glass.bids.reverse(); // переварачиваем, чтобы сверху таблицы были новые данные
      glass.asks = glass.asks.reverse(); // переварачиваем, чтобы сверху таблицы были новые данные
      this.glass = glass; // отрисовываем снепшот
    },
    wsSubscribe() {
      this.ws = this.sdk.subscribe(this.symbol);
      this.ws.onmessage = async (event) => {
        // запускаем callBack при получении сообщений
        let data = JSON.parse(event.data); // арсим данные в Json
        let [asksAdd, bidsAdd] = [
          // создаём массивы новых данных
          data.a.filter((item) => item[1] != 0), // отфильтровываем 0-ые сделки
          data.b.filter((item) => item[1] != 0), // отфильтровываем 0-ые сделки
        ];
        asksAdd.reverse(); // переварачиваем, чтобы сверху таблицы были новые данные
        bidsAdd.reverse(); // переварачиваем, чтобы сверху таблицы были новые данные
        this.glass.asks.splice(
          this.glass.asks.length - asksAdd.length,
          asksAdd.length
        ); // удаляем из буффера asks столько данных сколько пришло
        this.glass.bids.splice(
          this.glass.bids.length - bidsAdd.length,
          bidsAdd.length
        ); // удаляем из буффера bids столько данных сколько пришло
        this.glass.asks = [...asksAdd, ...this.glass.asks]; // дописываем полученные данные в буфер asks
        this.glass.bids = [...bidsAdd, ...this.glass.bids]; // дописываем полученные данные в буфер bids
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 0;
  /*padding: 10px 0 0 0;*/
}
.symbol-type {
  text-align: center;
  width: 100%;
  background-color: black;
  color: white;
}
</style>
