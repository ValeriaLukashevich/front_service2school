<template>

  <div>

    <div>
          <ImageInput @pictureInputSuccess="setPicture"/>
          <img :src="pictureDto.pictureData" class="myPicSize">

          <button v-on:click="addPicture" class="btn btn-success m-1" type="button">Salvesta pilt</button>
    </div>
<br>
    <textarea v-model="pictureDto.additionalInfo" placeholder="Lisainfo" cols="30" rows="10"></textarea>
    <div>
      <button class="btn btn-success m-1" type="button">Tagasi</button>
      <button v-on:click="" class="btn btn-success m-1" type="button">Salvesta</button>
    </div>
  </div>

</template>

<script>
import ImageInput from "@/components/image/ImageInput";

export default {


  name: "AddPictureView",
  components: {ImageInput},
  data: function () {
    return {
      pictureDto: {
        offerId: sessionStorage.getItem('offerId'),
        pictureData: '',
        additionalInfo: ''
      }
    }

  },
  methods: {
    addPicture: function () {
      this.$http.post("/photo", this.pictureDto
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    setPicture: function (picture) {
      this.pictureDto.pictureData = picture;
    },

  }
}
</script>

<style scoped>

</style>