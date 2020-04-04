<template>
  <div class="d-flex">
    <v-img
      :src="roomDetail.photos[0].photo"
      max-width="1120"
      max-height="510"
      class="mr-2"
    />
    <div>
      <v-img
        v-for="(sidePhoto, index) in roomDetail.photos.slice(1, 5)"
        :key="sidePhoto.seq_no"
        :src="sidePhoto.photo"
        max-width="214"
        max-height="118"
        class="mb-3 side-photo"
      >
        <div
          class="see-all d-flex align-center justify-center"
          v-if="index === 3"
        >
          See All 15 Photos
        </div>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  props: { roomDetail: { type: Object, default: () => ({}) } }
}
</script>

<style lang="scss" scoped>
.see-all {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
