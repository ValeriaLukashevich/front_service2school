<template>

      <div class="parent; otherBackground">
        <div class="child">

          <table class="table table-success table-striped">

            <thead>
            <tr><th colspan="2">Konto info</th></tr>
            </thead>

            <tbody>
            <tr style="text-align:left; width: 20%">
              <th>Eesnimi:</th>
              <td> {{ contact.firstName }}</td>
            </tr>
            <tr style="text-align:left; width: 20%">
              <th>Perekonnanimi</th>
              <td> {{ contact.lastName }}</td>
            </tr>
            <tr style="text-align:left; width: 20%">
              <th>Kontakttelefon:</th>
              <td>{{ contact.phone }}</td>
            </tr>
            <tr style="text-align:left; width: 20%">
              <th>Asutus:</th>
              <td>{{ contact.institution }}</td>
            </tr>
            </tbody>

          </table>

          <div>

            <button v-on:click="navigateToChangeInfo" class="btn btn-success m-1" type="button">Muuda konto infot
            </button>
            <button v-on:click="logOut" class="btn btn-success m-1" type="button">Logi välja</button>
            <br>
            <button v-on:click="navigateToAddNewOffer" class="btn btn-success m-1" type="button">Lisa uus teenus
            </button>
          </div>

        </div>
        <div class="child">

          <div>

            <table class="table table-success table-striped" style="width: 500px">
              <thead>

              <tr>
                <th style="text-align:center" colspan="3">Minu lisatud teenused</th>
              </tr>

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
                  <button v-on:click="navigateToOffer(offer.offerId)" type="button" class="btn btn-success">Vaata
                  </button>
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
  name: "ProfileView",
  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      selectedOfferId: 0,
      contact:
          {
            // TODO: võiks lisada ka e-maili aadressi ning kuvada selle kasutaja staatilises infos

            contactId: 0,
            firstName: '',
            lastName: '',
            phone: '',
            institution: ''
          },
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

    getMyOffers: function () {
      this.$http.get("/home/user-offers", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.offers = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    getContactInfo: function () {

      this.$http.get("/profile", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.contact = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToAddNewOffer: function () {
      this.$router.push({
        name: 'stageOneRoute'
      })
    },

    logOut: function () {
      window.sessionStorage.removeItem('userId')
      this.$emit('updateStatusEvent')
      this.$router.push({
        name: 'home'
      })
    },

    navigateToChangeInfo: function () {
      this.$router.push({
        name: 'changeProfileRoute'
      })
    },

    navigateToOffer: function (offerId) {
      sessionStorage.setItem('offerId', offerId),
          this.$router.push({
            name: 'detailViewRoute'
          })
    },


  },
  beforeMount() {
    this.getContactInfo()
    this.getMyOffers()
  }
}


</script>
