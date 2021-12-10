<template>
    <div class="work">
       <div class="work__header">
            <div class="header__productColum" >
                <div class="productColum__imgProducts"></div>
            </div>
           <div class="header__infoColum">
               <div class="infoColum__text textNormal">работы</div>
               <div class="infoColum__title textTitle">Наши работы</div>
               <button class="box1__btn textBtn">
                    <p>Обсудить ваш проект</p>
                    <div class="line"></div>
                </button>
           </div>
       </div>
       <div class="work__product">
            <div class="product__title textNormal">
               Главная <span class="textBold"> — о нас</span>
            </div>         
            <div class="product__list">
                <div 
                class="product__item"
                v-for="allPostsWork in allPostsWorks"
                :key="allPostsWork.id"
                >
                    <img data-aos="fade-right" :src="require(`@/assets/${allPostsWork.img}`)" alt="" class="product__img ">
                    <div data-aos="fade-up" class="product__titleItem textTitleCard">{{allPostsWork.title}}</div>
                    <div data-aos="fade-up" class="product__text textNormal">{{allPostsWork.text}}</div>
                </div>
            </div>  
             <div class="ourWorks__btn">
                <router-link
                to="#">
                <button class="different">
                    <div class="btn__text textBtn">Все работы</div>
                </button>
                </router-link>
            </div>
       </div>
        <div class="work__whatWeDo">
            <div class="whatWeDo__imgBlock">
            </div>
            <div class="whatWeDo__ourServices">
                <our-services/>
            </div>
        </div>
        <form-feedback/>
        <form-contact/>
        <div v-scroll="handleScroll" class="work__footer">
            <hr class="work_footerLine" id="line" />
            <div id="Bg" class="darkened">
                <div class="about__bg"></div>
            </div>
            <div class="footer__link">
                <div class="link__text textNormal">Узнать больше</div>
                <div class="link__title textTitle">LUXIE VASE & LAMP</div>
            </div>
            <div class="footer__timer">
                <div class="timer__text textNormal">Через</div>
                <div class="timer__title textTitle">0{{ currentTime }}</div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import FormContact from '../components/form-contact/form-contact.vue';
import FormFeedback from '../components/form-feedback/form-feedback.vue';
import ourServices from '../components/our-services/our-services.vue';

export default {
  components: { ourServices, FormFeedback, FormContact },
    name: 'work-page',
    data(){
        return{
        currentTime: 8,
        timer: null,
        }
    },
    computed: mapGetters(['allPostsWorks']), 
    // methods:,
    mounted(){ 
    this.fetchPosts();
    },
    methods: {
    ...mapActions(['fetchPosts']),
    handleScroll: function (evt, el) {
      if (window.scrollY > 5350) {
        this.startTimer();
        this.startLine();
        this.startOpasity();
        console.log(scrollY);
      }
      return window.scrollY > 5350;
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    //   this.$router.push("/");
    },
    startLine() {
      document.getElementById("line").classList.add("activeLine");
    },
    startOpasity(){
        document.getElementById("Bg").classList.add('activeOpacity');
    }
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
}
</script>