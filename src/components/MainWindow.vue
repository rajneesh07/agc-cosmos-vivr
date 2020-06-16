<template>
  <v-card
    :width="myWidth"
    height="100%"
    elevation="2"
    class="agc-chat-window d-flex flex-column"
    :class="{ rounded: $vuetify.breakpoint.smAndUp }"
  >
    <v-card-title class="agc-chat-header">
      <chat-header></chat-header>
    </v-card-title>
    <hr class="agc-separator" />

    <div class="flex-grow-1">
      <!--<chat-init v-if="isInChatMode && isChatStateInit"></chat-init>-->
      <chat-body v-if="isInChatMode && isChatStateActive"></chat-body>
      <chat-requested v-if="isInChatMode && isChatStateRequested"></chat-requested>
      <chat-ended v-if="isInChatMode && isChatStateEnded"></chat-ended>
      <vivr v-if="isInVivrMode"></vivr>
    </div>
    <hr class="agc-separator" />
    <div class="interactive-response" v-if="isLastMessageInteractive">
      <chip-response :message="lastMessage"></chip-response>
    </div>

    <user-entry v-if="isInChatMode && isChatStateActive"></user-entry>
    <control-bar v-if="isInVivrMode"></control-bar>
  </v-card>
</template>

<script>
import ChatHeader from "./Chat/ChatHeader";
import ChatBody from "./Chat/ChatBody.vue";
import UserEntry from "./Chat/UserEntry.vue";
import ChipResponse from "./Responses/ChipResponse.vue";
import Vivr from "./VIVR/Vivr.vue";
import ControlBar from "./VIVR/ControlBar.vue";
import ChatRequested from "./Chat/ChatRequested.vue";
import ChatEnded from "./Chat/ChatEnded.vue";

export default {
  name: "MainWindow",
  props: {
    myWidth: {
      type: String,
      default: "800px"
    }
  },
  components: {
    ChatHeader,
    ChatBody,
    UserEntry,
    ChipResponse,
    Vivr,
    ControlBar,
    ChatRequested,
    ChatEnded
  },
  computed: {
    isInChatMode() {
      return this.$store.getters.getUiMode === "chat";
    },

    isInVivrMode() {
      return this.$store.getters.getUiMode === "vivr";
    },

    isChatStateInit() {
      return this.$store.getters.getChatState === "INIT";
    },
    isChatStateRequested() {
      return this.$store.getters.getChatState === "REQUESTED";
    },

    isChatStateActive() {
      return this.$store.getters.getChatState === "ACTIVE";
    },
    isChatStateEnded() {
      return this.$store.getters.getChatState === "ENDED";
    },

    messageList() {
      return this.$store.getters.getMessageList;
    },
    lastMessage() {
      if (this.messageList.length > 0) {
        return this.messageList[this.messageList.length - 1];
      } else {
        return null;
      }
    },
    isLastMessageInteractive() {
      if (this.messageList.length > 0) {
        return this.lastMessage.isInteractive;
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agc-chat-window {
  margin: auto;
}
.agc-chat-window.rounded {
  border-radius: 14px !important;
}

.agc-chat-header {
  background-color: rgb(240, 96, 37);
  color: white;
}
.agc-separator {
  border: 1px solid #f0f0f0;
}
</style>
