<template>
    <div class="workProduct">
        <div class="workProduct__header">
            <div class="workProduct__logo textTitle">QVARTA</div>
            <div class="workProduct__boxTitle">
                <div class="boxTitle__text textNormal">{{$t('workProduct_Title')}}</div>
                <div class="boxTitle__title textTitle">LUXIE VASE & LAMP</div>
                <div class="boxTitle__text textNormal">{{$t('workProduct_Title2')}}</div>
            </div>
            <div class="workProduct__boxBtn">   
                <button class="box1__btn textBtn"> 
                    <p>{{$t('btnHeader')}}</p>
                    <div class="line"></div>
                </button>
            </div>
        </div> 
        <div class="workProduct__luxieLamp">\
            <div class="luxieLamp__title textNormal">
                {{$t('workProduct_namePage')}}
                <span class='textBold'>LUXIE VASE & LAMP</span>
            </div>    
            <div class="luxieLamp__wrapperAboutProject">
                <div data-aos="fade-right" class="wrapperAboutProject__columImg">
                    <img src="../assets/img/work-product/img-1.svg" alt="">
                    <img src="../assets/img/work-product/img-2.svg" alt="">
                </div>
                <div data-aos="fade-right" class="wrapperAboutProject__AboutProject">
                    <div class="AboutProject__boxTitle">
                        <div class="boxTitle__text textNormal">LUXIE VASE & LAMP</div>   
                        <div class="boxTitle__title textTitle">{{$t('workProduct_aboutProduct')}}</div>
                    </div>
                    <div
                    v-for="AboutProject in AboutProjects"
                    :key="AboutProject.id"
                    class="AboutProject__boxSubTitle">
                        <div class="boxSubTitle__title textTitleCard">{{AboutProject.title}}</div>
                        <div class="boxSubTitle__text textNormal">{{AboutProject.text}}</div>
                    </div>
                     <div class="AboutProject__boxSubTitle">
                        <div class="boxSubTitle__title textTitleCard">{{$t('workProduct_aboutProductTitle6')}}</div>
                        <div class="boxSubTitle__texts textNormal">В наши дни люди забывают о природе, в нашем мире господствует индустриализация. Почти каждый сектор промышленности вносит свой вклад в крушение планеты.</div>
                        <div class="boxSubTitle__texts textNormal">Но человечество и природа неотделимы друг от друга! Нам нужно привести себя в гармонию с миром природы, мы должны вернуться к восприятию человечества как его части. </div>
                        <div class="boxSubTitle__texts textNormal">Этой работой мы хотим обратить ваше внимание на то, что природа - это главное в нашей жизни, это ЦЕНТР нашего мира, который мы любим и должны беречь. Итак, во-первых, это не лампа. </div>
                        <div class="boxSubTitle__texts textNormal">Этот продукт представляет собой вазу со светодиодной подсветкой, а не наоборот.</div>
                    </div>
                </div>
            </div>     
            <div class="luxieLamp__boxImg">
                <img data-aos="fade-right" src="../assets/img/work-product/img-3.svg" alt="">
                <img data-aos="fade-right" src="../assets/img/work-product/img-4.svg" alt="">
                <img data-aos="fade-right" src="../assets/img/work-product/img-5.svg" alt="">
            </div>
            <itemVideoPlayer/> 
        </div>
        <form-feedback/>
        <form-contact/>
        <div v-scroll="handleScroll"  class="workProduct__footer ">
            <hr class="workProduct_footerLine" id="line" />
            <div id="Bg" class="darkened">
                <div class="workProduct__bg"></div>
            </div>
            <div class="footer__link">
                <div class="link__text textNormal">{{$t('footerTitle')}}</div>
                <div class="link__title textTitle">MINI PHA</div>
            </div>
            <div class="footer__timer">
                <div class="timer__text textNormal">{{$t('footerTimer')}}</div>
                <div class="timer__title textTitle">0{{ currentTime }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import FormContact from '../components/form-contact/form-contact.vue';
import FormFeedback from '../components/form-feedback/form-feedback.vue';
import itemVideoPlayer from '../components/item-video-player/item-video-player';
export default {
    name: 'work-product',
     components:{
          itemVideoPlayer,
          FormContact,
          FormFeedback,
      },
    data(){
        return{
            currentTime: 8,
            timer: null,
        }
    },
    computed:{
        AboutProjects(){
            return[
                {
                    title: this.$t('workProduct_aboutProductTitle1'),
                    text: 'LUXIE VASE & LAMP'
                },
                {
                    title: this.$t('workProduct_aboutProductTitle2'),
                    text: 'Разработка дизайна ночной лампы'
                },
                {
                    title: this.$t('workProduct_aboutProductTitle3'),
                    text: 'Концепт-дизайн, разработка конструкции устройства, 3D - моделирование, предметная визуализация'
                },
                {
                    title: this.$t('workProduct_aboutProductTitle4'),
                    text: 'Qvarta products'
                },
                {
                    title: this.$t('workProduct_aboutProductTitle5'),
                    text: '2020'
                }
            ]
        }
    },
    destroyed() {
        this.stopTimer()
    }, 
    methods: {
    handleScroll: function (evt, el) {
        var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        if (window.scrollY+1 >= scrollHeight - innerHeight) {
            this.startTimer();
            this.startLine();
            this.startOpasity();
            console.log(scrollY);
        }else if(window.scrollY+1 <= scrollHeight - innerHeight){

        }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    
    },
    startLine() {
      document.getElementById("line").classList.add("activeLine");
    },
    startOpasity(){
        document.getElementById("Bg").classList.add('activeOpacity')
    }
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
        this.$router.push("/");
      }
    },
  },
}
</script>

<style scoped>

</style>