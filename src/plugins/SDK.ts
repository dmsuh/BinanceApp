import axios from "axios";
export const SDK = {
  async get(symbol: string): Promise<any> {
    return await axios
      .get(` https://api.binance.com/api/v3/depth?symbol=${symbol}`)
      .then((resolve) => {
        return resolve.data;
      })
      .catch(() => {
        console.log("Произошла ошибка");
      });
  },
  subscribe(symbol: string): WebSocket {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`
    );
    return ws;
  },
};
