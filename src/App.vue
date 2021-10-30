<template>
  <div>
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'
import "@ui5/webcomponents/dist/Popover.js";
import "@ui5/webcomponents/dist/Badge.js";
import "@ui5/webcomponents/dist/Link.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Select.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableGroupRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

export default {
  name: 'App',
  components: {
    Table,
  }
}

</script>

<style>

</style>
