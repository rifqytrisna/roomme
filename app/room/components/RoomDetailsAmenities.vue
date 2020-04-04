<template>
  <div>
    <h2 class="mb-5">
      Building Amenities
    </h2>
    <div class="wrapper d-flex grow justify-center">
      <div
        class="facility d-flex flex-column align-center mx-7"
        v-for="facility in roomDetail.facilities"
        :key="facility.icon"
      >
        <v-img :src="facility.icon" max-width="40" class="mb-2" />
        <span>{{ facility.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { roomDetail: { type: Object, default: () => ({}) } }
}
</script>

<style lang="scss" scoped></style>
