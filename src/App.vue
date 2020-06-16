<template>
  <div id="app">
    <!-- App.vue -->

    <v-app>
      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="pa-0 ma-0 d-flex flex-column justify-center h-100">
          <div
            :class="{'agc-container-desktop':$vuetify.breakpoint.smAndUp ,'h-100':!$vuetify.breakpoint.smAndUp }"
          >
            <router-view></router-view>
          </div>

          <!-- <main-window></main-window> -->
        </v-container>
      </v-content>

      <!-- <v-footer app>
        class="pa-0 ma-0 pa-sm-8 ma-sm-8"
        <v-chip link @click.native="addCardResponse">Card</v-chip>
        <v-chip link @click.native="addChipResponse">Chip</v-chip>
        <v-chip link @click.native="addImageResponse">Image</v-chip>
        
      </v-footer>-->
    </v-app>
  </div>
</template>

<script>
// import MainWindow from "./components/MainWindow.vue";

export default {
  name: "App",
  components: {
    // MainWindow
  },
  beforeMount() {
    if (this.$route.params.state) {
      const urlState = this.$route.params.state.toUpperCase();
      this.$store.dispatch("updateCurrentStateFromUrl", urlState);
      console.log("router state=" + urlState);
    }

    if (!this.$store.getters.getChatId) {
      // this.$store.dispatch("emitNewChatSessionRequest");
    } else if (this.isChatRoomJoined) {
      this.$store.dispatch("emitUpdateChatSessionRequest");
    }
  },
  mounted() {
    function resetHeight() {
      // reset the body height to that of the inner browser
      document.body.style.height = window.innerHeight + "px";
    }
    // reset the height whenever the window's resized
    window.addEventListener("resize", resetHeight);
    // called to initially set the height.
    resetHeight();
  },
  computed: {
    isChatRoomJoined() {
      const chatState = this.$store.getters.getChatState;
      return chatState === "REQUESTED" || chatState === "ACTIVE";
    }
  },
  methods: {
    addCardResponse() {
      this.$store.dispatch("processNewLocalMessage", {
        self: false,
        type: "card",

        content: {
          title: "Sample Card Response",
          subTitle: "This is the subTitle",
          isInteractive: false,
          imageUrl:
            "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_d1tpogp9/def_height/500/def_width/500/version/100012/type/1",
          buttons: [
            {
              text: "Accept"
            },
            {
              text: "Decline"
            }
          ],
          text:
            "This is a detailed description of the information to be displayed on the card"
        }
      });
    },
    addChipResponse() {
      this.$store.dispatch("processNewLocalMessage", {
        self: false,
        type: "suggestionChips",
        isInteractive: true,
        content: {
          suggestionChips: [
            {
              label: "Account Balance",
              postBack: "Account Balance",
              icon: "account-circle"
            },
            {
              label: "Mini Statement",
              postBack: "Mini Statement",
              icon: "format-list-numbered"
            },
            {
              label: "Card Balance",
              postBack: "Card Balance",
              icon: "credit-card"
            },
            {
              label: "PIN Change",
              postBack: "PIN Change",
              icon: "fingerprint"
            },
            {
              label: "Card Balance",
              postBack: "Card Balance",
              icon: "credit-card"
            },
            {
              label: "PIN Change",
              postBack: "PIN Change",
              icon: "fingerprint"
            },
            {
              label: "Card Balance",
              postBack: "Card Balance",
              icon: "credit-card"
            },
            {
              label: "PIN Change",
              postBack: "PIN Change",
              icon: "fingerprint"
            }
          ]
        }
      });
    },
    addImageResponse() {
      this.$store.dispatch("processNewLocalMessage", {
        self: false,
        type: "image",
        isInteractive: false,
        content: {
          caption: "Introduction Video",
          imageUrl:
            "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_d1tpogp9/def_height/500/def_width/500/version/100012/type/1"
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: #f1f1f1;
  overflow: hidden;
  font-size: 0.9em !important;
}
.h-90 {
  height: 90%;
}
.h-100 {
  height: 95%;
}
.h-75 {
  height: 80%;
}
.w-100 {
  width: 100%;
}
.agc-container-desktop {
  height: 90%;
}
</style>
