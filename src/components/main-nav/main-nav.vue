<template>
    <div class="mainNav">
        <div class="mainNav__conatinerContact">
            <div class="mainNav__logo textTitle">QVARTA</div>
            <div class="conatinerContact__boxInfo">
                 <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag="a"                    
                    :to="link.url"
                    class="ourServicesmainNav__link"
                >
                    
                    <div href="#"  class="ourServices__a textNormal">{{link.title}}
                        <div class="ourServices__moreInfo">Перейти</div>
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
            <!-- <div class="mainNavHeader__leng">
                <button class="leng__ru textNormal">ru
                    <div class="leng__line"></div>
                </button>
                <button class="leng__eng textNormal">eng
                    <div class="leng__line"></div>
                </button>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:'main-nav',
    data(){
        return{
            showMenu: false,
            links: [
                {title: 'О нас', url: '/'},
                {title: 'Наши работы', url: '/1'},
                {title: 'Наши услуги', url: '/2'},
                {title: 'Блог', url: '/3'},
                {title: 'Контакты', url: '/4'}
                 
            ]
        }
    }
}
</script>