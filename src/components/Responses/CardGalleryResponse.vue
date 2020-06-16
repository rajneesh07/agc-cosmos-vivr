<template>
  <v-container fluid class="agc-card-gallery-container">
    <v-row no-gutters>
      <v-col cols="9" v-for="(item,i) in stateResponse.content.items" :key="i" class="mx-auto">
        <div class="agc-card-gallery-item my-5">
          <v-badge
            color="rgb(240, 96, 37)"
            overlap
            left
            content="based on your usage"
            offset-x="75%"
            :value="i===0"
          >
            <v-card class="mx-auto" max-width="250" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div v-if="item.content.length>0">
                    <div class="my-4" v-for="(content,j) in item.content" :key="j">{{content}}</div>
                  </div>
                  <v-list-item-title class="title mb-1">{{item.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{item.subTitle}}</v-list-item-subtitle>
                </v-list-item-content>

                <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
              </v-list-item>

              <v-card-actions>
                <v-btn outlined class="mx-auto" color="rgb(240, 96, 37)" width="120px">Buy</v-btn>
              </v-card-actions>
            </v-card>
          </v-badge>
          <!-- <v-card class="mx-2 my-4" max-width="344" outlined>
            <v-badge overlap left content="based on your usage" offset-x="75%" :value="i===0">
              <v-card-title class="mx-auto">{{item.title}}</v-card-title>
              <v-card-subtitle class="black-text">{{item.subTitle}}</v-card-subtitle>
              <v-card-text v-for="(content,j) in item.content" :key="j">{{content}}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn
                  block
                  v-for="(action,j) in item.actions"
                  :key="j"
                  color="primary"
                >{{action.label}}</v-btn>
              </v-card-actions>
            </v-badge>
          </v-card>-->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { FadeTransition } from "vue2-transitions";
export default {
  name: "CardGalleryResponse",
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

.agc-card-gallery-container {
  max-height: 50vh;
}
</style>
