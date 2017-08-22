<template>
  <aside class="tab"> 
    <ul class="tab__wrapper"> 
      <li class="tab__item">
        <a href="javascript:void(0)" 
            @click="changeTabActive('rumah-sakit-umum')" 
            class="tab__link" 
            :class="{'tab__link--active': tabActive === 'rumah-sakit-umum'}">
          <i class="fa fa-hospital-o"></i> RS Umum
        </a>
      </li>

      <li class="tab__item">
        <a href="javascript:void(0)" 
            @click="changeTabActive('rumah-sakit-khusus')" 
            class="tab__link" 
            :class="{'tab__link--active': tabActive === 'rumah-sakit-khusus'}">
          <i class="fa fa-wheelchair"></i> RS Khusus
        </a>
      </li>

      <li class="tab__item">
        <a href="javascript:void(0)" 
            @click="changeTabActive('puskesmas')" 
            class="tab__link" 
            :class="{'tab__link--active': tabActive === 'puskesmas'}">
          <i class="fa fa-medkit"></i> Puskesmas
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TabBlock',
  data () {
    return {
    }
  },
  computed: { 
    ...mapGetters(['tabActive'])
  },
  methods: {
    changeTabActive: function (tabName) {
      this.$store.dispatch('updateTabActive', tabName)
      if (!tabName) {
        this.$router.push('/')
      } else this.$router.push('/' + tabName)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/themes";
.tab{
  &__wrapper{
    text-align: center;
    margin: 20px 0;
  }
  &__item{    
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  &__link{
    position: relative;
    display: block;
    text-decoration: none;
    font-size: 18px;
    font-weight: 200;
    padding: 10px;
    color: $themes-inverse;
    background-color: $themes;

    &--active{
      background-color: darken($themes, 10%);
      font-weight: bold;
    }

    &--left{
      border-bottom-left-radius: .5em;
      border-top-left-radius: .5em;
    }
    &--right{
      border-bottom-right-radius: .5em;
      border-top-right-radius: .5em;
    }

  }
}
</style>