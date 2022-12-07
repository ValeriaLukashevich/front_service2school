

    <template>
      <div>

        <h4>    Teenuste detailne otsing ja filtreerimine</h4>

        <table class="table table-success table-striped">
          <thead>
          <tr>
            <th style="text-align:left">Nimetus</th>
            <th style="text-align:left">Kirjeldus</th>
            <th></th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="offer in offers">
            <td style="text-align:left;width: 30%">{{ offer.offerName }}</td>
            <td style="text-align:left">{{ offer.offerDescription }}</td>
            <td style="text-align:right;width: 10%">
              <button v-on:click="navigateToPage(offer.offerId)" type="button" class="btn btn-success">Vaata</button>
            </td>
          </tr>


          </tbody>
        </table>
      </div>

    </template>

    <script>
    export default {
      name: 'AboutView',
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
          sessionStorage.setItem('offerId', offerId)
          this.$router.push({
            name: 'detailViewRoute'
          })
        },

      },
      beforeMount() {
        this.getNameDescription()
      }

    }
    </script>

