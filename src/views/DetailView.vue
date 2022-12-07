<template>

  <div id="page">
    <table class="table table-success table-striped">
      <thead>
      <tr>
        <th style=text-align:center colspan="2">
          Teenus: {{ offerDetail.name }}
        </th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td style="text-align:left;width: 25%">
          <b>Teenuse kirjeldus:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.description }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Hind õpilase kohta:</b>
        <td style=text-align:left>
          {{ offerDetail.pricePerStudent }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Minimaalne õpilaste arv:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.studentsMin }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Maksimaalne õpilaste arv:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.studentsMax }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Linn:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.cityName }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Aadress:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.address }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Telefoninumber:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.phone }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Lisainfo:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.additionalInfo }}
        </td>
      </tr>

      <tr>
        <td style=text-align:left>
          <b>Foto:</b>
        </td>
        <td style=text-align:left>
          (picture placeholder)
        </td>

      </tr>

      <tr>
        <td style=text-align:left>
          <b>Lisatud:</b>
        </td>
        <td style=text-align:left>
          {{ offerDetail.dateAdd }}
        </td>

      </tr>
      </tbody>
    </table>
  </div>

</template>

<style>

#page {
  /*align-items: center;*/
  /*align-content: center;*/
  /*align-self: center;*/
  /*alignment: center;*/
  /*max-width: 960px;*/
  margin: auto;
}

</style>

<script>
export default {
  name: 'DetailView',
  data: function () {
    return {
      offerId: sessionStorage.getItem('offerId'),
      offerDetail: {
        name: '',
        description: '',
        pricePerStudent: 0,
        studentsMin: 0,
        studentsMax: 0,
        cityId: 0,
        cityName: '',
        address: '',
        phone: 0,
        dateAdd: '',
        additionalInfo: ''
      }
    }
  },
  methods: {
    getOfferDetails: function () {

      this.$http.get("/home/detail", {
            params: {
              offerId: this.offerId,
            }
          }
      ).then(response => {
        this.offerDetail = response.data
      }).catch(error => {
        console.log(error)
      })

    }
  },
  beforeMount() {
    this.getOfferDetails()
  }
}


</script>