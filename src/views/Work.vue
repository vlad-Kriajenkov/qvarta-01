<template>
  <div class="work">
    <div class="work__headerWork">
      <router-link 
      to="/"
      class="headerWork__logoWork">
        <div class=" textTitle">QVARTA</div>
      </router-link>
      <div class="headerWork__productColum">
        <div class="productColum__imgProducts"></div>
      </div>
      <div class="headerWork__infoColum">
        <div class="infoColum__text textNormal">{{ $t("work_SubTitle") }}</div>
        <div class="infoColum__title textTitle">{{ $t("work_title") }}</div>
        <button
        id="goto" 
        @click="goto('formFeedback')" 
        class="box1__btn textBtn">
          <p>{{ $t("btnHeader") }}</p>
          <div class="line"></div>
        </button>
         <button class="colum__btnScrollWork textBtn">
          <div class="btnScrollWork__animText">scroll</div>
        </button>
      </div>
    </div>
    <div class="work__product">
      <div class="product__title textNormal">
        <i18n path="work_NamePage">
          <span class="textBold" place="action">
            — {{ $t("about_namePageOpen") }}</span
          >
        </i18n>
      </div>
      <div class="product__list">
        <router-link
          class="product__item"
          v-for="allPostsWork in allPostsWorks.slice(
            0,
            isClick ? allPostsWorks.length : 5
          )"
          :key="allPostsWork.id"
          to="/work-product"
        >
          <img
            data-aos="fade-right"
            :src="require(`@/assets/${allPostsWork.img}`)"
            alt=""
            class="product__img"
          />
          <div data-aos="fade-up" class="product__titleItem textTitleCard">
            {{ allPostsWork.title }}
          </div>
          <div data-aos="fade-up" class="product__text textNormal">
            {{ allPostsWork.text }}
          </div>
        </router-link>
      </div>
      <div class="ourWorks__btn">
        <button @click="isClick = !isClick" class="different">
          <div class="btn__text textBtn">{{ $t("btnAllWork") }}</div>
        </button> 
      </div>
    </div>
    <div class="work__whatWeDo">
      <div class="whatWeDo__imgBlock"></div>
      <div class="whatWeDo__ourServices">
        <our-services />
      </div>
    </div>
    <div class="page" ref="formFeedback">
      <form-feedback />
    </div>
   
    <form-contact />
    <div v-scroll="handleScroll" class="work__footer">
      <hr class="work_footerLine" id="line" />
      <div id="Bg" class="darkened">
        <div class="work__bg"></div>
      </div>
      <div class="footer__link">
        <div class="link__text textNormal">{{ $t("footerTitle") }}</div>
        <div class="link__title textTitle">LUXIE VASE & LAMP</div>
      </div>
      <div class="footer__timer">
        <div class="timer__text textNormal">{{ $t("footerTimer") }}</div>
        <div class="timer__title textTitle">0{{ currentTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormContact from "../components/form-contact/form-contact.vue";
import FormFeedback from "../components/form-feedback/form-feedback.vue";
import ourServices from "../components/our-services/our-services.vue";

export default {
  components: { ourServices, FormFeedback, FormContact },
  name: "work-page",
  data() {
    return {
      currentTime: 8,
      timer: null,
      isClick: false,
    };
  },
  computed: mapGetters(["allPostsWorks"]),
  // methods:,
  mounted() {
    this.fetchPosts();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    goto(refName) {
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    handleScroll: function (evt, el) {
      var scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      if (window.scrollY + 1 >= scrollHeight - innerHeight) {
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
    startOpasity() {
      document.getElementById("Bg").classList.add("activeOpacity");
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
        this.$router.push("/work-product");
      }
    },
  },
};
</script>

<style></style>
