<template>
    <div class="mainNav">
        <div class="mainNav__conatinerContact">
            <div 
            @click="removeBurger"
            class="mainNav__logo textTitle">
                <router-link to="/">QVARTA</router-link>
            </div>
            <div class="conatinerContact__boxInfo">
                 <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag="a"                    
                    :to="link.url"
                    class="ourServicesmainNav__link"
                >
                    <div @click="removeBurger" href="#"  class="ourServicesmainNav__a textNormal">{{link.title}}
                        <div class="ourServicesmainNav__moreInfo">{{$t('main_navMoreInfo')}}</div>
                        <div class="ourServicesmainNav__line"></div>
                    </div>
                    <div class="ourServicesmainNav__line1"></div>
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
                {title: this.$t('main_navLink3'), url: '/Our-Services'},
                {title: this.$t('main_navLink4'), url: '/'},
                {title: this.$t('main_navLink5'), url: '/Contacts'}
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
        },
        removeBurger(){
            document.getElementById('burger').classList.remove("active");
            document.getElementById('mainNav').classList.remove("active2");
        },
    },
   
}
</script>