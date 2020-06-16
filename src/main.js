import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueChatScroll from "vue-chat-scroll";
import Transitions from "vue2-transitions";
import VueSocketIO from "vue-socket.io";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "https://bl-socket-server.herokuapp.com",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.use(VueChatScroll);

Vue.use(Transitions);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
