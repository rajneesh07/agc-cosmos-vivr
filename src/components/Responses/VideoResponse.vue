<template>
  <div>
    <v-sheet
      v-if="isChat"
      class="py-2 px-4 ma-3 agc-message-bubble"
      :dark="!finalResponse.self"
      :color="getMessageColor(finalResponse.self)"
      :class="{ 'left-aligned': !finalResponse.self, 'right-aligned': finalResponse.self }"
    >
      <div :href="finalResponse.content.videoUrl" target="_blank">
        <video width="320" height="240" controls>
          <source :src="finalResponse.content.videoUrl" type="video/mp4" />Your browser does not support the video tag.
        </video>
      </div>
      <!-- {{ finalResponse.content.caption }} -->
    </v-sheet>
    <div :href="finalResponse.content.videoUrl" target="_blank" v-else>
      <iframe
        width="320"
        height="240"
        :src="finalResponse.content.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        v-if="finalResponse.content.isYoutube"
      ></iframe>
      <video width="320" height="240" controls v-else>
        <source :src="finalResponse.content.videoUrl" type="video/mp4" />Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoResponse",

  props: {
    message: {
      content: {
        imageUrl: String,
        caption: String
      }
    },
    stateResponse: {}
  },

  methods: {
    getMessageAlignment(isSelf) {
      if (isSelf === true) {
        return "end";
      } else {
        return "start";
      }
    },
    getMessageColor(isSelf) {
      if (isSelf === false) {
        return "#636363";
      } else {
        return "#f3f3f3";
      }
    }
  },
  computed: {
    isChat() {
      if (this.message) {
        return true;
      } else {
        return false;
      }
    },
    finalResponse() {
      if (this.isChat) {
        return this.message;
      } else {
        return this.stateResponse;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agc-message-container {
  list-style: none;
  width: 100%;
  clear: both;
}

.agc-message-bubble {
  border: 1px solid black;
  max-width: 70%;
}
.agc-user-img-container {
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
}

.left-aligned {
  float: left;
}
.right-aligned {
  float: right;
}
</style>
