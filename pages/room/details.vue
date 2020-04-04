<template>
  <section>
    <v-container>
      <SearchFilter />
      <RoomBreadcrumb></RoomBreadcrumb>
    </v-container>
    <v-container>
      <RoomDetailsJumbotron :room-detail="roomDetail" />
      <RoomDetailsDescription :room-detail="roomDetail" />
      <RoomDetailsAmenities :room-detail="roomDetail" />
      <div class="d-flex mt-6">
        <v-col md="7">
          <v-card
            style="box-shadow: 0 3px 10px #eaeaea;"
            v-for="room in roomType"
            :key="room.id"
            min-width="200"
            flat
            class="pa-5 mb-6"
          >
            <RoomTypeCard
              :room-type="room"
              :facilities="roomDetail.facilities"
            />
          </v-card>
        </v-col>
        <v-col md="4">
          <RoomBookingSummary />
        </v-col>
      </div>
    </v-container>
  </section>
</template>

<script>
import RoomAPI from '~/api/room.api'

export default {
  layout: 'blank',
  components: {
    SearchFilter: () => import('~/app/filter/SearchFilter'),
    RoomBreadcrumb: () => import('~/app/room/components/RoomBreadcrumb'),
    RoomDetailsJumbotron: () =>
      import('~/app/room/components/RoomDetailsJumbotron'),
    RoomDetailsDescription: () =>
      import('~/app/room/components/RoomDetailsDescription'),
    RoomDetailsAmenities: () =>
      import('~/app/room/components/RoomDetailsAmenities'),
    RoomTypeCard: () => import('~/app/room/components/RoomTypeCard'),
    RoomBookingSummary: () => import('~/app/room/components/RoomBookingSummary')
  },
  async asyncData({ $axios }) {
    const res = await new RoomAPI($axios).getRoomDetail()
    const roomDetail = res.data.data.building
    const roomType = res.data.data.room_type

    return {
      roomDetail,
      roomType
    }
  }
}
</script>

<style lang="scss" scoped></style>
