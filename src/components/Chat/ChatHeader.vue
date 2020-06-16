<template>
  <v-container fluid class="d-flex flex-row justify-space-between pa-0" elevation="4">
    <v-avatar width="60px">
      <img src="https://logowiki.net/wp-content/uploads/imgp/Banglalink-Logo-1-6617.gif" alt="John" />
    </v-avatar>
    <div>
      <div>Banglalink Mitra</div>
      <div class="ml-2" style="font-size:0.75em" v-if="isTyping">typing.....</div>
    </div>

    <v-icon dark right class="float-right">mdi-dots-vertical</v-icon>
  </v-container>
</template>

<script>
export default {
  name: "ChatHeader",
  props: {},
  computed: {
    isTyping() {
      return this.$store.getters.getIsTyping;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
