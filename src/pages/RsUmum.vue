<template>
  <div class="grid__row">

    <div class="search">
      <input class="search__text" type="text"
        name="Search"
        v-model="searchText"
        placeholder="Cari Rumah Sakit Umum">
    </div>

    <div>
      <span class="highlight">{{filteredList.length}}</span>
      data ditemukan
    </div>
    <ul class="rs">
      <li v-for="(item, index) in filteredList" :key="item.properties.id">
        <div class="item">
          <div class="left">
            <i class="icon fa fa-hospital-o"></i>
          </div>
          <div class="right">
            <div class="title"
                v-html="highlightText(item.properties.nama_rsu, searchText)">
            </div>
            <div class="small-text"
                v-html="highlightText(item.properties.jenis_rsu, searchText)">
            </div>
            <div class="small-text"
                v-html="highlightText(item.properties.location.alamat, searchText)">
            </div>

            <div class="telp" v-if="item.properties.telepon.length > 0  && item.properties.telepon[0] !== ''">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                <b v-for="(telepon, index) in item.properties.telepon"
                    class="telp-item">
                  {{telepon}}
                </b>
            </div>
            <div class="telp faximile" v-if="item.properties.faximile.length > 0 && item.properties.faximile[0] !== ''">
                <i class="fa fa-fax" aria-hidden="true"></i>
                <b v-for="(faximile, index) in item.properties.faximile"
                    class="telp-item">
                  {{faximile}}
                </b>
            </div>

            <div class="see-map-wrapper">
              <a
                :href="'https://www.google.com/maps/search/?api=1&query=' +
                item.properties.location.latitude + ',' + item.properties.location.longitude"
                :title="item.properties.nama_rsu"
                target="_blank"
                class="see-map">
                <i class="fa fa-map-marker"></i>
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>

        <div class="google-ads" v-if="(index > 0) && (index%5 === 0)">
          <InFeedAdsense
              root-class="wrapper VueInFeedAdsense"
              :data-ad-layout-key="layout"
              :data-ad-client="client"
              :data-ad-slot="slotInFeed">
          </InFeedAdsense>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { highlightText } from '../util'
import mixin from '@/mixins'

export default {
  name: 'RSU',
  mixins: [mixin],
  data () {
    return {
      searchText: '',
      showingPos: []
    }
  },
  computed: {
    rsuList () {
      return this.$store.getters.rsuList
    },
    filteredList() {
      let self = this
      return self.rsuList.filter(item => {
        let isShowing =
        item.properties.nama_rsu.toLowerCase().includes(self.searchText.toLowerCase()) ||
        item.properties.location.alamat.toLowerCase().includes(self.searchText.toLowerCase())

        return isShowing
      })
    }
  },
  methods: {
    highlightText: function (words, query) {
      return highlightText(words, query)
    }
  },
  mounted () {
    this.$store.dispatch('getRsuList')
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/themes";

.google-ads{
  width: 100%;
  margin: .5em 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(32, 33, 39, 0.12);
}
.rs{
  padding: 0;
  margin: 0;
  list-style: none;
}
.item{
  padding: 1em 0;
  display: table;
  border: 1px solid #ddd;
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(32, 33, 39, 0.12);
  margin: .5em 0;
}
.left{
  display: table-cell;
  vertical-align: middle;
  width: 120px;
  text-align: center;

  .icon{
    width: 50px;
    margin-right: 10px;
    font-size: 50px;
  }
}
.right{
  display: table-cell;
}
.title{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.small-text{
  font-size: 14px;
  color: #999;
}
.search{
  margin: 10px 0 20px;
  display: flex;

  &__text{
    width: 100%;
    padding: 12px 20px;
    outline: none;
    border: 1px solid $themes;
    border-radius: .5em;
  }
}
.telp{
  line-height: 1.5;
  display: inline-block;

  i{
    vertical-align: middle;
    color: #727171;
    font-size: 16px;
  }

  &-item{
    color: #727171;
    padding: .2em .5em;
    background-color: #eee;
    font-size: 12px;
    border-radius: .25em;
    margin-right: .25em;
    vertical-align: middle;
  }
}
.see-map{
  line-height: 2;
  font-size: 12px;
  color: #0096D9;
  background-color: #eee;
  padding: .3em .5em;
  text-decoration: none;
  border-radius: .25em;

  &-wrapper{
    margin-top: 5px;
  }
}
</style>
<style>
.highlight {
  color: #0096D9;
}
</style>
