<template>
    <div class="ourServices">
        <div class="ourServices__text textNormal">{{$t('formOurServicesText')}}</div>
        <div class="ourServices__title textTitle">{{$t('formOurServicesTitle')}}</div>
        <router-link   
            v-for="link in links"
            :key="link.id"
            :to="link.url"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{link.title}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
            </div>
        </router-link>
        <button class="column__btnWhite textBtn ">
            <p>{{$t('btnSeeAllServices')}}</p> 
            <div class="lineWhite"></div>
        </button>        
    </div>
</template>

<script>
export default {
    name:'our-services',
    data(){
        return{
        }
    },
    computed:{
        links(){
            return[
                {title: this.$t('formOurServicesLink1'), url: ''},
                {title: this.$t('formOurServicesLink2'), url: ''},
                {title: this.$t('formOurServicesLink3'), url: ''},
                {title: this.$t('formOurServicesLink4'), url: ''},
            ]
        }
    }
}
</script>

<style scoped>
p{
    color: #ffff;
}


</style>