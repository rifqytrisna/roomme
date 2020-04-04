<template>
  <div class="filter-wrapper pa-5">
    <span class="text-primary fz-16" style="font-weight: 800">
      Filter
    </span>
    <div class="category d-flex">
      <v-chip-group class="grow">
        <v-chip
          v-for="category in categories"
          :key="category"
          small
          class="my-2 mr-2 text-secondary"
          outlined
          @click="filterByCategory(category)"
        >
          {{ category }}
        </v-chip>
      </v-chip-group>
    </div>

    <v-divider class="mb-4" />

    <span>
      Select Facilities
    </span>
    <div class="facilities">
      <v-col
        cols="6"
        class="pa-0"
        v-for="facility in facilities"
        :key="facility"
      >
        <v-checkbox
          hide-details
          color="#454545"
          :label="facility"
          :value="facility"
        />
      </v-col>
    </div>

    <v-divider class="my-4" />

    <span>
      Price Range
    </span>
    <div class="d-flex justify-space-between">
      <div class="price">{{ range[0] | priceIdr }}</div>
      <v-divider class="mt-5" />
      <div class="price">
        {{ range[1] | priceIdr }}
      </div>
    </div>
    <v-range-slider
      v-model="range"
      color="#f05147"
      :min="1000"
      :max="10000"
      height="50"
    />
    <v-btn @click="filterApply" outlined color="#f05147" min-width="270">
      Apply
    </v-btn>
  </div>
</template>

<script>
export default {
  created() {
    this.categories = ['Campur', 'Putra', 'Putri']
    this.facilities = [
      'Air Conditioning',
      'Free Wifi',
      'Water Heater',
      'Bed Size',
      'Living Room',
      'Bathroom',
      'Parking Area',
      'Kitchen',
      'Fridge/kulkas',
      'Lemari',
      'Kursi',
      'CCTV',
      'Meja',
      'TV'
    ]
  },
  data: () => ({
    range: [1000, 10000],
    selectedCategory: ''
  }),
  methods: {
    filterByCategory(value) {
      this.selectedCategory = value
    },
    filterApply() {
      this.$emit('filterApply', this.selectedCategory)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-wrapper {
  box-shadow: 0 3px 10px #eaeaea;
}

.facilities {
  max-width: 272px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
}

::v-deep {
  .v-label {
    font-size: 13px !important;
  }
}

.price {
  padding: 4px;
  border: 1px solid #8e8e8e;
  border-radius: 8px;
  min-width: 125px;
}
</style>
