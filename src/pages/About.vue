<template>
  <div class="grid__row about">
    <img v-lazy="'/RumahSakitJakarta/images/RumahSakitJakarta-logo.png'" />
    <h1>Daftar Rumah Sakit Umum, Khusus dan Puskesmas di Jakarta built with VueJS</h1>
    <h5>See Source Code :
      <a href="https://github.com/mazipan/RumahSakitJakarta" target="_blank">
        https://github.com/mazipan/RumahSakitJakarta
      </a>
    </h5>
    <h5>Sumber Data :
      <a href="http://api.jakarta.go.id/" target="_blank">
        api.jakarta.go.id
      </a>
    </h5>
    <br>

    <div class="google-ads">
      <InArticleAdsense
          root-class="wrapper VueInArticleAdsense"
          :data-ad-client="client"
          :data-ad-slot="slot">
      </InArticleAdsense>
    </div>

    <div>
      <h5>Crafted with <i class="fa fa-heart"></i> by : </h5>
      <a href="mailto:mazipanneh@gmail.com">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600'" alt="Email" class="badge">
      </a>
      <a href="https://mazipanneh.com/blog/">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600'" alt="Website" class="badge">
      </a>
      <a href="https://facebook.com/mazipanneh">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600'" alt="Facebook" class="badge">
      </a>
    </div>
    <div>
      <a href="https://twitter.com/Maz_Ipan">
      <img v-lazy="'https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600'" alt="Twitter"  class="badge"></a>
      <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
      <img v-lazy="'https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600'" alt="Linkedin" class="badge"></a>
      <a href="https://www.slideshare.net/IrfanMaulana21">
      <img v-lazy="'https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600'" alt="Slideshare" class="badge"></a>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins'

export default {
  name: 'AboutPage',
  mixins: [mixin]
}

</script>

<style lang="scss" scoped>
.google-ads{
  width: 90%;
}

.about{
  text-align: center;

  a{
    color: #0096d9;
    text-decoration: none;
  }

  .fa-heart{
    color: red;
  }

  .badge{
    width: auto;
    height: 20px;
  }
}
</style>
