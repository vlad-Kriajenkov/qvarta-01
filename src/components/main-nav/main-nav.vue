<template>
    <div class="mainNav">
        <div class="mainNav__conatinerContact">
            <div class="mainNav__logo textTitle">
                <router-link 
                to="/">
                    QVARTA
                </router-link>
            </div>
            <div class="conatinerContact__boxInfo">
                 <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag="a"                    
                    :to="link.url"
                    class="ourServicesmainNav__link"
                >
                    
                    <div href="#"  class="ourServices__a textNormal">{{link.title}}
                        <div class="ourServices__moreInfo">{{$t('main_navMoreInfo')}}</div>
                    </div>

                </router-link>
                <div class="boxInfomainNav__networks">
                    <div class="networks__link">
                        <a href="#" class="textNormal"> Behance</a>
                        <div class="border"></div>
                    </div>
                    <div class="networks__link">
                        <a href="#" class="textNormal">Facebook</a>
                        <div class="border"></div>
                    </div>
                   <div class="networks__link">
                       <a href="#" class="textNormal">Telegram</a>
                       <div class="border"></div>
                   </div>
                    
                </div>
            </div>
        </div>
        <div class="mainNav__img">
            <div class="img__form"></div>
            <div class="mainNavHeader__leng">
                <button 
                @click="setLocale('ru')"
                class="leng__ru textNormal">ru
                    <div class="leng__line"></div>
                </button>
                <button 
                @click="setLocale('en')"
                class="leng__eng textNormal">eng
                    <div class="leng__line"></div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'main-nav',
    data(){
        return{

        }
    },
    computed:{
        links(){
            return[
                {title: this.$t('main_navLink1'), url: '/about'},
                {title: this.$t('main_navLink2'), url: '/work'},
                {title: this.$t('main_navLink3'), url: '/work-product'},
                {title: this.$t('main_navLink4'), url: '/'},
                {title: this.$t('main_navLink5'), url: '/4'}
            ]
        }
    },
    methods:{
        setLocale(locale){
            import(`../../lang/${locale}.json`).then((msgs) =>{
                this.$i18n.setLocaleMessage(locale, msgs)
                this.$i18n.locale = locale
                 
            })
            // this.$emit('reload', locale)
            
        }
    }
}
</script>