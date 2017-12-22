<template>
  <div class="VueApp grid__row">

    <div class="sidebar-cover" v-show="isShowSidebar" @click="hideSidebar"></div>
    <sidebar v-bind:class="{'sidebar--open': isShowSidebar}"></sidebar>

    <header-section @toggleSidebar="toggleSidebar"></header-section>    

    <div class="loading" v-show="isLoading">
      <img src="/RumahSakitJakarta/images/loading.gif">
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
import Sidebar from 'components/Sidebar.vue'
import HeaderSection from 'components/HeaderSection.vue'
import TabBlock from 'components/TabBlock.vue'

export default {
  name: 'app',
  components: {
    Sidebar, 
    HeaderSection,
    TabBlock
  },
  computed: {
    isShowSidebar () {
      return this.$store.getters.isShowSidebar
    },
    isLoading () {
      return this.$store.getters.isLoading
    },
    tabActive () {
      return this.$store.getters.tabActive
    }
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
