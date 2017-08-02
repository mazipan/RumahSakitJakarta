<template>
  <header class="header">  
    <div class="header__sticky">
      <div class="header__nav">
        <a class="header__hamburger" href="javascript:void(0)" @click="toggleSidebar" title="Open Sidebar">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div class="header__content">
          <router-link to="/">
              <img class="header__brand" 
                    v-lazy="'/RumahSakitJakarta/static/images/RumahSakitJakarta-logo.png'" 
                    alt="RumahSakitJakarta">
          </router-link>
      </div>
      <div class="header__nav pointer">
        <a class="header__search" href="javascript:void(0)">
          <img height="25"
              v-lazy="'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e5.png'">
        </a>
      </div>
    </div> 
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  computed: { 
  },
  methods: {
    toggleSidebar: function () {
      this.$emit('toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/themes";

.pointer{
  cursor: pointer;
}
.header {
  height: 60px;

  &__sticky{
    position: fixed; top: 0; right: 0; left: 0;
    z-index: 10;
    display: table;
    margin: 0;
    height: 60px;
    background: $themes;
    text-align: center;
    color: $themes-inverse;
    width: 100%;
  }

  &__content {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  &__brand{
    width: auto;
    height: 50px;
  }
  &__nav {
    color: #fff;
    display: table-cell;
    vertical-align: middle;

    &:first-child{
      text-align: left;
      padding-left: 15px;
      width: 50px;
    }
    &:last-child{
      text-align: right;
      padding-right: 15px;
      width: 50px;
    }
  }

  &__hamburger, &__search {      
    background: none;
    border: none;
    padding: 0;
    outline: none;
    color: #fff;
    font-size: 30px;
  }
}
</style>