import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

import { bus } from "./plugins/bus";
import { SDK } from "@/plugins/SDK";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    emitter: typeof bus;
    sdk: typeof SDK;
  }
}
const app = createApp(App).use(router).use(store).use(vuetify);
app.config.globalProperties.$bus = bus;
app.config.globalProperties.sdk = SDK;
app.mount("#app");
