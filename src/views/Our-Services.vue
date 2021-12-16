<template>
    <div class="ourService">
        <div class="ourService__header">
            <div class="header__logo textTitle">QVARTA</div>
            <div class="header__servicesColum" >
                <div class="servicesColum__imgProducts"></div>
            </div>
           <div class="header__infoColum">
                <div class="infoColum__text textNormal">{{$t('ourService_SubTitle')}}</div>
                <div class="infoColum__title textTitle">{{$t('ourService_title')}}</div>
                <button class="box1__btn textBtn">
                    <p>{{$t('btnHeader')}}</p>
                    <div class="line"></div> 
                </button>
           </div>
       </div>
       <div class="ourService__listServices">
           <div class="listServices__titile textNormal"> 
                <i18n path="ourService_namePage">
                     <span class='textBold' place="action"> — {{$t('ourService_namePageOpen')}} </span>
                </i18n>
                
           </div>
           <div 
           v-for="serviceCard in serviceCards"
           :key="serviceCard.id"
           class="listServices__wrapperCard">
               <div class="wrapperCard__itemCard">
                    <div class="itemCard__num textNormal">{{serviceCard.num}}</div>
                    <div class="itemCard__title textTitle">{{serviceCard.title}}</div>
                    <div class="itemCard__text textNormal">{{serviceCard.text}}</div>
                    <router-link
                    :to="serviceCard.url"
                    >
                        <button class="itemCard__btn textBtn">
                            <p>{{$t('btnMoreInfo')}}</p>
                            <div class="line"></div>
                        </button>
                    </router-link>
                
               </div>
               <div class="wrapperCard__itemProducct">
                   <img  :src="require(`@/assets/${serviceCard.img}`)" alt="">
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
    computed: {
        serviceCards() {
             return[
                {
                    "id": 1,
                    num: "01",
                    title: this.$t('ourService_CardTitle1'),
                    text: this.$t('ourService_CardText1'),
                    img: "img/Our-Services/img-1.svg",
                    url:"/Services1",
                },
                {
                    id:2,
                    num:"02",
                    title: this.$t('ourService_CardTitle2'),
                    text: this.$t('ourService_CardText2'),
                    img: "img/Our-Services/img-2.svg",
                    url:"/",
                },
                {
                    id: 3,
                    num:"03",
                    title: this.$t('ourService_CardTitle3'),
                    text: this.$t('ourService_CardText3'),
                    img: "img/Our-Services/img-3.svg",
                    url:"/",
                },
                {
                    id: 4,
                    num:"04",
                    title: this.$t('ourService_CardTitle4'),
                    text: this.$t('ourService_CardText4'),
                    img: "img/Our-Services/img-4.svg",
                    url:"/",
                },
                {
                    id: 5,
                    num:"05",
                    title: this.$t('ourService_CardTitle5'),
                    text: this.$t('ourService_CardText5'),
                    img: "img/Our-Services/img-5.svg",
                    url:"/",
                },
                {
                    id: 6,
                    num:"06",
                    title: this.$t('ourService_CardTitle6'),
                    text: this.$t('ourService_CardText6'),
                    img: "img/Our-Services/img-6.svg",
                    url:"/",
                },
                {
                    id: 7,
                    num:"07",
                    title: this.$t('ourService_CardTitle7'),
                    text: this.$t('ourService_CardText7'),
                    img: "img/Our-Services/img-7.svg",
                    url:"/",
                },
                {
                    id: 8,
                    num:"08",
                    title: this.$t('ourService_CardTitle8'),
                    text: this.$t('ourService_CardText8'),
                    img: "img/Our-Services/img-8.svg",
                    url:"/",
                },
                {
                    id: 9,
                    num:"09",
                    title: this.$t('ourService_CardTitle9'),
                    text: this.$t('ourService_CardText9'),
                    img: "img/Our-Services/img-9.svg",
                    url:"/",
                }, 
                {
                    id: 10,
                    num:"10",
                    title: this.$t('ourService_CardTitle10'),
                    text: this.$t('ourService_CardText10'),
                    img: "img/Our-Services/img-10.svg",
                    url:"/",
                }
            ]
        }
       
    },
    methods: {
        handleScroll: function (evt, el) {
        let height = document.documentElement.scrollHeight;
        if (window.scrollY > height) {
            this.startTimer();
            this.startLine();
            this.startOpasity();
            console.log(scrollY);
        }
        return window.scrollY > height;
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
    watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },

}
</script>