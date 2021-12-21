<template>
  <div class="mainNavHeader textTitle">
    <div class="mainNavHeader__logg"></div>
    <div class="menu" id="mobile-toggle" @click="bUrgerHome">
      <div class="burger-container">
        <div  id="burger" class="burger"></div>
      </div>
    </div>
   
    <main-nav id="mainNav" class="mainNavHeader__mainNav" />
  </div>
</template>

<script>
import mainNav from "../main-nav/main-nav.vue";
export default {
  components: { mainNav },
  data() {
    return { 
      // showMenu: false, 
    };
  },
  methods:{
   
    bUrgerHome(){
      document.getElementById('burger').classList.toggle("active");
      document.getElementById('mainNav').classList.toggle("active2");

    if(this.$route.path === '/'){
        document.getElementById('burger').classList.toggle("test1");
      }else if (this.$route.path != '/') {
        document.getElementById('burger').classList.remove("test1");
      }
    }
  },
  mounted(){
     if(this.$route.path === '/'){
        document.getElementById('burger').classList.add("test1");
      }else if (this.$route.path != '/') {
        document.getElementById('burger').classList.remove("test1");
       
      }
  },
  watch:{
    $route(to, from){
      if(this.$route.path === '/'){
        document.getElementById('burger').classList.add("test1");
      }else if (this.$route.path != '/') {
        document.getElementById('burger').classList.remove("test1");
       
      }
    }
    
  }

};
</script>

