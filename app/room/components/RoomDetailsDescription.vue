<template>
  <div class="mt-5">
    <v-chip small class="my-2 mr-2 text-secondary" outlined>
      {{ roomDetail.service }}
    </v-chip>
    <v-row>
      <v-col md="8">
        <h2 class="room-name">
          {{ roomName }}
        </h2>
        <div class="d-flex align-center justify-space-between">
          <div>
            <span>
              {{ roomDetail.address }}, {{ roomDetail.provinsi }}, Indonesia
            </span>
            <a
              :href="
                `https://www.google.com/maps/search/?api=1&query=${roomDetail.latitude},${roomDetail.longitude}`
              "
              target="_blank"
              class="view-on-map"
            >
              View on Map
            </a>
          </div>
          <div>
            <div class="d-flex">
              <div v-for="item in icons" :key="item">
                <v-icon :color="item.color" class="mr-2">
                  {{ item.icon }}
                </v-icon>
              </div>
            </div>
            <div class="d-flex">
              <RoomRatings :stars-length="4" class="mr-3" />
              <span>
                4.0(97)
              </span>
            </div>
          </div>
        </div>
        <p class="mt-5">
          {{ roomDetail.descriptions }}
        </p>
      </v-col>
      <v-col md="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15865.319323938824!2d106.822339!3d-6.220165!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1586009631839!5m2!1sid!2sid"
          width="400"
          height="300"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiWhatsapp, mdiContentCopy } from '@mdi/js'

export default {
  created() {
    this.roomName = this.$route.query.roomName
    this.icons = [
      {
        icon: mdiFacebook,
        color: '#4267B2'
      },
      {
        icon: mdiTwitter,
        color: '#00acee'
      },
      {
        icon: mdiWhatsapp,
        color: '#4FCE5D'
      },
      {
        icon: mdiContentCopy,
        color: '#D3D3D3'
      }
    ]
  },
  props: { roomDetail: { type: Object, default: () => ({}) } },
  components: {
    RoomRatings: () => import('./RoomRatings')
  }
}
</script>

<style lang="scss" scoped>
.view-on-map {
  text-decoration: none;
  color: #1d83c2;
}
</style>
