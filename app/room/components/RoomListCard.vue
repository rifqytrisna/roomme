<template>
  <div class="d-flex justify-space-between">
    <div class="d-flex">
      <v-img
        :src="room.photos[0].photo"
        max-width="304"
        max-height="173"
        style="border-radius: 4px"
      />
      <div class="info-list ml-4">
        <v-chip small class="my-2 mr-2 text-secondary" outlined>
          {{ room.category }}
        </v-chip>
        <h2 class="mb-2">
          {{ room.name }}
        </h2>
        <div class="d-flex mb-3">
          <v-icon size="20">
            {{ icons.mdiMapMarker }}
          </v-icon>
          <span class="text-secondary">
            {{ room.address }}
          </span>
        </div>
        <div class="facility">
          <div
            v-for="facility in facilities"
            :key="facility.icon"
            class="d-flex"
          >
            <v-img
              max-width="16"
              max-height="16"
              :src="facility.icon"
              class="mr-1 mt-1"
            />
            <span class="mb-2 mr-3 text-secondary">
              {{ facility.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="my-auto text-right fz-12 text-secondary">
      <span>
        Start from
      </span>
      <p class="price mb-0">
        {{ room.price | priceIdr }}
      </p>
      <span>
        /Month
      </span>
    </div>
  </div>
</template>

<script>
import { mdiMapMarker } from '@mdi/js'
export default {
  created() {
    this.icons = {
      mdiMapMarker
    }
    this.facilities = [
      {
        name: 'Air Conditioning',
        icon: 'https://cdn.roomme.id/icons/RoomMe_Icon_Air%20Conditioning.svg'
      },
      {
        name: 'Kitchen',
        icon: 'https://cdn.roomme.id/icons/RoomMe_Icon_Kitchen.svg'
      },
      {
        name: 'CCTV',
        icon: 'https://cdn.roomme.id/icons/RoomMe_Icon_Security.svg'
      },
      {
        name: 'Water Heater',
        icon: 'https://cdn.roomme.id/icons/RoomMe_Icon_Water%20Heater.svg'
      },
      {
        name: 'Free Wi-Fi',
        icon: 'https://cdn.roomme.id/icons/RoomMe_Icon_Free%20Wi-Fi.svg'
      },
      {
        name: 'Parking Area',
        icon: 'https://cdn.roomme.id/icons/RoomMe_Icon_Parking%20Area.svg'
      }
    ]
  },
  props: { room: { type: Object, default: () => ({}) } }
}
</script>

<style lang="scss" scoped>
.facility {
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
}

.price {
  font-size: 22px;
  color: #f05147;
  font-weight: 800;
}
</style>
