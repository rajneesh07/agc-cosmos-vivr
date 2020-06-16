<template>
  <v-container v-if="isThisTheLastMessage || isVivr">
    <v-row>
      <v-col cols="12">
        <v-file-input
          v-if="(!isUploaded && isThisTheLastMessage) || (!isUploaded && isVivr)"
          v-model="files"
          color="deep-purple accent-4"
          counter
          label="File input"
          multiple
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >+{{ files.length - 2 }} File(s)</span>
          </template>
        </v-file-input>
        <div v-else>{{this.infomessage}}</div>
      </v-col>
      <v-col cols="12" v-if="files.length>0 && !isUploaded">
        <v-btn rounded color="rgb(240, 96, 37)" class="white--text" @click="onFileUploadClicked">
          <v-icon>mdi-file-upload</v-icon>Upload
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FileResponse",
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
