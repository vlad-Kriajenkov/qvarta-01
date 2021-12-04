<template>
    <div class="mainNavHeader textTitle">
        <div class="mainNavHeader__logg">QVARTA</div>
        <div class="menu"
        id="mobile-toggle"
        @click="showMenu = !showMenu">
            <div class="burger-container">
                <div 
                class="burger"
                :class="{ active: showMenu }"
                ></div>
            </div>
        </div>
        <div class="mainNavHeader__leng">
            <button class="leng__ru textNormal">ru
                <div class="leng__line"></div>
            </button>
            <button class="leng__eng textNormal">eng
                <div class="leng__line"></div>
            </button>
        </div>
        <main-nav
        :class="{ active2: showMenu }"
        class="mainNavHeader__mainNav"/>
    </div>
    
</template>

<script>
import mainNav from '../main-nav/main-nav.vue'
export default {
  components: { mainNav },
  data(){
      return{
          showMenu: false
      }
  }  
}
</script>