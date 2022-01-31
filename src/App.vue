<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import MainLayouts from './Layouts/main-layouts'
export default {
  computed:{
    layout(){
      return MainLayouts
    }
  },
  components:{
    MainLayouts
  },
}
</script>
<style>
@import './assets/css/App.css';
@import './assets/css/mediaWork.css';
@import './assets/css/mediaWorkProduct.css';
@import './assets/css/mediaOurServices.css';
@import './assets/css/mediaServices1.css';
</style>