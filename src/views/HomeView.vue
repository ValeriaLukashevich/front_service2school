<template>
  <div>
  <div class="d-grid gap-3">
    <h4 class="w-25 ms-5 col-2">Viis viimast pakkumist</h4>

    <div class="ms-3 col-8">
      <table class="btn btn-outline-success">
        <thead>
        <tr>
          <th scope="col">Pakkumine</th>
          <th scope="col">Kirjeldus</th>
          <th scope="col"></th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="offer in offers">
          <td>{{ offer.offerName }}</td>
          <td>{{ offer.offerDescription }}</td>
          <td>
            <button v-on:click="navigateToPage(offer.offerId)" type="button" class="btn btn-outline-warning">vaata</button>
          </td>
        </tr>


        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: function () {
    return {
      offers: [
        {
          offerId: 0,
          offerName: '',
          offerDescription: ''
        }
      ]
    }
  },

  methods: {
    getNameDescription: function () {
      this.$http.get("/home")
          .then(response => {
            this.offers = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

    navigateToPage: function (offerId) {
      alert(offerId)
    }

  },
  beforeMount() {
    this.getNameDescription()
  }

}
</script>

