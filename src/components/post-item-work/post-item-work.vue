<template>
    <div class="postItemWork__container">
        <div class="postItemWork">
            <img data-aos="fade-right" :src="require(`@/assets/${Post.img}`)" alt="" class="postItemWork__img ">
            <div data-aos="fade-up" class="postItemWork__title textTitleCard">{{Post.title}}</div>
            <div data-aos="fade-up" class="postItemWork__text textNormal">{{Post.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["Post"],
    data() {
    return {
      animItems: true
    } 
  },
}

</script>

 