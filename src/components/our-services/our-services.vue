<template>
    <div class="ourServices">
        <div class="ourServices__text textNormal">{{$t('formOurServicesText')}}</div>
        <div class="ourServices__title textTitle">{{$t('formOurServicesTitle')}}</div>
        <router-link   
            to="/about"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink1')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
            </div>
        </router-link>
        <router-link   
            to="/about"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink2')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
            </div>
        </router-link>
        <router-link   
            to="/about"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink3')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
            </div>
        </router-link>
        <router-link   
            to="/about"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink4')}}
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
            links: [
                {title: this.$t('formOurServicesLink1'), url: '/'},
                {title: this.$t('formOurServicesLink2'), url: '/1'},
                {title: this.$t('formOurServicesLink3'), url: '/2'},
                {title: this.$t('formOurServicesLink4'), url: '/3'},
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