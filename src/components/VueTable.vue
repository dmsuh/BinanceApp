<template>
  <div class="w-100">
    <v-table class="table">
      <caption class="table__caption_bg">
        <slot></slot>
      </caption>
      <thead class="table__thead">
        <tr class="table-row">
          <th class="table-row__th">Price</th>
          <th class="table-row__th">Ammount</th>
          <th class="table-row__th table-row__th-total_hide">Total</th>
        </tr>
      </thead>
    </v-table>
    <v-table class="table wrapTable">
      <tbody class="table__tbody">
        <tr class="table-row" v-for="(item, index) in items" :key="index">
          <td class="table-row__td">{{ item[0] }}</td>
          <td class="table-row__td">{{ item[1] }}</td>
          <td class="table-row__td table-row__td-total_hide">
            {{ item[0] * item[1] }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: "VueTable",
  props: ["items"],
};
</script>

<style lang="scss" scoped>
.wrapTable {
  height: calc(100vh - 210px);
  width: 100%;
  overflow: hidden;
  position: relative !important;
}
.wrapTable::-webkit-scrollbar {
  display: none;
}
.wrapTable:hover {
  overflow-y: scroll;
}
.table {
  position: relative !important;
  border-collapse: collapse;
  width: 100%;
  background-color: gold;
  text-align: center;
}
.table:hover {
  margin-right: 1vh;
}
.table-row__th,
.table-row__td {
  border: 1px solid grey;
  padding: 10px 15px;
  text-align: center !important;
  width: 20vh;
}
.table-row__th th {
  width: 5vh;
  padding: 10px 15px;
}

.table__tbody {
  overflow-y: scroll;
}

.table__caption_bg {
  background-color: floralwhite;
}
@media screen and (max-device-width: 840px) {
  .table-row__th-total_hide {
    display: none;
  }
  .table-row__td-total_hide {
    display: none;
  }
  .wrapTable {
    overflow: scroll;
  }
}
</style>
