import Vue from "vue";
import Vuex from "vuex";
import vivr from "./modules/vivr";
// import VuexPersist from "vuex-persist";

// const vuexPersist = new VuexPersist({
//   key: "vivr",
//   storage: sessionStorage
// });

Vue.use(Vuex);
const initialState = () => {
  return {
    ui_mode: "vivr",
    chatState: null,
    chatroom: null,
    chatId: null,
    isChatBot: true,
    interactionHistory: [],
    isTyping: false,
    messageList: [
      // {
      //   type: "text",
      //   self: false,
      //   isInteractive: false,
      //   content: {
      //     text: "Hi, Welcome to AGC's Assistant. You can type your query, or click on one of the following to get started"
      //   }
      // },
      // {
      //   self: false,
      //   type: "suggestionChips",
      //   isInteractive: true,
      //   content: {
      //     suggestionChips: [
      //       {
      //         label: "Caller Tunes",
      //         postBack: "Caller Tunes",
      //         icon: "music"
      //       },
      //       {
      //         label: "Account Balance",
      //         postBack: "Account Balance",
      //         icon: "cash"
      //       },
      //       {
      //         label: "APN Settings",
      //         postBack: "APN Settings",
      //         icon: "cog"
      //       }
      //     ]
      //   }
      // }
    ],
    messageResponses: [
      {
        query: "S0001",
        response: {
          self: false,
          type: "card",
          content: {
            title: "ABCD",
            subTitle: "This is the subtitle",
            isInteractive: false,
            imageUrl:
              "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_d1tpogp9/def_height/500/def_width/500/version/100012/type/1",
            buttons: [
              {
                text: "Submit"
              },
              {
                text: "Cancel"
              },
              {
                text: "Cancel"
              }
            ],
            text: "Account Balance as of " + new Date()
          }
        }
      },
      {
        query: "Hello",
        response: {
          type: "text",
          self: false,
          isInteractive: false,
          content: {
            text: "Hi, how may I help you?"
          }
        }
      },
      {
        query: "Need to upload file",
        response: {
          type: "file",
          self: false,
          isInteractive: false,
          content: {
            text: "Hi, how may I help you?"
          }
        }
      },
      {
        query: "Recharge Now",
        response: {
          type: "text",
          self: false,
          isInteractive: false,
          content: {
            text: "Sure, your recharge is successful"
          }
        }
      },
      {
        query: "Activate Caller Tune",
        response: {
          type: "text",
          self: false,
          isInteractive: false,
          content: {
            text: "Your Caller Tune has been successfully activated"
          }
        }
      },
      {
        query: "Deactivate Caller Tune",
        response: {
          type: "text",
          self: false,
          isInteractive: false,
          content: {
            text: "Your Caller Tune has been successfully deactivated"
          }
        }
      },
      {
        query: "Change Caller Tune",
        response: {
          type: "text",
          self: false,
          isInteractive: false,
          content: {
            text: "Your Caller Tune successfully changed"
          }
        }
      },
      {
        query: "APN Settings",
        response: {
          self: false,
          type: "image",
          isInteractive: false,
          content: {
            caption: "APN Settings",
            imageUrl: "https://i.imgur.com/yJiqQg8.png"
          }
        }
      },

      {
        query: "Show Video",
        response: {
          self: false,
          type: "video",
          isInteractive: false,
          content: {
            caption: "Sample Video",
            videoUrl:
              "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
          }
        }
      },
      {
        query: "Account Balance",
        response: {
          self: false,
          type: "card",
          content: {
            title: "Rs. 9999.00",
            subTitle: "Acct. 987612341234",
            isInteractive: false,
            imageUrl:
              "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_d1tpogp9/def_height/500/def_width/500/version/100012/type/1",
            buttons: [
              {
                text: "Recharge Now"
              }
            ],
            text: "Account Balance as of " + new Date()
          }
        }
      },
      {
        query: "Caller Tunes",
        response: {
          self: false,
          type: "suggestionChips",
          isInteractive: true,
          content: {
            suggestionChips: [
              {
                label: "Activate Caller Tune",
                postBack: "Activate Caller Tune",
                icon: "account-circle"
              },
              {
                label: "Deactivate Caller Tune",
                postBack: "Deactivate Caller Tune",
                icon: "account-circle"
              },
              {
                label: "Change Caller Tune",
                postBack: "Change Caller Tune",
                icon: "account-circle"
              }
            ]
          }
        }
      }
    ]
  };
};

