<template>
  <div class="about">
    <div class="about__header">
      <div class="header__logo textTitle">
        QVARTA
      </div>
      <div class="header__box1">
        <div class="header__text textNormal">{{$t('about_SubTitle')}}</div>
        <div class="header__title textTitle">
          <i18n path="about_titile">
            <br place="break" />
          </i18n>
        </div>
        <button class="box1__btn textBtn">
          <p>{{$t('btnHeader')}}</p>
          <div class="line"></div>
        </button>
      </div>
      <div class="header__box2">
        <div class="box2__room"></div>
        <div class="box2__info">
          <div class="infoWrapper textNormal">
            <span class="textBold">{{$t('about_infoHederBold')}}</span>{{$t('about_infoHederNormal')}}</div>
        </div>
      </div>
    </div>
    <div class="about__content">
      <div class="content__namePage textNormal">
        <i18n path="about_namePage">
          <span class="textBold" place="action"> — {{$t('about_namePageOpen')}}</span>
        </i18n>
       
      </div>
      <div class="content__infoAbout">
        <div class="infoAbout__list">
          <div
            v-for="infoCard in infoCards"
            :key="infoCard.id"
            class="list__item"
          >
            <div class="item__number textBold">{{ infoCard.number }}</div>
            <div class="item__title textBold">{{ infoCard.title }}</div>
            <div class="item__text textNormal">{{ infoCard.text }}</div>
          </div>
        </div>
        <div class="infoAbout__bg"></div>
      </div>
    </div>
    <div class="about__clients">
      <div class="clients__text textNormal">{{$t('about_clientsText')}}</div>
      <div class="clients__title textTitle">{{$t('about_clientsTitle')}}</div>
      <div class="clients__logo">
        <img id="PHILIPMORIRIS" src="../assets/img/About/clients/PHILIPMORIRIS_logo.svg" alt="PHILIPMORIRIS" />
        <img id="spacebit" src="../assets/img/About/clients/spacebit.svg" alt="spacebit" />
        <img id="URE" src="../assets/img/About/clients/logo.png" alt="URE" />
        <img id="FEELREAL" src="../assets/img/About/clients/FEELREAL_logo.svg" alt="FEELREAL" />
      </div>
    </div>
    <div class="about__staff">
      <div class="staff__text textNormal">{{$t('about_stafText')}}</div>
      <div class="staff__title textTitle">{{$t('about_stafTitle')}}</div>
      <div class="staff__wrapperlist">
        <div v-for="staf in staff" :key="staf.id" class="staff__listStaff">
          <img class="listStaff__img" :src="staf.img" alt="staff" />
          <div class="listStaff__box">
            <div>
              <div class="listStaff__name textTitleCard">{{ staf.name }}</div>
              <div class="listStaff__position textNormal">{{ staf.position }}</div>
            </div>
            <div class="listStaff__infoPerson textNormal">{{ staf.infoPerson }}</div>
            <div class="listStaff__quot textTitleCard ">{{ staf.quote }}</div>
            <div class="listStaff__networks">
              <div class="networksAbout__link">
                  <a href="#" class="textNormal"> Behance</a>
                  <div class="border"></div>
              </div>
              <div class="networksAbout__link">
                  <a href="#" class="textNormal">Facebook</a>
                  <div class="border"></div>
              </div>
              <div class="networksAbout__link">
                  <a href="#" class="textNormal">Telegram</a>
                  <div class="border"></div>
              </div>
            </div>
          </div>  
          
        </div>
      </div>
    </div>
    <form-feedback />
    <form-contact />
    <div v-scroll="handleScroll" class="about__footer">
      <hr class="about_footerLine" id="line" />
      <div id="Bg" class="darkened">
        <div class="about__bg"></div>
      </div>
      <div class="footer__link">
        <div class="link__text textNormal">{{$t('footerTitle')}}</div>
        <div class="link__title textTitle">{{$t('footerPageAbout')}}</div>
      </div>
      <div class="footer__timer">
        <div class="timer__text textNormal">{{$t('footerTimer')}}</div>
        <div class="timer__title textTitle">0{{ currentTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import FormContact from "../components/form-contact/form-contact.vue";
import formFeedback from "../components/form-feedback/form-feedback.vue";

export default {
  components: { formFeedback, FormContact },
  name: "about",
  data() {
    return {
      currentTime: 8,
      timer: null,
      newBg: false,
      // infoCards: [
      //   {
      //     id: "1",
      //     number: "01",
      //     title: this.$t('about_cardTitle'),
      //     text: this.$t('about_cardText'),
      //   },
        //
      // ],
      staff: [
        {
          img: require("../assets/img/About/staff/staf1.svg"),
          name: "Артемий Дробязко",
          position: "Co-founder / Project manager",
          infoPerson: "Скрупулезно подходит к каждому проекту. Детали, детали и снова детали. Начинал карьеру… Но когда понял, что его идеи не могут реализовать другие — начал постигать дзэн… и игру на гитаре, чтобы музыкой снимать рабочее напряжение.",
          quote: "Честны перед собой, нашим клиентом и продуктом."
        },
        {
          img: require("../assets/img/About/staff/staf2.svg"),
          name: "Макс Мисечко",
          position: "Co-founder / Product Design Engineer",
          infoPerson: "Скрупулезно подходит к каждому проекту. Детали, детали и снова детали. Начинал карьеру… Но когда понял, что его идеи не могут реализовать другие — начал постигать дзэн… и игру на гитаре, чтобы музыкой снимать рабочее напряжение.",
          quote: "Либо делаем крутой продукт, либо не делаем его вообще. "
        },
      ],
    };
  },
  computed:{
    infoCards(){
      return [
           {
          id: "1",
          number: "01",
          title: this.$t('about_cardTitle1'),
          text: this.$t('about_cardText1'),
        },
         {
          id: "2",
          number: "02",
          title: this.$t('about_cardTitle2'),
          text: this.$t('about_cardText2'),
        },
        {
          id: "3",
          number: "03",
          title: this.$t('about_cardTitle3') ,
          text:  this.$t('about_cardText3'),
        },
        {
          id: "4",
          number: "04",
          title:  this.$t('about_cardTitle4'),
          text:  this.$t('about_cardText4'),
        },
      ]
    }
  },

  destroyed() {
    this.stopTimer();
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
        this.$router.push("/work");
      }
    },
  },
};
</script>

<style scoped></style>
