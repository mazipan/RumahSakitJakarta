<template>
  <div class="VueApp grid__row">

    <div class="sidebar-cover" v-show="isShowSidebar" @click="hideSidebar"></div>
    <sidebar v-bind:class="{'sidebar--open': isShowSidebar}"></sidebar>

    <header-section @toggleSidebar="toggleSidebar"></header-section>    

    <div class="loading" v-show="isLoading">
      <img src="/RumahSakitJakarta/static/images/loading.gif">
    </div>

    <div class="main"> 

      <tab-block :tabActive="tabActive"></tab-block>

      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from 'components/Sidebar'
import HeaderSection from 'components/HeaderSection'
import TabBlock from 'components/TabBlock'

export default {
  name: 'app',
  components: {
    Sidebar, 
    HeaderSection,
    TabBlock
  },
  computed: {
    ...mapGetters(['isShowSidebar', 'isLoading', 'tabActive'])
  },
  created () {

  },
  methods: {
    toggleSidebar: function () {
      this.$store.commit('setShowSidebar', !this.isShowSidebar)
    },
    hideSidebar: function () {
      this.$store.commit('setShowSidebar', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .sidebar-cover{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0px; right: 0px; bottom: 0px; left: 0px;
    height: 100%;
    z-index: 19;
  }
  .main{
    
  }
  .loading{
    text-align: center;
    padding-top: 50px;
  }
</style>
