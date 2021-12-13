<template>
  <div class="about">
    <div class="about__header">
      <div class="header__box1">
        <div class="header__logo textTitle">QVARTA</div>
        <div class="header__text textNormal">о нас</div>
        <div class="header__title textTitle">
          Сильная команда <br />
          создает сильные <br />
          продукты
        </div>
        <button class="box1__btn textBtn">
          <p>Обсудить ваш проект</p>
          <div class="line"></div>
        </button>
      </div>
      <div class="header__box2">
        <div class="box2__room"></div>
        <div class="box2__info">
          <div class="infoWrapper textNormal">
            <span class="textBold"
              >Базис нашей студии основан на 4 принципах</span
            >
            которые являются нашими преимуществами и залогом успеха наших
            продуктов
          </div>
        </div>
      </div>
    </div>
    <div class="about__content">
      <div class="content__namePage textNormal">
        Главная <span class="textBold"> — о нас</span>
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
      <div class="clients__text textNormal">нам доверяют</div>
      <div class="clients__title textTitle">Наши клиенты</div>
      <div class="clients__logo">
        <img src="../assets/img/About/clients/PHILIPMORIRIS_logo.svg" alt="" />
        <img src="../assets/img/About/clients/spacebit.svg" alt="" />
        <img src="../assets/img/About/clients/logo.png" alt="" />
        <img src="../assets/img/About/clients/FEELREAL_logo.svg" alt="" />
      </div>
    </div>
    <div class="about__staff">
      <div class="staff__text textNormal">специалисты</div>
      <div class="staff__title textTitle">Наша команда</div>
      <div class="staff__wrapperlist">
        <div v-for="staf in staff" :key="staf.id" class="staff__listStaff">
          <img class="listStaff__img" :src="staf.img" alt="staff" />
          <div class="listStaff__name textTitleCard">{{ staf.name }}</div>
          <div class="listStaff__position textNormal">{{ staf.position }}</div>
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
        <div class="link__text textNormal">Узнать больше</div>
        <div class="link__title textTitle">Наши работы</div>
      </div>
      <div class="footer__timer">
        <div class="timer__text textNormal">Через</div>
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
      infoCards: [
        {
          id: "1",
          number: "01",
          title: "Продукт превыше всего",
          text: "Мы либо делаем крутой во всех смыслах продукт, либо не делаем его вообще. Потому что мы настоящие фанаты промышленного дизайна.",
        },
        {
          id: "2",
          number: "02",
          title: "Клиент не всегда прав",
          text: "Мы точно знаем, что в некоторых вещах разбираемся лучше своих клиентов. При всей нашей любви к ним, мы готовы бесконечно доказывать вам, как будет лучше.",
        },
        {
          id: "3",
          number: "03",
          title: "Мы работаем ради денег",
          text: "Главная задача проекта - принести вам прибыль. Мы не будем часами рассказывать о творческом подходе. Мы сделаем продукт, который купят.",
        },
        {
          id: "4",
          number: "04",
          title: "Мы ценим честность",
          text: "Мы всегда честны перед собой, перед нашими клиентами, партнерами и продуктом. И мы ждём того же от вас.",
        },
      ],
      staff: [
        {
          img: require("../assets/img/About/staff/staf1.svg"),
          name: "Имя",
          position: "Позиция",
        },
        {
          img: require("../assets/img/About/staff/staf2.svg"),
          name: "Имя",
          position: "Позиция",
        },
      ],
    };
  },
  mounted() {},
  destroyed() {
    this.stopTimer();
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
      this.$router.push("/work");
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
};
</script>

<style scoped></style>
