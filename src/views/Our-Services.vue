<template>
    <div class="ourService">
        <div class="ourService__header">
            <div class="header__servicesColum" >
                <div class="servicesColum__imgProducts"></div>
            </div>
           <div class="header__infoColum">
                <div class="infoColum__text textNormal">что мы делаем</div>
                <div class="infoColum__title textTitle">Наши услуги</div>
                <button class="box1__btn textBtn">
                    <p>Обсудить ваш проект</p>
                    <div class="line"></div>
                </button>
           </div>
       </div>
       <div class="ourService__listServices">
           <div class="listServices__titile textNormal"> 
                 Главная<span class='textBold'> — Услуги</span>
           </div>
           <div 
           v-for="Service in allPostsService"
           :key="Service.id"
           class="listServices__wrapperCard">
               <div class="wrapperCard__itemCard">
                    <div class="itemCard__num textNormal">{{Service.num}}</div>
                    <div class="itemCard__title textTitle">{{Service.title}}</div>
                    <div class="itemCard__text textNormal">{{Service.text}}</div>
                    <button class="itemCard__btn textBtn">
                        <p>Узнать больше</p>
                        <div class="line"></div>
                    </button>
               </div>
               <div class="wrapperCard__itemProducct">
                   <img  :src="require(`@/assets/${Service.img}`)" alt="">
               </div>
           </div>
       </div>
       <form-feedback/>
       <form-contact/>
       <div v-scroll="handleScroll"  class="ourService__footer ">
            <hr class="ourService_footerLine" id="line" />
            <div id="Bg" class="darkened">
                <div class="ourService__bg"></div>
            </div>
            <div class="footer__link">
                <div class="link__text textNormal">Узнать больше</div>
                <div class="link__title textTitle">MINI PHA</div>
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
import formContact from '../components/form-contact/form-contact.vue';
import FormFeedback from '../components/form-feedback/form-feedback.vue';



export default {
  components: { formContact, FormFeedback  },
    data(){
     return{
        currentTime: 8,
        timer: null,
        }
    },
    computed: mapGetters(['allPostsService']), 
    methods: {
        ...mapActions(['fetchPostService']),
        handleScroll: function (evt, el) {
        if (window.scrollY > 6360) {
            this.startTimer();
            this.startLine();
            this.startOpasity();
            console.log(scrollY);
        }
        return window.scrollY > 6360;
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
            document.getElementById("Bg").classList.add('activeOpacity')
        }
    },
    mounted(){ 
    this.fetchPostService();
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