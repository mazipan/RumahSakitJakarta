<template>
  <div class="grid__row home">

    <h1>Daftar Rumah Sakit Umum, Khusus dan Puskesmas di Jakarta built with VueJS</h1>
    <h5>Anda bisa memilih salah satu daftar yang ingin dilihat berikut :</h5>
    
    <tab-block></tab-block>

  </div>
</template>

<script>
import TabBlock from 'components/TabBlock'

export default {
  name: 'HomePage',
  components: {
    TabBlock
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/themes";
.home{
  text-align: center;
}
</style>
