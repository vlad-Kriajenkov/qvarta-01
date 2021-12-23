<template>
  <div class="home">
    <div class="home__header">
      <div class="home__columnInfo">
        <div class="column__logo textTitle ">QVARTA</div>
        <div class="column__info">
          <p class="info__text textNormal">{{$t('home_SubTitle')}}</p>
          <div class="info__title textTitle">
            <i18n path="home_title"> 
              <br place="break" />
            </i18n>
          </div>
        </div>
        <button  
        id="goto" 
        @click="goto('formFeedback')" 
        class="column__btn textBtn ">
          <p>{{$t('btnHeader')}}</p> 
          <div class="line"></div>
        </button>
      
        <button class="colum__btnScroll textBtn">
          scroll
        </button>
        
      </div>
      <div 
      class="home__columnProduct" 
      @click="newBg =!newBg">
        <div class="column__imgProducts"> 
          <div class="imgProducts__imgLVL" :class="{newbg: newBg}"></div>
          <div class="imgProducts__imgBFS" :class="{newbg: newBg}"></div>
        </div>
      </div> 
      <div class="home__leng">
        <button 
          @click="setLocale('ru')"
        class="leng__ru textNormal">
          ru
          <div class="leng__line"></div>
        </button>
        <button 
        @click="setLocale('en')"
        class="leng__eng textNormal">
          eng
          <div class="leng__line"></div>
        </button> 
      </div>
    </div>
    <slickComponent 
    @reload="animSlick"
    :key="renderKey"></slickComponent>
    <div class="home__ourWorks">
      <div class="ourWorks__header">
        <div class="ourWorks__text textNormal">{{$t('home_ourWorksText')}}</div>
        <div class="ourWorks__title textTitleCard">{{$t('home_ourWorksTitle')}}</div>
      </div>
      <div class="ourWorks__container">
          <div 
          class="postItemWork"
          v-for="allPost in allPosts.slice(0, isClick ? allPosts.length : 4)"
          :key="allPost.id"
          >
              <img data-aos="fade-right" :src="require(`@/assets/${allPost.img}`)" alt="" class="postItemWork__img ">
              <div data-aos="fade-up" class="postItemWork__title textTitleCard">{{allPost.title}}</div>
              <div data-aos="fade-up" class="postItemWork__text textNormal">{{allPost.text}}</div>
          </div>
      </div>
      <div class="ourWorks__btn">
          <button 
          @click="isClick =!isClick"
          class="different"> 
            <div class="btn__text textBtn">{{$t('btnAllWork')}}</div>
          </button>
      </div>
    </div>
    <div class="home__whatWeDo">
      <div class="whatWeDo__imgBlock">
      </div>
      <div class="whatWeDo__ourServices">
        <our-services/>
      </div>
    </div>
    <div class="page" ref="formFeedback">
        <formFeedback/>
    </div>
    <form-contact/>
    <div
      v-scroll="handleScroll" 
      class="home__footer">
      <hr class="home_footerLine" id="line">
      <div id="Bg" class="darkened">
        <div class="home__bg"></div>
      </div>
      
      <div class="footer__link">
        <div class="link__text textNormal">{{$t('footerTitle')}}</div>
        <div class="link__title textTitle">{{$t('footerPage')}}</div>
      </div>
      <div class="footer__timer">
        <div class="timer__text textNormal">{{$t('footerTimer')}}</div>
        <div class="timer__title textTitle">0{{ currentTime }}</div>
      </div>  
    </div>
  </div>
  
</template>


 

<script >
import {mapGetters, mapActions} from 'vuex'
import ourServices from '../components/our-services/our-services';
import formFeedback from '../components/form-feedback/form-feedback.vue';
import FormContact from '../components/form-contact/form-contact.vue';
import slickComponent from '../components/v-slick/slick-slider';

export default {
  name: 'Home',
  components: {
    ourServices,
    formFeedback,
    FormContact,
    slickComponent,
  },
  data(){
    return{
      isClick: false,
      currentTime: 8,
      timer: null,
      newBg: false,
      renderKey: 1,
    }
  },
  
  destroyed() {
    this.stopTimer()
  }, 
  mounted(){ 
    
    this.fetchPost();
    
  },
  methods: {
    ...mapActions(['fetchPost']),
      goto(refName) {
        var element = this.$refs[refName];
        console.log(element);
        var top = element.offsetTop;
        window.scrollTo(0, top);
      },
      setLocale(locale){
            import(`../lang/${locale}.json`).then((msgs) =>{
                this.$i18n.setLocaleMessage(locale, msgs)
                this.$i18n.locale = locale
                this.renderKey++
            })
           
            
        },
     animSlick(locale){
       alert(locale);
      //  if (locale = "ru") {
      //    this.renderKey++
      //  }  
      },

     handleScroll: function(evt, el){
        var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
       
      if (window.scrollY+1 >= scrollHeight - innerHeight) {
          this.startTimer()
          this.startLine()
          this.startOpasity();
          console.log(scrollY);
      }
     },
      startTimer() {
        this.timer = setInterval(() => {
          this.currentTime--
        }, 1000)
      },
      stopTimer() {
        clearTimeout(this.timer)
      
      },
      startLine(){
        document.getElementById('line').classList.add('activeLine');
      }, 
      startOpasity(){
        document.getElementById("Bg").classList.add('activeOpacity')
      },
     
    },
    watch:{
      
      currentTime(time) {
        if (time === 0) {
          this.stopTimer()
          this.$router.push('/about') 
        }
      },
     

    },
    computed:{
      ...mapGetters(['allPosts']), 
    
      quots(){
        return[
          {
            title: this.$t('home_SliderQuotes1')
          },
          {
            title: this.$t('home_SliderQuotes2')
          },
          {
            title: this.$t('home_SliderQuotes3')
          },
          {
            title: this.$t('home_SliderQuotes4')
          },
        ]
      },
      
    }
}
</script>
