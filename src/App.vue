<template>
  <div id="app" class="container">
    <wellTable></wellTable>
  </div>
</template>

<script>
import wellTable from "./components/wellTable.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    wellTable,
  },
};
</script>

<style>
body {
  background: #f1f1f1;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
