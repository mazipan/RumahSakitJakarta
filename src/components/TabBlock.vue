<template>
  <aside class="tab"> 
    <ul class="tab__wrapper"> 
      <li class="tab__item">
        <router-link to="/rumah-sakit-umum" 
            class="tab__link" 
            :class="{'tab__link--active': tabActive === 'rsu'}">
          <i class="fa fa-hospital-o"></i> RS Umum
        </router-link>
      </li>

      <li class="tab__item">
        <router-link to="/rumah-sakit-khusus" 
            class="tab__link" 
            :class="{'tab__link--active': tabActive === 'rsk'}">
          <i class="fa fa-wheelchair"></i> RS Khusus
        </router-link>
      </li>

      <li class="tab__item">
        <router-link to="/puskesmas" 
            class="tab__link" 
            :class="{'tab__link--active': tabActive === 'puskesmas'}">
          <i class="fa fa-medkit"></i> Puskesmas
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TabBlock',
  props: ['tabActive'],
  data () {
    return {
    }
  },
  computed: { 
  },
  methods: {
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
    padding: 10px 30px;
    margin: 5px;
    color: $themes-inverse;
    background-color: $themes;

    &--active{
      background-color: darken($themes, 10%);
      font-weight: bold;
    }

  }
}
</style>