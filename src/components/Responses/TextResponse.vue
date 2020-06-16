<template>
  <div>
    <!-- <v-sheet
      elevation="2"
      class="py-2 px-4 m-3 agc-message-bubble"
      :dark="!message.self"
      :color="getMessageColor(message.self)"
      :class="{ 'left-aligned': !message.self, 'right-aligned': message.self }"
    >{{ message.content.text }}</v-sheet>-->

    <v-card
      dense
      elevation="3"
      class="mx-auto my-2 agc-message-bubble"
      max-width="344"
      outlined
      :class="{ 'left-aligned': !message.self, 'right-aligned': message.self }"
      rounded
      :dark="!message.self"
      :color="getMessageColor(message.self)"
    >
      <v-card-text class="pa-3">{{ message.content.text }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TextResponse",
  props: {
    message: {
      text: String,
      self: Boolean
    }
  },
  methods: {
    getMessageAlignment(isSelf) {
      if (isSelf === true) {
        return "end";
      } else {
        return "start";
      }
    },
    getMessageColor(isSelf) {
      if (isSelf === false) {
        return "#636363";
      } else {
        return "#f3f3f3";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agc-message-container {
  list-style: none;
  width: 100%;
  clear: both;
}

.agc-message-bubble {
  border: 1px solid black;
  max-width: 70%;
  margin-bottom: 10px !important;
  border-radius: 25px !important;

  min-width: 30%;
  font-weight: bold;
}
.agc-user-img-container {
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
}

.left-aligned {
  float: left;
  border-top-left-radius: 0px !important;
}
.right-aligned {
  float: right;
  border-top-right-radius: 0px !important;
}
</style>
