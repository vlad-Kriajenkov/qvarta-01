<template>
    <div class="home__slider">
        <div class="slider__title textNormal">
            {{$t('home_SliderTitle')}} <span class="textBold">Q</span>
        </div>
 

        <slick
            ref="slick"
            :options="slickOptions"
            @init="handleInit"
            @reInit="handleReInit"
            
        >
            <!-- <div class="slider__quotes textNormal ml1">{{$t('home_SliderQuotes1')}}</div> -->
            <div class="slider__quotes textNormal ml1">{{$t('home_SliderQuotes1')}}</div>
            <div class="slider__quotes textNormal ml2">{{$t('home_SliderQuotes2')}}</div>
            <div class="slider__quotes textNormal ml3">{{$t('home_SliderQuotes3')}}</div>
            <div class="slider__quotes textNormal ml4">{{$t('home_SliderQuotes4')}}</div>
        </slick>
        
    </div>
</template>

<script>

import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';


export default {
    name:"slick-component",
    components:{
        Slick
    },
    data(){
        return{
            slickOptions: {
                dots: true,
                infinite: false,
                autoplay: false,
                arrows : false,                    
                draggable:true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                // Any other options that can be got from plugin documentation
            },
        }
    },
    mounted() {
        const textWrapper1 = document.querySelector('.ml1');
        const textWrapper2 = document.querySelector('.ml2');
        const textWrapper3 = document.querySelector('.ml3');
        const textWrapper4 = document.querySelector('.ml4');

        textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        // console.log(textWrapper4);


         this
        .$anime
        .timeline({loop: true})
        .add({
          targets: '.ml1 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.ml1',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
         

        this
            .$anime
            .timeline({loop: true})
            .add({
            targets: '.ml2 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
            }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });  

            this
            .$anime
            .timeline({loop: true})
            .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
            }).add({
            targets: '.ml3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });  

        this
            .$anime
            .timeline({loop: true})
            .add({
            targets: '.ml4 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
            }).add({
            targets: '.ml4',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });  
    },
    methods:{
        animSlick: function(){
            this.renderKey++
            const textWrapper1 = document.querySelector('.ml1');
            textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            this
            .$anime
            .timeline({loop: true})
            .add({
            targets: '.ml1 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
            }).add({
            targets: '.ml1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });
            
        },
        
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            // this.renMy = false
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
                // this.renMy = true

            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
            
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
            
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);

        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    }

}
</script>