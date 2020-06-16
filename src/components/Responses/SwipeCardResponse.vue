<template>
  <v-sheet class="mx-auto" max-width="700">
    <v-slide-group show-arrows center-active>
      <v-slide-item v-for="(item,i) in stateResponse.content.items" :key="i">
        <div style="agc-swipe-card-item">
          <v-card class="mx-5" max-width="344" elevation="3">
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
            <v-card-actions>
              <v-btn
                text
                v-for="(action,j) in item.actions"
                :key="j"
                :color="action.color"
              >{{action.label}}</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  <span v-for="(line,lineIndex) in item.content" :key="lineIndex">
                    {{line}}
                    <br />
                    <br />
                  </span>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
// import { FadeTransition } from "vue2-transitions";
export default {
  name: "SwipeCardResponse",
  components: {
    // FadeTransition
  },
  props: {
    stateResponse: {}
  },
  data() {
    return {
      showListGroup: true,
      show: false,

      model: 1
    };
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agc-swipe-card-item {
  height: 300px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
