<template>
    <div class="services1">
        <div class="services1__header">
            <div class="header__servicesColum" >
                <img src="../assets/img/Industrial-design/img-Header.svg" alt="">
            </div>
            <div class="header__infoColum">
                <div class="infoColum__text textNormal">наши услуги</div>
                <div class="infoColum__title textTitle">{{headerTitle}}</div>
                <button class="box1__btn textBtn">
                    <p>Обсудить ваш проект</p>
                    <div class="line"></div>
                </button>
            </div>
        </div>
        <div class="services1__productInfo">
            <div class="productInfo__namePage textNormal">
                 Главная — Услуги <span class='textBold'> — Промышленный дизайн </span>
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
                    <div class="nameBox__text textNormal">реализации</div>
                    <div class="nameBox__title textTitle">Примеры работ</div>
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
                <div class="nameBox__text textNormal">Промышленный дизайн</div>
                <div class="nameBox__title textTitle">Этапы разработки</div>
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
                to="/"
                class="serviceContainer"
                >
                    <img class="serviceContainer__img" src="../assets/img/Industrial-design/Addendum/img-1.svg" alt="">
                    <div class="serviceContainer__title  textBold">Разработка электроники</div>
                    <div class="serviceContainer__bg">
                        <p class="d textNormal">Узнать больше</p>
                    </div>
                </router-link>
                 <router-link 
                to="/"
                class="serviceContainer"
                >
                    <img class="serviceContainer__img" src="../assets/img/Industrial-design/Addendum/img-2.svg" alt="">
                    <div class="serviceContainer__title textBold">Изготовление прототипов</div>
                    <div class="serviceContainer__bg">
                        <p class="d textNormal">Узнать больше</p>
                    </div>
                </router-link>
                 <router-link 
                to="/"
                class="serviceContainer"
                >
                    <img class="serviceContainer__img" src="../assets/img/Industrial-design/Addendum/img-3.svg" alt="">
                    <div class="serviceContainer__title textBold">Авторский надзор за <br> производством корпусов и <br> электроники</div>
                    <div class="serviceContainer__bg">
                        <p class="d textNormal">Узнать больше</p>
                    </div>
                </router-link>
                 <router-link 
                to="/"
                class="serviceContainer"
                >
                    <img class="serviceContainer__img" src="../assets/img/Industrial-design/Addendum/img-4.svg" alt="">
                    <div class="serviceContainer__title textBold">Предметная визуализация</div>
                    <div class="serviceContainer__bg">
                        <p class="d textNormal">Узнать больше</p>
                    </div>
                </router-link>
            </div>
        </div>
        <form-feedback/>
        <form-contact/>
        <div v-scroll="handleScroll"  class="workProduct__footer ">
            <hr class="workProduct_footerLine" id="line" />
            <div id="Bg" class="darkened">
                <div class="workProduct__bg"></div>
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
            headerTitle: "Промышленный дизайн",
            serviceBox:[
                {
                    "title": "Услуга промышленного дизайна",
                    "texr": "Промышленный или как его еще называют индустриальный или предметный дизайн — отрасль дизайна, которая занимается созданием вещей и предметов. Промышленный дизайн определяет не только внешний вид предметов. Главная задача промышленного дизайнера — качественно воплотить идею и сделать предмет удобным для использования, качественным долговечным, и конечно, эстетически привлекательным."
                },
                {
                    "title": "Цена",
                    "texr": "от 2000$"
                },
                {
                    "title": "Срок",
                    "texr": "от 3-х недель"
                },
                {
                    "title": "Результат",
                    "texr": "4-5 вариантов дизайна вашего прибора. Под словом дизайн мы подразумеваем внешний вид (внешняя геометрия) вашего прибора или устройства"
                }
            ],
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
            stages: [
                {
                    "id": 1,
                    "title": "Составление ТЗ",
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {   
                    "id": 2,
                    "title": "Маркетинговое исследование",
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 3,
                    "title": "Подбор референсов",
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 4,
                    "title": "Прорисовка эскизов",
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 5,
                    "title": "Разработка конструкции",
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
                {
                    "id": 6,
                    "title": "Создание 3D-модели",
                    "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum eaque velit nemo odio dolorum veniam at quasi, sed cupiditate placeat numquam est. Aut, temporibus aliquam reprehenderit labore magni ut."
                },
            ]
        }
    },
    methods: {
      fav: function(stage){
        this.selectedItem = stage
      },
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
          this.$router.push("/");
           
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