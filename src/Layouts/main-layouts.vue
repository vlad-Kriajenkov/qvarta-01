<template>
    <div>
        <NavBar/>
        <main >
            <router-view
            @postFilter="getFilter"
            :filterChek='filterChek'
            />
        </main>
    </div>
</template>


<script>
import NavBar from '../components/app/Header/NavBar'


export default {
    name: 'main-layouts',
    data(){
        return{
            filterChek:'',
        }
    },
    components:{
        NavBar
    },
    
    methods:{
        getFilter(data){
            this.filterChek = data
            
        }
    }
}
</script>