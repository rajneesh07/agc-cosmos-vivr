Ma<template>
  <v-container v-if="isThisTheLastMessage || isVivr">
    <iframe
      :src="stateResponse.content.mapurl"
      width="320"
      height="240"
      frameborder="0"
      style="border:0;"
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </v-container>
</template>

<script>
export default {
  name: "MapResponse",
  props: {
    message: {},
    stateResponse: {}
  },

  data() {
    return {
      files: [],
      isUploaded: false,
      infomessage: ""
    };
  },

  computed: {
    isVivr() {
      if (this.stateResponse) return true;
      else return false;
    },
    isThisTheLastMessage() {
      if (!this.isVivr) {
        return (
          this.message.index === this.$store.getters.getMessageListLength - 1
        );
      } else {
        return true;
      }
    }
  },
  methods: {
    onFileUploadClicked() {
      if (!this.isVivr) {
        this.isUploaded = !this.isUploaded;

        const newMessage = {
          type: "text",
          isInteractive: false,
          content: {
            text: "Thank you, your file has been uploaded"
          },
          self: false
        };
        this.$store.dispatch("processNewLocalMessage", newMessage);
      } else {
        this.isUploaded = !this.isUploaded;
        this.infomessage =
          "Thank you, your file has been uploaded. you may press the BACK or HOME button to continue";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
