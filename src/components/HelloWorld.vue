<template>
  <v-container> </v-container>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {
      ecosystem: [
        {
          text: "vuetify-loader",
          href: "https://github.com/vuetifyjs/vuetify-loader/tree/next",
        },
        {
          text: "github",
          href: "https://github.com/vuetifyjs/vuetify/tree/next",
        },
        {
          text: "awesome-vuetify",
          href: "https://github.com/vuetifyjs/awesome-vuetify",
        },
      ],
      importantLinks: [
        {
          text: "Chat",
          href: "https://community.vuetifyjs.com",
        },
        {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify",
        },
        {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs",
        },
        {
          text: "Articles",
          href: "https://medium.com/vuetify",
        },
      ],
      whatsNext: [
        {
          text: "Explore components",
          href: "https://vuetifyjs.com",
        },
        {
          text: "Roadmap",
          href: "https://vuetifyjs.com/en/introduction/roadmap/",
        },
        {
          text: "Frequently Asked Questions",
          href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        },
      ],
    };
  },
  computed: {
    info() {
      return this.$store.getters["binance/getInfo"];
    },
  },
  methods: {
    async pick() {
      await this.$store.dispatch("binance/get", "BTCUSDT");
    },
    subscribe() {
      this.$store.dispatch("binance/subscribe", "BTCUSDT");
      this.$store.dispatch("binance/unsubscribe");
    },
  },
});
</script>
