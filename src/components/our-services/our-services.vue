<template>
    <div class="ourServices">
        <div class="ourServices__text textNormal">{{$t('formOurServicesText')}}</div>
        <div class="ourServices__title textTitle">{{$t('formOurServicesTitle')}}</div>
        <router-link   
            to="#"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink1')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
                <div  v-scroll="anime0" class="ourServices__line" id="line0"></div>
            </div>
            <div class="ourServices__line1" ></div>
        </router-link>
        <router-link   
            to="#"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink2')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
                <div  v-scroll="anime1" class="ourServices__line" id="line1"></div>
            </div>
            <div class="ourServices__line1" ></div>
        </router-link>
        <router-link   
            to="#"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink3')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
                <div  v-scroll="anime2" class="ourServices__line" id="line2"></div>
            </div>
            <div class="ourServices__line1" ></div>
        </router-link>
        <router-link   
            to="#"
            tag="div"
            class="ourServices__link"
        >
            <div class="ourServices__a textNormal">{{$t('formOurServicesLink4')}}
                <div class="ourServices__moreInfo">{{$t('btnMoreInfo')}}</div>
                <div  v-scroll="anime3" class="ourServices__line" id="line3"></div>
            </div>
            <div class="ourServices__line1" ></div>
        </router-link>

        <button id="btnd" class="column__btnWhite textBtn ">
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
    methods:{
        anime0: (evt, el) => {
            let links = document.getElementById('line0').getBoundingClientRect();
            let t = 530;
            let b = 250;
            console.log(links.bottom)
            if (links.bottom < t) {
                 el.setAttribute(
                'style',
                'width: 100%; transition: width 1s linear'
                )
            }else if (links.bottom > t) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
            if (links.bottom < b) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
        },
        anime1: (evt, el) => {
            let links = document.getElementById('line1').getBoundingClientRect();
            let t = 530;
            let b = 250;
            console.log(links.bottom)
            if (links.bottom < t) {
                 el.setAttribute(
                'style',
                'width: 100%; transition: width 1s linear'
                )
            }else if (links.bottom > t) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
            if (links.bottom < b) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
        },
         anime2: (evt, el) => {
            let links = document.getElementById('line2').getBoundingClientRect();
            let t = 530;
            let b = 250;
            console.log(links.bottom)
            if (links.bottom < t) {
                 el.setAttribute(
                'style',
                'width: 100%; transition: width 1s linear'
                )
            }else if (links.bottom > t) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
            if (links.bottom < b) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
        },
         anime3: (evt, el) => {
            let links = document.getElementById('line3').getBoundingClientRect();
            let t = 530;
            let b = 250;
            console.log(links.bottom)
            if (links.bottom < t) {
                 el.setAttribute(
                'style',
                'width: 100%; transition: width 1s linear'
                )
            }else if (links.bottom > t) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
            if (links.bottom < b) {
                 el.setAttribute(
                'style',
                'width: 10%; transition: width 1s linear'
                )
            }
        }
    }
}
</script>

<style scoped>
p{
    color: #ffff;
}


</style>