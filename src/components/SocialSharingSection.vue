<template>
  
  <social-sharing inline-template class="share"
      twitter-user="Maz_Ipan"
      :quote="quote"
      :title="title"
      :description="description">

    <div>
        <network network="facebook">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </network>
        <network network="googleplus">
          <i class="fa fa-google-plus" aria-hidden="true"></i>
        </network>
        <network network="linkedin">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </network>
        <network network="twitter">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </network>
        <network network="whatsapp">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </network>
    </div>

  </social-sharing>

</template>

<script>

export default {
  name: 'SocialSharingSection',
  props: ['quote', 'title', 'description'],
  data () {
    return {
    }
  }
}

</script>

<style lang="scss">
.share{
  margin-top: 20px;

  span{
    height: 29px;
    width: 29px;
    padding: 11px 6px;
    border: 3px solid;
    border-radius: 100%;
    text-align: center;
    text-decoration: none;

    i{
      font-size: 32px;
      width: 30px;
      vertical-align: middle;
    }

    &[data-link="#share-facebook"]{
      color: #3b5998; border-color: #3b5998; 
      &:hover{
          background-color: #3b5998;
          color: #fff;
      }
    }
    &[data-link="#share-googleplus"]{
      color: #d03324; border-color: #d03324; 
       &:hover{
          background-color: #d03324;
          color: #fff;
      }
    }
    &[data-link="#share-linkedin"]{
      color: #0077B5; border-color: #0077B5; 
      &:hover{
          background-color: #0077B5;
          color: #fff;
      }
    }    
    &[data-link="#share-twitter"]{
      color: #55acee; border-color: #55acee;
       &:hover{
          background-color: #55acee;
          color: #fff;
      }
    }
    &[data-action="share/whatsapp/share"]{
      color: #25D366; border-color: #25D366; 
      &:hover{
          background-color: #25D366;
          color: #fff;
      }
    }


  }
}
</style>