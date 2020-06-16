<template>
  <v-card class="mx-auto" width="300" elevation="2">
    <v-list rounded dense shaped>
      <v-list-item-group v-model="model" color="#f06025">
        <v-list-item
          v-for="(item, i) in stateResponse.content.items"
          :key="i"
          @click="onListItemClicked(item)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
// import { FadeTransition } from "vue2-transitions";

export default {
  name: "MenuResponse",
  components: {
    // FadeTransition
  },
  props: {
    stateResponse: {}
  },
  data() {
    return {
      show: false,
      model: null
    };
  },
  methods: {
    onListItemClicked(item) {
      if (item.nextState) {
        this.$store.dispatch("updateCurrentState", item.nextState);
      }
      console.log(item.nextState);
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
.v-list-item__content{
flex:unset !important;
}
</style>
