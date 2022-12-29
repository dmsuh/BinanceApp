<template>
  <v-app>
    <v-main>
      <v-app-bar color="blue" flat>
        <v-app-bar-title class="align-center">BinanceApp</v-app-bar-title>
        <template v-slot:extension>
          <v-spacer />
          <v-tabs slider-color="'red'" v-model="headerData.currentTab">
            <v-tab v-for="tab in headerData.tabs" :value="tab" :key="tab">
              {{ tab }}</v-tab
            >
          </v-tabs>
          <v-spacer />
        </template>
      </v-app-bar>
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
export default defineComponent({
  name: "App",
  data: () => ({
    headerData: {
      tabs: ["SnapShoot", "DiffList"],
      currentTab: "SnapShoot",
    },
  }),
  computed: {
    currentTabComponent() {
      return this.headerData.currentTab;
    },
  },
  components: {
    SnapShoot: defineAsyncComponent(() => import("./components/SnapShoot.vue")),
    DiffList: defineAsyncComponent(() => import("./components/DiffList.vue")),
  },
});
</script>
<style lang="scss">
.VAppBar {
  justify-content: center !important;
}
</style>
