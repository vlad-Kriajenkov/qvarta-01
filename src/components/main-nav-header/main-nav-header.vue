<template>
  <div class="mainNavHeader textTitle">
    <div class="mainNavHeader__logg"></div>
    <div class="menu" id="mobile-toggle" @click="showMenu = !showMenu">
      <div class="burger-container">
        <div class="burger" :class="{ active: showMenu }"></div>
      </div>
    </div>
   
    <main-nav :class="{ active2: showMenu }" class="mainNavHeader__mainNav" />
  </div>
</template>

<script>
import mainNav from "../main-nav/main-nav.vue";
export default {
  components: { mainNav },
  data() {
    return {
      showMenu: false, 
    };
  },
   methods:{
       
    }
 
};
</script>

