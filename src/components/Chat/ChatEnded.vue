<template>
  <v-container fluid class="pa-8 mt-8">
    <v-row align="center" class="w-100">
      <v-form ref="form" class="w-100">
        <div>The agent has closed this chat. We hope your query was satisfied.</div>
        <v-btn
          outlined
          color="rgb(240, 96, 37)"
          class="mr-4 my-4"
          @click="onBackToVivrBtnClicked"
        >Back to Visual IVR</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChatEnded",
  props: {},
  data() {
    return {};
  },
  methods: {
    onBackToVivrBtnClicked() {
      this.$store.dispatch("revertChatInitForm");
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
