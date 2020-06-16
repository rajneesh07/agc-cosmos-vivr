<template>
  <li :key="message.id" class="text-left agc-message-container">
    <text-response v-if="message.type === 'text'" :message="message"></text-response>
    <image-response v-if="message.type === 'image'" :message="message"></image-response>
    <video-response v-if="message.type === 'video'" :message="message"></video-response>
    <card-response v-if="message.type === 'card'" :message="message"></card-response>
    <file-response v-if="message.type === 'file'" :message="message"></file-response>
  </li>
</template>

<script>
import TextResponse from "./../Responses/TextResponse";
import CardResponse from "./../Responses/CardResponse";
import ImageResponse from "./../Responses/ImageResponse";
import VideoResponse from "./../Responses/VideoResponse";
import FileResponse from "./../Responses/FileResponse";

export default {
  name: "Message",
  components: {
    TextResponse,
    CardResponse,
    ImageResponse,
    VideoResponse,
    FileResponse
  },
  props: {
    message: {}
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
      if (isSelf === true) {
        return "#636363";
      } else {
        return "#f3f3f3";
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