export default new Vuex.Store({
  // plugins: [vuexPersist.plugin],
  state: initialState(),
  modules: {
    vivr
  },
  mutations: {
    ADD_MESSAGE_TO_MESSAGE_LIST(state, newMessage) {
      newMessage.index = state.messageList.length;
      state.messageList.push(newMessage);
    },

    // UPDATE_CURRENT_STATE_FROM_URL(state, nextState) {
    //   state.currentState = nextState;
    // },
    // UPDATE_STATE_TO_PREVIOUS_STATE(state) {
    //   const stateResp = state.stateResponses.filter(response => {
    //     return (
    //       response.state.toLowerCase() === state.currentState.toLowerCase()
    //     );
    //   })[0];
    //   // console.log("stateResp=", stateResp);
    //   state.currentState = stateResp.previousState;
    // },
    // UPDATE_STATE_TO_HOME_STATE(state) {
    //   state.currentState = state.homeState;
    // },

    UPDATE_INTERACTION_HISTORY(state, nextState) {
      if (
        nextState &&
        state.interactionHistory[state.interactionHistory.length - 1] !==
        nextState
      ) {
        state.interactionHistory.push(nextState);
        console.log(
          "interaction hist---=" + JSON.stringify(state.interactionHistory)
        );
      } else {
        console.log("not updating interaction history. input=" + nextState);
      }
    },

    SET_CHAT_SESSION_ID(state, resp) {
      state.chatId = resp.chatId;
    },

    SET_CHAT_STATE_INIT(state) {
      state.chatState = "INIT";
    },
    SET_UI_MODE_CHAT(state) {
      state.ui_mode = "chat";
    },

    REVERT_CHAT_INIT(state) {
      state.ui_mode = "vivr";
      state.chatState = null;
    },

    SET_CHAT_STATE_REQUESTED(state) {
      state.chatState = "REQUESTED";
    },
    SET_CHAT_STATE_ACTIVE(state, payload) {
      state.chatState = "ACTIVE";
    },
    SET_CHAT_ROOM(state, chatroom) {
      state.chatroom = chatroom;
    },
    SET_CHAT_BOT_STATE(state, botState) {
      state.isChatBot = botState;
    },
    SET_CHAT_STATE_ENDED(state) {
      this.state.chatState = "ENDED";
      // this.state.ui_mode = "vivr";
    },
    SET_IS_TYPING(state) {
      state.isTyping = true;
    },
    RESET_IS_TYPING(state) {
      state.isTyping = false;
    }
  },
  actions: {
    /*****************************************************************************************
     * used to process a new local message. local message means entered in this vue app by the user
     *****************************************************************************************/
    processNewLocalMessage({ commit, getters, dispatch }, newMessage) {
      dispatch("addNewMessage", newMessage);
      if (getters.getIsChatBot) {
        dispatch("invokeLocalBotResponse", newMessage);
      }

      dispatch("emitNewChatMessageToChatServer", newMessage);
    },

    processNewRemoteMessage({ dispatch }, newRemoteMessage) {
      newRemoteMessage.self = false;
      dispatch("addNewMessage", newRemoteMessage);
    },

    /* Main method to add messages to the local chat transcript in Vuex state. */

    addNewMessage({ commit }, newMessage) {
      commit("ADD_MESSAGE_TO_MESSAGE_LIST", newMessage);
      console.log("newMessage=" + JSON.stringify(newMessage.content.text));
    },

    /*****************************************************************************************
     * if local static bot is needed, this method is used to refer to the messageResponses
     * state object to return a response for user's query
     *****************************************************************************************/
    invokeLocalBotResponse({ getters, commit }, newMessage) {
      const getItem = item => {
        return (
          item.query.toLowerCase() === newMessage.content.text.toLowerCase()
        );
      };

      const botResponse = getters.getMessageResponses.filter(getItem);
      console.log("botResponse=" + JSON.stringify(botResponse));
      if (botResponse && botResponse.length > 0) {
        commit("ADD_MESSAGE_TO_MESSAGE_LIST", botResponse[0].response);
      }
    },

    /* ***********Chat States ************** */
    toggleBotState({ commit, getters }) {
      commit("SET_CHAT_BOT_STATE", !getters.getIsChatBot);
    },
    showChatInitForm({ commit }) {
      commit("SET_CHAT_STATE_INIT");
    },

    revertChatInitForm({ commit }) {
      commit("REVERT_CHAT_INIT");
    },
    setChatStateRequested({ commit }, resp) {
      commit("SET_UI_MODE_CHAT");
      commit("SET_CHAT_STATE_REQUESTED");
      commit("SET_CHAT_BOT_STATE", false);
    },
    setChatStateActive({ commit }, payload) {
      commit("SET_CHAT_STATE_ACTIVE", payload);
    },
    setchatroom({ commit }, chatroom) {
      commit("SET_CHAT_ROOM", chatroom);
    },

    /* ***********VIVR state machine************** */

    async emitNewChatSessionRequest({ commit }) {
      await this._vm.$socket.emit(
        "REQUEST_CHAT_SESSION",
        { clientType: "customer" },
        response => {
          console.log("resp=" + JSON.stringify(response));
          commit("SET_CHAT_SESSION_ID", response);
        }
      );
    },

    emitUpdateChatSessionRequest({ getters }) {
      console.log("emitUpdateChatSessionRequest(): action dispatched");

      this._vm.$socket.emit(
        "UPDATE_CHAT_ROOM_ID",
        { chatroom: getters.getChatId },
        response => {
          console.log(
            "emitUpdateChatSessionRequest(): socket event emitted. resp=" +
            JSON.stringify(response)
          );
        }
      );
    },
    async emitAgentChatRequest({ getters, dispatch, commit }, request) {
      // await dispatch("emitNewChatSessionRequest");

      request.interactionHistory = getters.getInteractionHistory;

      this._vm.$socket.emit("REQUEST_AGENT_CHAT", request, response => {
        commit("SET_CHAT_SESSION_ID", response);
        dispatch("setChatStateRequested", response);
      });
    },

    // sends a chat message to back-end socket server
    emitNewChatMessageToChatServer({ getters }, newMessage) {
      const request = {
        message: newMessage,
        chatroom: getters.getchatroom
      };
      this._vm.$socket.emit("NEW_CHAT_MESSAGE", request, response => {
        console.log("sent chat message=" + JSON.stringify(response));
      });
    },

    emitUserTypingStarted({ getters }) {
      this._vm.$socket.emit(
        "USER_TYPING_STARTED",
        { chatId: getters.getChatId },
        response => {
          console.log("sent chat message=" + JSON.stringify(response));
        }
      );
    },
    emitUserTypingStopped({ getters }) {
      this._vm.$socket.emit(
        "USER_TYPING_STOPPED",
        { chatId: getters.getChatId },
        response => {
          console.log("sent chat message=" + JSON.stringify(response));
        }
      );
    },

    endChatSession({ commit }, payload) {
      commit("SET_CHAT_STATE_ENDED", payload);
    },
    SOCKET_CHAT_SESSION_STARTED({ dispatch }, payload) {
      console.log("chat session started. payload=" + JSON.stringify(payload));
      dispatch("setChatStateActive", payload);
      dispatch("setchatroom", payload.chatroom);
    },
    SOCKET_NEW_CHAT_MESSAGE({ dispatch }, payload) {
      console.log(
        "new message received from server:" + JSON.stringify(payload)
      );
      dispatch("processNewRemoteMessage", payload.message);
    },
    SOCKET_CHAT_SESSION_ENDED({ dispatch }, payload) {
      console.log("chat session has ended :" + JSON.stringify(payload));
      dispatch("endChatSession", payload.message);
    },
    SOCKET_AGENT_TYPING_STARTED({ commit }, payload) {
      commit("SET_IS_TYPING");
    },
    SOCKET_AGENT_TYPING_STOPPED({ commit }, payload) {
      commit("RESET_IS_TYPING");
    }
  },

  getters: {
    getMessageList(state) {
      return state.messageList;
    },
    getMessageListLength(state) {
      return state.messageList.length;
    },
    getMessageResponses(state) {
      return state.messageResponses;
    },
    getUiMode(state) {
      return state.ui_mode;
    },
    getChatState(state) {
      return state.chatState;
    },
    getChatId(state) {
      return state.chatId;
    },
    getchatroom(state) {
      return state.chatroom;
    },
    getIsChatBot(state) {
      return state.isChatBot;
    },
    getInteractionHistory(state) {
      return state.interactionHistory;
    },
    getIsTyping(state) {
      return state.isTyping;
    }
  }
});
