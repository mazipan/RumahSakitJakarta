<template>
  <div class="grid__row home">

    <h1>Selamat datang di Aplikasi Daftar Rumah Sakit Umum, Khusus dan Puskesmas di Jakarta</h1>
    <h4>Silahkan pilih daftar yang ingin Anda cari dengan meng-klik salah satu tab diatas.</h4>
    
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
