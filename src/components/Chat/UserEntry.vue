<template>
  <div class="pa-4 d-flex white">
    <!-- <v-btn
      rounded
      color="rgb(240, 96, 37)"
      class="white--text"
      @click.native="toggleBotState"
    >{{isChatBot?'Live':'Bot'}}</v-btn>-->
    <v-textarea
      class="px-2"
      no-resize
      auto-grow
      outlined
      rounded
      dense
      hide-details
      row-height="1"
      name="user-entry-text"
      v-model="typedMessage"
      @keydown.enter="handleEnter"
      @keydown.enter.prevent
    ></v-textarea>
    <v-btn rounded color="rgb(240, 96, 37)" class="white--text" @click.native="sendMessage">Send</v-btn>
  </div>
</template>

<script>
export default {
  name: "UserEntry",
  props: {},
  data() {
    return {
      typedMessage: null
    };
  },
  methods: {
    toggleBotState() {
      this.$store.dispatch("toggleBotState");
    },
    handleEnter(e) {
      if (e.shiftKey) return console.log("New line", e);
      else {
      }
      this.sendMessage();
    },
    sendMessage() {
      if (this.typedMessage && this.typedMessage.length > 0) {
        const newMessage = {
          type: "text",
          isInteractive: false,
          content: {
            text: this.typedMessage
          },
          self: true
        };
        this.$store.dispatch("processNewLocalMessage", newMessage);
        this.typedMessage = "";
      }
    }
  },
  computed: {
    isUserTyping() {
      return this.typedMessage && this.typedMessage.length > 0;
    },
    isChatBot() {
      return this.$store.getters.getIsChatBot;
    }
  },
  watch: {
    isUserTyping(isTyping) {
      if (isTyping) {
        this.$store.dispatch("emitUserTypingStarted");
      } else {
        this.$store.dispatch("emitUserTypingStopped");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-text-field input {
  font-size: 0.2em;
}
</style>
