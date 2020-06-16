<template>
  <v-container fluid class="pa-8 mt-8">
    <v-row align="center" class="w-100">
      <v-form ref="form" class="w-100">
        <v-label>Please fill in your details so we can connect you to an agent</v-label>
        <br />
        <br />
        <v-text-field v-model="firstName" label="First Name" required></v-text-field>

        <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
        <v-text-field v-model="phonenum" label="Phone Number" required></v-text-field>

        <v-btn sm color="success" class="mr-4 mb-4" @click="emitAgentChatRequest">Request</v-btn>
        <v-btn
          color="pink"
          class="mr-4 mb-4 white--text"
          @click="onBackToVivrBtnClicked"
        >Back to Visual IVR</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChatInit",
  props: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: ""
    };
  },
  methods: {
    emitAgentChatRequest() {
      const request = {
        participant: {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber
        }
      };
      this.$store.dispatch("emitAgentChatRequest", request);
    },
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
