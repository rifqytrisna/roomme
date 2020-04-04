<template>
  <v-card
    style="box-shadow: 0 3px 10px #eaeaea;"
    min-width="200"
    flat
    class="pa-5 mb-6"
  >
    <v-tabs color="#f05147">
      <v-tab>Booking Summary</v-tab>
      <v-tab>Schedule Free Visit</v-tab>
      <v-tab-item class="mt-3">
        <p>- Simple and easy Booking</p>
        <p>- Fast payment managemen system</p>
        <v-btn large color="#f05147" min-width="375">
          Select Room
        </v-btn>
      </v-tab-item>
      <v-tab-item> </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<style lang="scss" scoped>
::v-deep {
  .v-btn__content {
    color: #fff;
  }
}
</style>
