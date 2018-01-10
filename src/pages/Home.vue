<template>
  <div class="grid__row home">

    <h1>Selamat datang di Aplikasi Daftar Rumah Sakit Umum, Khusus dan Puskesmas di Jakarta</h1>
    <h4>Silahkan pilih daftar yang ingin Anda cari dengan meng-klik salah satu tab diatas.</h4>

    <div class="google-ads">
      <InArticleAdsense
          root-class="wrapper VueInArticleAdsense"
          :data-ad-client="client"
          :data-ad-slot="slot">
      </InArticleAdsense>
    </div>

  </div>
</template>

<script>
import mixin from '@/mixins'

export default {
  name: 'HomePage',
  mixins: [mixin]
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/themes";
.home{
  text-align: center;
}

.google-ads{
  width: 90%;
}
</style>
