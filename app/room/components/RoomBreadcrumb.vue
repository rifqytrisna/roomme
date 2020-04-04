<template>
  <v-breadcrumbs :items="breadcrumbs" class="pt-5 pb-0 pl-0">
    <template #item="{ item }">
      <v-breadcrumbs-item :to="item.path" exact>
        <span> {{ item.localeText }} </span>
      </v-breadcrumbs-item>
    </template>
    <template #divider>
      <v-icon>{{ icons.mdiChevronRight }}</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { mdiChevronRight } from '@mdi/js'

export default {
  created() {
    this.icons = {
      mdiChevronRight
    }
  },
  data: () => ({
    breadcrumbs: [
      { localeText: 'Home', path: '/room' },
      { localeText: 'Jakarta', path: '/' },
      { localeText: 'Jakarta Barat', path: '/' }
    ]
  })
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-breadcrumbs__item {
    color: #f05147;
  }
}
</style>
