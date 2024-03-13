<template>
  <div>
    <div class="heading">
      <h2>Well Failures</h2>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>

    <b-table
      id="my-table"
      hover
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #head(Actions)>
        <a
          class="center"
          href="javascript: void(0)"
          v-on:click="() => NewItem()"
          ><b-icon-plus-lg scale="1.5" variant="success"></b-icon-plus-lg
        ></a>
      </template>
      <template #cell(Actions)="data">
        <div class="icon-container">
          <a href="javascript: void(0)" v-on:click="() => EditItem(data.item)"
            ><b-icon-pencil-square scale="1.5" variant="primary"
          /></a>
          <a href="javascript: void(0)" v-on:click="() => DeleteItem(data.item)"
            ><b-icon-trash-fill scale="1.5" variant="danger"
          /></a>
        </div>
      </template>
    </b-table>
    <div class="pagination-items">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
    <wellEdit
      ref="WellEdit"
      :item="item"
      :isNewItem="isNewItem"
      @saved="WellEditSaved"
    ></wellEdit>
  </div>
</template>

<script>
import { list, deleteOne } from "../data/dataProcessor";
import WellEdit from "./wellEdit.vue";

export default {
  name: "app",
  data() {
    return {
      items: [],
      item: null,
      isNewItem: false,
      perPage: 10,
      currentPage: 1,
      fields: [
        "Actions",
        "LicenceNumber",
        "LicenseeName",
        "SurfaceLocation",
        "DetectionDate",
        "FailureTopDepth(mKB)",
        "FailureDepthBottom(mKB)",
        "ReportedResolution",
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  components: {
    WellEdit,
  },
  created() {},
  mounted() {
    this.PopulateData();
  },
  methods: {
    PopulateData() {
      this.items = list();
    },
    NewItem() {
      this.isNewItem = true;
      this.item = {
        LicenceNumber: "",
        CurrentLicenceStatus: "",
        LicenseeName: "",
        OrigBACode: "",
        SurfaceLocation: "",
        DetectionDate: "",
        ReportDate: "",
        ReportStatus: "",
        FailureType: "",
        "FailureTopDepth(mKB)": "",
        "FailureDepthBottom(mKB)": "",
        ReportedResolution: "",
        ReportedResolutionDate: "",
        SteamSchemeType: "",
        ConnectionType: "",
        FinalDrillDate: "",
      };

      this.$refs.WellEdit.Show();
    },
    EditItem(item) {
      this.isNewItem = false;
      this.item = Object.assign({}, item);

      this.$refs.WellEdit.Show();
    },
    WellEditSaved(savedItem) {
      if (savedItem) {
        console.log("repoulating");
        this.PopulateData();
      }
    },
    DeleteItem(item) {
      if (confirm("Delete Item?")) {
        deleteOne(item.LicenceNumber);
        this.items = list();
      }
    },
  },
};
</script>
<style scoped>
h1 {
  color: blue;
}
.icon-container {
  display: flex;
}
.icon-container > a {
  margin: 4px;
}
.heading {
  display: flex;
  justify-content: space-between;
}
.center {
  margin-left: 12px;
}
</style>
