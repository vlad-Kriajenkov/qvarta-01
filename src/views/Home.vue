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
      <div 
      class="home__columnProduct" 
      @click="newBg =!newBg">
        <div 
        class="column__imgProducts"
        :class="{newbg: newBg}"
        ></div>
      </div> 
    </div>
    <div class="home__slider">
      <div class="slider__title textNormal">
        концепция <span class="textBold">Q</span>
      </div>
      <VueSlickCarousel :arrows="false" :dots="true" >
          <div class="slider__quotes textNormal ml1">asdsad asdasd</div>
          <div class="slider__quotes textNormal ml2">asdsasdasvzxcvxvzxsd</div>
          <div class="slider__quotes textNormal ml3">asdsa2132352345dasdasd</div>
          <div class="slider__quotes textNormal ml4">asdsadasd234c2ee2asd</div>

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
    <formFeedback/>
    <form-contact/>
    <div class="home__footer">
      <hr class="home_footerLine">
      <div class="darkened">
        <div class="home__bg" ></div>
      </div>
      
      <router-link
      to="#"
      class="footer__link"
      >
        <div class="link__text textNormal">Узнать больше</div>
        <div class="link__title textTitle">О нас</div>
      </router-link>
      <div class="footer__timer">
        <div class="timer__text textNormal">Через</div>
        <div class="timer__title textTitle">08</div>
      </div>  
    </div>
  </div>
  
</template>


<script >
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import PostListWork from '../components/post-list-work/post-list-work.vue';
import ourServices from '../components/our-services/our-services';
import formFeedback from '../components/form-feedback/form-feedback.vue';
import FormContact from '../components/form-contact/form-contact.vue';

export default {
  name: 'Home',
  components: {
    VueSlickCarousel,
    PostListWork,
    ourServices,
    formFeedback,
    FormContact
  },
  data(){
    return{
    
      newBg: false,
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
   mounted() {
      const textWrapper1 = document.querySelector('.ml1');
      const textWrapper2 = document.querySelector('.ml2');
      const textWrapper3 = document.querySelector('.ml3');
      const textWrapper4 = document.querySelector('.ml4');

      textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      this
        .$anime
        .timeline({loop: true})
        .add({
          targets: '.ml1 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.ml1',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });

      this
        .$anime
        .timeline({loop: true})
        .add({
          targets: '.ml2 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.ml2',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });  

         this
        .$anime
        .timeline({loop: true})
        .add({
          targets: '.ml3 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });  

      this
        .$anime
        .timeline({loop: true})
        .add({
          targets: '.ml4 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.ml4',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });  
  },
 
}
</script>
