<template>
  <div class="home">
    <div class="home__header">
      <div class="home__columnInfo">
        <div class="column__info">
          <p class="info__text textNormal">студия промышленного дизайна</p>
          <div class="info__title textTitle">
            Наши продукты <br>
            созданы работать
          </div>
        </div>
        <button class="column__btn textBtn ">
          <p>Обсудить ваш проект</p> 
          <div class="line"></div>
        </button>
      </div>
      <div class="home__columnProduct">
        <div class="column__imgProducts"></div>
      </div> 
    </div>
    <div class="home__slider">
      <div class="slider__title textNormal">
        концепция <span class="textBold">Q</span>
      </div>
      <VueSlickCarousel :arrows="false" :dots="true">
          <div 
          v-for="quote in quotes"
          :key="quote.id"
          class="slider__quotes textNormal ml3"
          >
            {{quote.title}}
            <br>
            {{quote.text}}
          </div>
      </VueSlickCarousel>
    </div>
    <div class="home__ourWorks">
      <div class="ourWorks__header">
        <div class="ourWorks__text textNormal">реализации</div>
        <div class="ourWorks__title textTitleCard">Наши работы</div>
      </div>
      <post-list-work/>
      <div class="ourWorks__btn">
        <router-link
        to="#">
          <button class="different">
            <div class="btn__text textBtn">Все работы</div>
          </button>
        </router-link>
      </div>
    </div>
    <div class="home__whatWeDo">
      <div class="whatWeDo__imgBlock">
        
      </div>
      <div class="whatWeDo__ourServices">
        <our-services/>
      </div>
    </div>
  </div>
  
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import PostListWork from '../components/post-list-work/post-list-work.vue'
import ourServices from '../components/our-services/our-services'

export default {
  name: 'Home',
  components: {
    VueSlickCarousel,
    PostListWork,
    ourServices
  },
  data(){
    return{
      settings:{
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
               },
      quotes: [
        {
          id:1,
          title: 'Продукт превыше всего.',
          text:'Либо делаем крутой продукт, либо не делаем его вообще.'
        },
        {
          id:2,
          title:'Мы ценим честность',
          text:'Честны перед собой, нашим клиентом и продуктом.'
        },
        {
          id:3,
          title:'Работаем ради денег',
          text:'Главная задача проекта - принести вам прибыль. '
        },
        {
          id:4,
          title:'Клиент не всегда прав',
          text:'Мы точно знаем, что в некоторых вещах разбираемся лучше.'
        },
      ],

  }
  },
}
</script>
