<template>
  <div class="d-flex">
    <div class="img-wrapper">
      <v-img
        class="mb-3"
        :src="roomType.photos[0].photo"
        max-width="370"
        max-height="175"
      />
      <div class="bot-img d-flex">
        <v-img
          v-for="botPhoto in roomType.photos.slice(1, 5)"
          :src="botPhoto.photo"
          :key="botPhoto.seq_no"
          max-width="118"
          max-height="70"
          class="mr-2"
        >
        </v-img>
      </div>
    </div>
    <div class="info-wrapper ml-4">
      <h3 class="mb-2" style="font-size: 22px">
        {{ roomType.name }}
      </h3>
      <div class="d-flex mb-2 text-secondary" style="font-size:14px">
        <span>
          Room Size: 150 sqm
        </span>
        <v-divider vertical class="mx-2" />
        <span> Bed Size: {{ roomType.bed }} </span>
      </div>
      <div class="facility mb-2">
        <div
          v-for="facility in facilities.slice(0, 6)"
          :key="facility.icon"
          class="d-flex"
        >
          <v-img
            max-width="16"
            max-height="16"
            :src="facility.icon"
            class="mr-1 mt-1"
          />
          <span class="mb-2 mr-3 text-secondary" style="font-size:14px">
            {{ facility.name }}
          </span>
        </div>
        <span class="see-more-amenities">
          See more amenities
        </span>
      </div>
      <div>
        <p class="price text-right">
          {{ roomType.price | priceIdr }}
          <span class="text-secondary" style="font-size:12px">
            /Month
          </span>
        </p>
      </div>
      <v-btn large outlined color="#8e8e8e" min-width="320">
        Select Room
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomType: { type: Object, default: () => ({}) },
    facilities: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-divider {
    border-color: #454545;
  }
}

.facility {
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
}

.price {
  font-size: 26px;
  color: #f05147;
  font-weight: 800;
}

.see-more-amenities {
  font-size: 12px;
  color: #1d83c2;
}
</style>
