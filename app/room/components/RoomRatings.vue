<template>
  <div class="ratings d-flex">
    <div v-for="star in starsLength" :key="`fullStar-${star}`">
      <v-icon color="#eed555">{{ icons.mdiStar }}</v-icon>
    </div>
    <div v-for="star in emptyStars" :key="`emptyStar-${star}`">
      <v-icon>{{ icons.mdiStar }}</v-icon>
    </div>
  </div>
</template>

<script>
import { mdiStar } from '@mdi/js'
export default {
  created() {
    this.icons = { mdiStar }
  },
  computed: {
    emptyStars() {
      return 5 - this.starsLength
    }
  },
  props: {
    starsLength: { type: Number, required: true }
  }
}
</script>

<style lang="scss" scoped>
.ratings :not(:last-child) {
  margin-right: 7px;
}
</style>
