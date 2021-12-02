<template>
    <div class="ourServices">
        <div class="ourServices__text textNormal">что мы делаем</div>
        <div class="ourServices__title textTitle">Наши услуги</div>
        <router-link
            v-for="link in links"
            :key="link.url"
            tag="a"                    
            :to="link.url"
            class="ourServices__link"
        >
            
            <div href="#"  class="ourServices__a textNormal">{{link.title}}
                <div class="ourServices__moreInfo">Узнать больше</div>
            </div>

        </router-link>

        <button class="column__btnWhite textBtn ">
            <p>Посмотреть все услуги</p> 
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
                {title: 'Промышленный дизайн', url: '/'},
                {title: 'Предметная визуализация', url: '/1'},
                {title: 'Разработка электроники', url: '/2'},
                {title: 'Конструкторская разработка', url: '/3'},
                 
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