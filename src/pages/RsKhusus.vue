<template>
  <div class="grid__row">

    <tab-block tabActive="rsk"></tab-block>

    <div class="search">
      <input class="search__text" type="text" 
        name="Search" 
        v-model="searchText" 
        placeholder="Cari Rumah Sakit Khusus">
    </div>

    <div>
      <span class="highlight">{{filteredList.length}}</span> 
      data ditemukan      
    </div>
    <ul class="rs">
      <li v-for="item in filteredList" class="item">
        <div class="left">
          <img class="icon" 
               v-lazy="'/RumahSakitJakarta/static/images/rs-khusus.png'">        
        </div>
        <div class="right">
          <div class="title" 
               v-html="highlightText(item.properties.nama_rsk, searchText)">
          </div>
          <div class="small-text"
               v-html="highlightText(item.properties.location.alamat, searchText)">
          </div>
          <div>
             <a 
              :href="'https://www.google.com/maps/search/?api=1&query=' + 
              item.properties.location.latitude + ',' + item.properties.location.longitude" 
              :title="item.properties.nama_rsk" 
              target="_blank" 
              class="see-map">
              <i class="fa fa-map-marker"></i> 
              Lihat Lokasi
             </a>         
          </div>          
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
import TabBlock from 'components/TabBlock'
import { mapGetters } from 'vuex'
import { highlightText } from 'src/util'

export default {
  name: 'RSK',
  components: {
    TabBlock
  },
  data () {
    return {
      searchText: '',
      showingPos: []
    }
  },
  computed: {
    ...mapGetters(['rskList']),
    filteredList() {
      let self = this
      return self.rskList.filter(item => {
        let isShowing = 
        item.properties.nama_rsk.toLowerCase().includes(self.searchText.toLowerCase()) || 
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
    this.$store.dispatch('getRskList')
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/themes";

.rs{
  padding: 0;
  margin: 0;
  list-style: none;
}
.item{
  padding: 10px;
  display: table;
}
.left{
  display: table-cell;
  vertical-align: middle;

  .icon{
    width: 50px;
    margin-right: 10px;
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

.see-map{
  line-height: 2;
  font-size: 12px;
  color: #0096D9;
  background-color: #eee;
  padding: .3em .5em;
  text-decoration: none;
  border-radius: .25em;
}
</style>
<style>  
.highlight {
  color: #0096D9;
}
</style>
