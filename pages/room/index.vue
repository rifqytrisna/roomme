<template>
  <section>
    <v-container>
      <SearchFilter />
      <RoomBreadcrumb></RoomBreadcrumb>
    </v-container>
    <v-container>
      <div class="d-flex">
        <v-col md="3">
          <SideFilter @filterApply="filteredRoom"></SideFilter>
        </v-col>
        <v-col md="9">
          <div v-if="roomList.length !== 0">
            <v-card
              v-for="room in roomList"
              :key="room.id"
              style="box-shadow: 0 3px 10px #eaeaea;"
              min-width="200"
              flat
              class="pa-5 mb-6"
              @click="detail(room.name)"
            >
              <RoomListCard :room="room" />
            </v-card>
          </div>
          <div v-else>
            <h1>
              tidak ada data
            </h1>
          </div>
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
    RoomListCard: () => import('~/app/room/components/RoomListCard'),
    SideFilter: () => import('~/app/filter/SideFilter')
  },
  async asyncData({ $axios }) {
    const res = await new RoomAPI($axios).getRoomList()
    const data = res.data.data.building

    return {
      data
    }
  },
  created() {
    this.setData()
  },
  data: () => ({
    roomList: []
  }),
  methods: {
    detail(roomName) {
      this.$router.push({
        path: '/room/details',
        query: {
          roomName
        }
      })
    },
    setData() {
      this.roomList = this.data
    },
    filteredRoom(value) {
      let filterRoom = this.data
      if (value !== null) {
        filterRoom = filterRoom.filter((item) => {
          return item.category.includes(value)
        })
        this.roomList = filterRoom
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
