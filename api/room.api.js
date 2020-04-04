const ROOM_URL = process.env.API_BASE_URL

export default class RoomAPI {
  constructor($axios) {
    this.$axios = $axios
  }

  getRoomList() {
    return this.$axios.request({
      url: `${ROOM_URL}?keyword=jakarta&sd=2020-04-05&ed=2020-05-05&duration=1&additional=1`,
      method: 'GET'
    })
  }

  getRoomDetail() {
    return this.$axios.request({
      url: `${ROOM_URL}/detail?slug=roomme-the-nine-kuningan&start_date=2020-04-04&end_date=2020-05-04`,
      method: 'GET'
    })
  }
}
