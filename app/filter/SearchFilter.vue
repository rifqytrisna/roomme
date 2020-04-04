<template>
  <div>
    <v-card class="mx-auto pa-5" flat style="box-shadow: 0 3px 10px #eaeaea;">
      <div class="d-flex">
        <v-col md="10">
          <div class="d-flex align-baseline">
            <v-col md="4" class="pa-1">
              <span>Search Location</span>
              <v-text-field
                :prepend-inner-icon="icons.mdiMagnify"
                placeholder="Placeholder"
                outlined
                hide-details
              />
            </v-col>
            <v-col md="8" class="d-flex pa-1">
              <v-col md="3" class="pa-1">
                <span>Check-In</span>
                <v-text-field
                  placeholder="Placeholder"
                  outlined
                  hide-details
                  :prepend-inner-icon="icons.mdiCalendar"
                />
                <!-- <v-date-picker
                    v-model="picker"
                    scrollable
                    :width="272"
                    locale="id"
                    :min="new Date().toISOString().substr(0, 10)"
                    :prepend-inner-icon="icons.mdiCalendar"
                  /> -->
              </v-col>
              <v-col md="3" class="pa-1">
                <span>Duration</span>
                <v-select
                  :items="itemDurations"
                  outlined
                  placeholder="0 Month"
                  :prepend-inner-icon="icons.mdiTimerSand"
                />
              </v-col>
              <v-col md="3" class="pa-1">
                <span>Additional</span>
                <v-select
                  :items="itemAdditionals"
                  outlined
                  placeholder="0 Day"
                  :prepend-inner-icon="icons.mdiTimerSand"
                />
              </v-col>
              <v-col md="3" class="pa-1">
                <span>Check-Out</span>
                <v-text-field
                  :prepend-inner-icon="icons.mdiCalendar"
                  placeholder="Placeholder"
                  outlined
                  hide-details
                />
              </v-col>
            </v-col>
          </div>
        </v-col>
        <v-col md="2">
          <v-btn
            class="mt-8"
            color="#f05147"
            outlined
            min-width="167"
            min-height="46"
          >
            Search
          </v-btn>
        </v-col>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mdiMagnify, mdiCalendar, mdiTimerSand, mdiClockOutline } from '@mdi/js'
export default {
  created() {
    this.icons = {
      mdiMagnify,
      mdiCalendar,
      mdiTimerSand,
      mdiClockOutline
    }
    this.itemDurations = [
      '1 Month',
      '2 Months',
      '3 Months',
      '4 Months',
      '5 Months',
      '6 Months',
      '7 Months',
      '8 Months',
      '9 Months',
      '10 Months',
      '11 Months',
      '12 Months'
    ]
    this.itemAdditionals = [
      '0 Day',
      '1 Day',
      '2 Days',
      '3 Days',
      '4 Days',
      '5 Days',
      '6 Days',
      '7 Days'
    ]
    this.picker = new Date().toISOString().substr(0, 10)
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-input__slot {
    min-height: 46px !important;
  }

  .v-input__prepend-inner {
    margin-top: 10px;
  }
}
</style>
