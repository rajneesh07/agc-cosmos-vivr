<template>
  <div class="h-100 d-flex flex-column justify-center agc-vivr-body">
    <div v-if="isCurrentStateHomeState" class="headline pa-7">
      Welcome to
      <br />Banglalink Mitra
    </div>
    <div
      class="py-3 px-4"
      :class="{'subtitle-2':isCurrentStateHomeState, 'title':!isCurrentStateHomeState}"
    >{{currentStateResponse.content.title}}</div>
    <CollapseTransition>
      <menu-response
        v-if="currentStateResponse.type==='menu'"
        :state-response="currentStateResponse"
        :key="currentState.state"
      ></menu-response>
      <swipe-card-response
        v-if="currentStateResponse.type==='swipeCards'"
        :state-response="currentStateResponse"
      ></swipe-card-response>
      <card-gallery-response
        v-if="currentStateResponse.type==='cardGallery'"
        :state-response="currentStateResponse"
      ></card-gallery-response>
      <file-response
        v-if="currentStateResponse.type === 'file'"
        :state-response="currentStateResponse"
      ></file-response>
      <map-response
        v-if="currentStateResponse.type === 'map'"
        :state-response="currentStateResponse"
      ></map-response>
      <video-response
        v-if="currentStateResponse.type === 'video'"
        :state-response="currentStateResponse"
      ></video-response>
    </CollapseTransition>
  </div>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";
import MenuResponse from "./../Responses/MenuResponse";
import SwipeCardResponse from "./../Responses/SwipeCardResponse";
import CardGalleryResponse from "./../Responses/CardGalleryResponse";
import FileResponse from "./../Responses/FileResponse";
import MapResponse from "./../Responses/MapResponse";
import VideoResponse from "./../Responses/VideoResponse";
export default {
  name: "Vivr",
  components: {
    CollapseTransition,
    MenuResponse,
    SwipeCardResponse,
    CardGalleryResponse,
    FileResponse,
    MapResponse,
    VideoResponse
  },
  props: {},
  data() {
    return {
      showListGroup: true,
      show: false,
      model: 1
    };
  },
  methods: {
    onListItemClicked(item) {
      if (item.nextState) {
        this.$store.dispatch("updateCurrentState", item.nextState);
      }

      console.log(item.nextState);
    }
  },
  computed: {
    isCurrentStateHomeState() {
      return this.currentState.state === this.homeState;
    },
    homeState() {
      return this.$store.getters.getHomeState;
    },
    currentState() {
      if (this.$store.getters.getCurrentState) {
        return this.$store.getters.getCurrentState;
      } else {
        return this.homeState;
      }
    },
    currentStateResponse() {
      return this.$store.getters.getStateResponse(this.currentState).response;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agc-vivr-body {
  flex: 1;
  overflow-y: auto;
  max-height: 60vh;
  position: relative;
  top: 25px;
}
</style>
