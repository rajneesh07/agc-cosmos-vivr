
<template>
  <v-bottom-navigation color="purple lighten-1 " elevation="0">
    <v-btn value="back" @click="goToPreviousState">
      <span>{{menuLabels[currentLanguage][0]}}</span>
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>

    <v-btn value="home" @click="goToHomeState">
      <span>{{menuLabels[currentLanguage][1]}}</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="agentTransfer" @click="onAgentTransferButtonClicked()">
      <span>{{menuLabels[currentLanguage][2]}}</span>
      <v-icon>mdi-face-agent</v-icon>
    </v-btn>

    <v-btn value="lang" @click="toggleLanguage">
      <span>{{menuLabels[currentLanguage][3]}}</span>
      <v-icon>mdi-translate</v-icon>
    </v-btn>

    <!-- <v-switch v-model="switch1" :label="lang"></v-switch> -->
  </v-bottom-navigation>
</template>

<script>
// import Message from "./Message";

export default {
  name: "ControlBar",
  components: {
    // Message
  },
  props: {},
  data() {
    return {
      isEnglish: true,
      currentLanguage: "eng",
      menuLabels: {
        eng: ["Back", "Home", "AgentChat", "हिन्दी"],
        ban: ["वापस", "घर", "एजेंट चैट", "English"]
      }
    };
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
      if (this.currentLanguage === "eng") {
        this.currentLanguage = "ban";
      } else {
        this.currentLanguage = "eng";
      }
      this.$store.dispatch("updateApplicationLanguage", this.currentLanguage);
    },
    goToPreviousState() {
      this.$store.dispatch("goToPreviousState");
    },
    goToHomeState() {
      this.$store.dispatch("goToHomeState");
    },
    onAgentTransferButtonClicked() {
      // this.$store.dispatch("showChatInitForm");
      const request = {
        participant: {
          firstName: "",
          lastName: "",
          phoneNumber: "9930135784"
        }
      };
      this.$store.dispatch("emitAgentChatRequest", request);
    }
  },
  computed: {
    currentState() {
      return this.$store.getters.getCurrentState;
    },
    currentStateResponse() {
      return this.$store.getters.getCurrentStateResponse.response.content.items;
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
}
.interactive-response {
  position: relative;
  top: 450px;
}
</style>
