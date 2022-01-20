<template>
    <div class="services1">
        <div class="services1__header1">
            <div class="header1__logo textTitle">QVARTA</div>
            <div class="header1__servicesColum" >
                <img src="../assets/img/Industrial-design/img-Header.svg" alt="">
            </div>
            <div class="header1__infoColum">
                <div class="infoColum1__text textNormal">{{$t('servicesSubTitle')}}</div>
                <div 
                v-for="headerTitle in headerTitle"
                :key="headerTitle.id"
                
                class="infoColum1__title textTitle">{{headerTitle.title}}</div>
                <button 
                id="goto" 
                @click="goto('formFeedback')"                 
                class="box1__btn textBtn">
                    <p>{{$t('btnHeader')}}</p>
                    <div class="line"></div>
                </button>
                <button class="colum__btnScrollServices textBtn">
                    scroll
                </button>
            </div>
        </div>
        <div class="services1__productInfo">
            <div class="productInfo__namePage textNormal">
                <i18n path="services_namePage">
                     <span class='textBold' place="action"> — {{$t('services_namePageOpen')}}</span>
                </i18n>
                
            </div>
            <div class="productInfo__serviceBox">
                <div class="serviceBox__infoServ">
                    <div 
                    v-for="industrial in serviceBox"
                    :key="industrial.id"
                    class="infoServ__boxIS">
                        <div class="boxIS__title textTitle">{{industrial.title}}</div>
                        <div class="boxIS__text textNormal">{{industrial.texr}}</div>
                    </div>
                </div>
                <div class="serviceBox__bgImg">
                    <img src="../assets/img/Industrial-design/serviceBox/img-Industrial.svg" alt="">
                </div>
            </div>
            <div class="productInfo__examples">
                <div class="examples__nameBox">
                    <div class="nameBox__text textNormal">{{$t('services_examplesSubTitle')}}</div>
                    <div class="nameBox__title textTitle">{{$t('services_examplesTitle')}}</div>
                </div>
                <div class="examples__boxProduct">
                    <div 
                        v-for="product in products"
                        :key="product.id"
                        class="boxProduct">
                        <img  :src="require(`@/assets/${product.img}`)" alt="" class="boxProduct__img ">
                        <div  class="boxProduct__title textTitleCard">{{product.title}}</div>
                        <div  class="boxProduct__text textNormal">{{product.text}}</div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="services1__stagesDev">
            <div class="stagesDev__nameBox">
                <div class="nameBox__text textNormal">{{$t('services_stagesDevSubTitle')}}</div>
                <div class="nameBox__title textTitle">{{$t('services_stagesDevTitle')}}</div>
            </div>
            <div 
            v-for="stage in stages"
            :key="stage.id"
           
            class="stagesDev__stagesBox"
            @click="fav(stage)">
            
                <div class="stagesBox">
                    <div class="stagesBox__title textTitle">
                        <span>{{stage.title}}</span>  <img src="../assets/img/Industrial-design/arrow.-open.svg" alt="">
                    </div>
                    <div 
                    v-bind:class="{'showInfo': selectedItem == stage}"
                    class="stagesBox__text textNormal">{{stage.text}}</div>
                </div>
            </div>
        </div>
        <div class="services1__addendum ">
            <div class="addendum__nameBox">
                <div class="nameBox__text textNormal">Будет полезно</div>
                <div class="nameBox__title textTitle">С этой услугой заказывают</div>
            </div>
            <div class="addendum__serviceContainer">
                <router-link 
                v-for="addendum in addendums"
                :key="addendum.url"
                tag="a"                    
                :to="addendum.url"
                class="serviceContainer"
                >
                    <img class="serviceContainer__img" :src="require(`@/assets/${addendum.img}`)" alt="">
                    <div class="serviceContainer__title  textBold">{{addendum.title}}
                        <!-- <i18n path="">
                            <br place="">
                        </i18n> -->
                    </div>
                    <div class="serviceContainer__bg">
                        <p class="d textNormal">{{$t("btnMoreInfo")}}</p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="page" ref="formFeedback">
            <form-feedback/>
        </div>        
        <form-contact/>
        <div v-scroll="handleScroll"  class="services__footer ">
            <hr class="services_footerLine" id="line" />
            <div id="Bg" class="darkened">
                <div class="services__bg"></div>
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
import formContact from '../components/form-contact/form-contact.vue'
import FormFeedback from '../components/form-feedback/form-feedback.vue'

export default {
  components: { formContact, FormFeedback },
    name:'Services1',
    data(){
        return{
            selectedItem: {},
            currentTime: 8,
            timer: null,        
            
            products:[
                {
                    "id": 1,
                    "img":"img/Industrial-design/product/img-1.svg",
                    "title": "LUXIE VASE LAMP",
                    "text":"Разработка дизайна ночной лампы"
                },
                {
                    "id": 2,
                    "img":"img/Industrial-design/product/img-2.svg",
                    "title": "SMART ASHRTAY",
                    "text": "Разработка дизайна, конструкции и функциональной части устройства"
                },
                {
                    "id": 3,
                   "img":"img/Industrial-design/product/img-3.svg",
                    "title": "BAMBOO FOOD STEAMER",
                    "text": "Разработка концепт-дизайна пароварки"
                },
                {
                    "id": 4,
                    "img":"img/Industrial-design/product/img-4.svg",
                    "title": "UV IRRADIATOR",
                    "text": "Разработка дизайна, конструкции и функциональной части устройства"
                },
            ],
        }
    },
    computed:{
        headerTitle(){
            return [
                {
                title: this.$t('servicesTitle'),
                
                }
            ]
        },
        serviceBox(){
             return[
                 {
                    "title": this.$t('services_serviceBoxTitle1'),
                    "texr": this.$t('services_serviceBoxText1')
                },
                {
                    "title": this.$t('services_serviceBoxTitle2'),
                    "texr": this.$t('services_serviceBoxText2')
                },
                {
                    "title": this.$t('services_serviceBoxTitle3'),
                    "texr": this.$t('services_serviceBoxText3')
                },
                {
                    "title": this.$t('services_serviceBoxTitle4'),
                    "texr": this.$t('services_serviceBoxText4')
                }
             ]
         },
         stages(){
             return[
                {
                    "id": 1,
                    "title": this.$t('services_stagesDev1'),
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {   
                    "id": 2,
                    "title": this.$t('services_stagesDev2'),
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 3,
                    "title": this.$t('services_stagesDev3'),
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 4,
                    "title": this.$t('services_stagesDev4'),
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 5,
                    "title": this.$t('services_stagesDev5'),
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 6,
                    "title": this.$t('services_stagesDev6'),
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
             ]
         },
        addendums(){
            return[
                {
                title: this.$t('services_addendum1'),
                url: '/about',
                img: 'img/Industrial-design/Addendum/electronics-min.png'
                },
                {
                title: this.$t('services_addendum2'), 
                url: '/work-product',
                img: 'img/Industrial-design/Addendum/prototype-min.png'
                },
                {
                title: this.$t('services_addendum3'), 
                url: '/3',
                img: 'img/Industrial-design/Addendum/clayton-cardinalli-min.png'
                },
                {
                title: this.$t('services_addendum4'), 
                url: '/4',
                img: 'img/Industrial-design/Addendum/medDevices-min.png'
                }
            ]
        }
    },
    destroyed() {
        this.stopTimer()
    },
    methods: {
    goto(refName) {
        var element = this.$refs[refName];
        console.log(element);
        var top = element.offsetTop;
        window.scrollTo(0, top);
    },  
    fav: function(stage){
        this.selectedItem = stage
    },
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