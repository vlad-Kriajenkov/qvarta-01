<template>
    <div class="postListWork__wrapper">
        <postItemWork 
            v-for="Post in allPosts"
            :key="Post.id"
            v-bind:Post="Post"
        />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import postItemWork from '../post-item-work/post-item-work'
export default {
    components:{
        postItemWork
    },
    computed:{
        ...mapGetters(['allPosts']), 
    },
    
    methods: mapActions(['fetchPost']),
    mounted(){ 
    this.fetchPost();
    }
}
</script>

<style scoped>
.postListWork__wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>