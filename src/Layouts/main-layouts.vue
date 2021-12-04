<template>
    <div>
        <main-nav-header/>
        <main >
            <router-view
            @postFilter="getFilter"
            :filterChek='filterChek'
            />
        </main>
    </div>
</template>


<script>
import MainNavHeader from '../components/main-nav-header/main-nav-header.vue'


export default {
    name: 'main-layouts',
    data(){
        return{
            filterChek:'',
        }
    },
    components:{
        MainNavHeader
    },
    
    methods:{
        getFilter(data){
            this.filterChek = data
            
        }
    }
}
</script>