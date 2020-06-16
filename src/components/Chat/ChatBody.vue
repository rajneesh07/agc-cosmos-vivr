C<template>
  <v-container fluid class="agc-chat-body pa-0 pb-4 d-flex flex-column" ref="agcChatBody">
    <span
      v-if="isChatStateRequested"
      class="pt-3 h3"
      color="grey"
    >Please wait, we are connecting you to an agent...</span>
    <ul class="pa-0 ma-4">
      <message v-for="message in staticMessageList" :key="message.id" :message="message"></message>
    </ul>
    <!-- <span v-if="isUserTyping">Agent typing ....</span> -->
  </v-container>
</template>

<script>
import Message from "./Message";

export default {
  name: "ChatBody",
  components: {
    Message
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    isUserTyping() {
      return this.$store.getters.getIsTyping;
    },
    isChatStateRequested() {
      return this.$store.getters.getChatState === "REQUESTED";
    },
    messageList() {
      return this.$store.getters.getMessageList;
    },
    staticMessageList() {
      const tempArr = [];
      if (this.messageList.length > 0) {
        for (let i = 0; i < this.messageList.length; i++) {
          if (!this.messageList[i].isInteractive) {
            tempArr.push(this.messageList[i]);
          }
        }
      }

      return tempArr;
    }
  },
  watch: {
    messageList(newList) {
      const that = this;
      setTimeout(function() {
        const container = that.$refs.agcChatBody;
        let firstTime = true;
        if (firstTime) {
          container.scrollTop = container.scrollHeight - container.clientHeight;
          firstTime = false;
        } else if (
          container.scrollTop + container.clientHeight ===
          container.scrollHeight
        ) {
          container.scrollTop = container.scrollHeight;
        }
      }, 100);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agc-chat-body {
  flex: 1;
  overflow-y: auto;
  /* min-height: 600px; */
  max-height: 600px;
}
.interactive-response {
  position: relative;
  top: 450px;
}
</style>
