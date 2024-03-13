<template>
  <div>
    <b-modal title="Well Edit" ref="WellEditModal" hide-footer>
      <template #modal-header>
        <h5 class="mb-0">Well Edit</h5>
      </template>
      <b-form @submit="Save" v-if="item">
        <div class="row">
          <div class="form-group col-12">
            <label>Licence Number</label>
            <b-form-input
              v-model="item.LicenceNumber"
              required
              :disabled="isDisable()"
            ></b-form-input>
          </div>
          <div class="form-group col-12">
            <label>Licensee Name</label>
            <b-form-input v-model="item.LicenseeName" required></b-form-input>
          </div>
          <div class="form-group col-12">
            <label>Surface Location</label>
            <b-form-input
              v-model="item.SurfaceLocation"
              required
            ></b-form-input>
          </div>
          <div class="form-group col-12">
            <label>Failure Type</label>
            <b-form-input v-model="item.FailureType"></b-form-input>
          </div>
          <div class="form-group col-12">
            <label>Failure Top Depth (mKB)</label>
            <b-form-input v-model="item['FailureTopDepth(mKB)']"></b-form-input>
          </div>
          <div class="form-group col-12">
            <label>Failure Depth Bottom (mKB)</label>
            <b-form-input
              v-model="item['FailureDepthBottom(mKB)']"
            ></b-form-input>
          </div>
          <div class="form-group col-12">
            <label>Reported Resolution</label>
            <b-form-input v-model="item.ReportedResolution"></b-form-input>
          </div>
          <div class="mt-3">
            <b-button v-on:click="Hide" variant="outline">Cancel</b-button>
            <b-button type="submit" variant="primary">Submit</b-button>
          </div>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { save } from "../data/dataProcessor";

export default {
  name: "app",
  props: {
    item: {
      default: () => {
        return {
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
      },
    },
    isNewItem: {
      default: () => false,
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    Show() {
      this.$refs.WellEditModal.show();
    },
    Hide() {
      this.$refs.WellEditModal.hide();
    },
    Save(evt) {
      //   console.log("TESTING", { ...this.item });
      evt.preventDefault();
      const result = save({ ...this.item });
      console.log("Save Result", result);
      this.$emit("saved", { result });
      this.Hide();
    },
    isDisable() {
      console.log(this.isNewItem);
      return !this.isNewItem;
    },
  },
};
</script>
<style scoped></style>
