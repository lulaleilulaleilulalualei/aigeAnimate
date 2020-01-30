<template>
    <div class="pdlContent">
        <swiper v-if="isImgLoad" class="swiperBox" :options="swiperOption" ref="swiper_main">
            <swiper-slide class="itemSwiper">
                <cxk1 key="cxk1" :_activeIndex="activeIndex" @toJump2="toJump"></cxk1>
            </swiper-slide>
            <swiper-slide class="itemSwiper">
               <cxk2 key="cxk2" :_activeIndex="activeIndex" @toJump3="toJump"></cxk2>
            </swiper-slide>
            <swiper-slide class="itemSwiper">
              <cxk3 key="cxk3" :_activeIndex="activeIndex" @toJump4="toJump"></cxk3>
            </swiper-slide>
            <swiper-slide class="itemSwiper">
               <cxk4 key="cxk4" :_activeIndex="activeIndex" @toJump5="toJump"></cxk4>
            </swiper-slide>
             <swiper-slide class="itemSwiper">
               <cxk5 key="cxk5" :_activeIndex="activeIndex" @toJump6="toJump"></cxk5>
            </swiper-slide>
             <swiper-slide class="itemSwiper">
              <cxk6 key="cxk6" :_activeIndex="activeIndex" @toJump7="toJump" @toPlayVideo="toPlayVideo_1"></cxk6>
            </swiper-slide>
             <swiper-slide class="itemSwiper">
              <cxk7 key="cxk7" :_activeIndex="activeIndex" @toJump8="toJump" @toPlayVideo="toPlayVideo_2"></cxk7>
            </swiper-slide>
             <swiper-slide class="itemSwiper">
              <cxk8 key="cxk8"></cxk8>
            </swiper-slide>
        </swiper>
        <div class="endAudio">
            <audio id="audio" ref="audio" loop autoplay="autoplay" preload webkit-playsinline="true"  playsinline="true" src="../assets/img/P006_2.mp3"></audio>
        </div>

        <div class="loading" v-if="!isImgLoad">
            <div class="loadingBox">{{count | countFil}}%</div>
            <span style="font-size: 0.28rem;">该效果可定制</span>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters , mapActions } from 'vuex';
import  Velocity from 'velocity-animate'
import cxk1 from './cxk_1'
import cxk2 from './cxk_2'
import cxk3 from './cxk_3'
import cxk4 from './cxk_4'
import cxk5 from './cxk_5'
import cxk6 from './cxk_6'
import cxk7 from './cxk_7'
import cxk8 from './cxk_8'

export default {
    data() {
        const $this = this
        return {
            swiperOption: {
                speed: 600,
                autoplay: {
                    delay: 4700,
                    stopOnLastSlide: true,
                    disableOnInteraction: true,
                },
                allowSlideNext: false, //设置为false可禁止向右或下滑动。
                allowSlidePrev: false, //设为false可禁止向左或上滑动。
                // noSwiping : true,
                on:{
                    slideChangeTransitionEnd: function(){
                        $this.cutSwiper()
                    }
                },
            },
            activeIndex: 0,
            publicPath: process.env.BASE_URL,
            count: 0,
            isImgLoad: false
        }
    },
    components: { swiper, swiperSlide, cxk1, cxk2, cxk3, cxk4, cxk5, cxk6, cxk7, cxk8 },
    computed: {
        swiper() {
            return this.$refs.swiper_main.swiper
        }
    },
    watch: {
        loadCount(val) {
            console.log(val)
        }
    },
    filters: {
        countFil(val) {
            return parseInt( val / 25 * 100)
        }
    },
    mounted() {
        this.loadPreImg()
    },
    methods: {
        ...mapActions([
            'toShowImgs'
        ]),
        loadPreImg() {
            const $this = this
            let imgArr = {
                //首页
                FM1: {
                    url: `${$this.publicPath}static/FM-1.jpg`,
                    imgSrc: new Image()
                },
                FM2: {
                    url: `${$this.publicPath}static/FM-2.png`,
                    imgSrc: new Image()
                },
                FM3: {
                    url: `${$this.publicPath}static/FM-3.png`,
                    imgSrc: new Image()
                },
                FM4: {
                    url: `${$this.publicPath}static/FM-4.png`,
                    imgSrc: new Image()
                },
                FM5: {
                    url: `${$this.publicPath}static/FM-5.png`,
                    imgSrc: new Image()
                },
                FM6: {
                    url: `${$this.publicPath}static/FM-6.png`,
                    imgSrc: new Image()
                },
                FM7: {
                    url: `${$this.publicPath}static/FM-7.png`,
                    imgSrc: new Image()
                },
                FM8: {
                    url: `${$this.publicPath}static/FM-8.png`,
                    imgSrc: new Image()
                },
                FM9: {
                    url: `${$this.publicPath}static/FM-9.png`,
                    imgSrc: new Image()
                },
                // 第二页
                FM21: {
                    url: `${$this.publicPath}static/FM2-1.jpg`,
                    imgSrc: new Image()
                },
                FM22: {
                    url: `${$this.publicPath}static/FM2-2.png`,
                    imgSrc: new Image()
                },
                // 第三页
                p0011: {
                    url: `${$this.publicPath}static/p001-1.jpg`,
                    imgSrc: new Image()
                },
                p0012: {
                    url: `${$this.publicPath}static/p001-2.png`,
                    imgSrc: new Image()
                },
                p0013: {
                    url: `${$this.publicPath}static/p001-3.png`,
                    imgSrc: new Image()
                },
                // 第四页
                p0021: {
                    url: `${$this.publicPath}static/p002-1.jpg`,
                    imgSrc: new Image()
                },
                p0022: {
                    url: `${$this.publicPath}static/p002-2.png`,
                    imgSrc: new Image()
                },
                p0023: {
                    url: `${$this.publicPath}static/p002-3.jpg`,
                    imgSrc: new Image()
                },
                // 第五页
                p0031: {
                    url: `${$this.publicPath}static/p003-1.jpg`,
                    imgSrc: new Image()
                },
                p0032: {
                    url: `${$this.publicPath}static/p003-2.jpg`,
                    imgSrc: new Image()
                },
                p0033: {
                    url: `${$this.publicPath}static/p003-3.jpg`,
                    imgSrc: new Image()
                },
                p0034: {
                    url: `${$this.publicPath}static/p003-4.png`,
                    imgSrc: new Image()
                },
                // 第六页
                p0041: {
                    url: `${$this.publicPath}static/p004-1.jpg`,
                    imgSrc: new Image()
                },
                p0042: {
                    url: `${$this.publicPath}static/P004-2.png`,
                    imgSrc: new Image()
                },
                // 第七页
                p0051: {
                    url: `${$this.publicPath}static/P005-1.jpg`,
                    imgSrc: new Image()
                },
                // 第八页
                p006: {
                    url: `${$this.publicPath}static/P006.jpg`,
                    imgSrc: new Image()
                }
            }
            let keys = Object.keys(imgArr)

            for(let key in keys) {
                let val = imgArr[keys[key]]
                
                val.imgSrc.onload = function() {
                   $this.count++
                }
                val.imgSrc.onerror = function(err) {
                    console.log(err)
                }
                val.imgSrc.src = imgArr[keys[key]].url;
            }
            this.toShowImgs(imgArr)
            setTimeout(() => {
                this.isImgLoad = true
                setTimeout(() => {
                    this.autoPlayMusic();//调用所有浏览器自动音乐播放的函数
                    this.audioAutoPlay();//调用微信浏览器自动音乐播放的函数
                }, 100)
            }, 500)
        },

        cutSwiper() {
            this.activeIndex = this.swiper.activeIndex
            if(this.activeIndex === 5 || this.activeIndex === 6) {
                this.swiper.allowSlideNext = true
                // this.swiper.allowSlidePrev = true
            }else if(this.activeIndex === 7) {
                this.swiper.allowSlideNext = false
                // this.swiper.allowSlidePrev = true
            }else{
                this.swiper.allowSlideNext = false
                // this.swiper.allowSlidePrev = false
            }
            
            if(this.activeIndex === 0) {
                this.swiper.allowSlidePrev = false 
            }else {
                this.swiper.allowSlidePrev = true
            }

            setTimeout(() => {
                this.musicPlay(true)
            }, 100)
        },
        //处理微信浏览器音乐自动播放问题
        audioAutoPlay() {
            var audio = document.getElementById('audio');
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
        },
        //解决所有浏览器音乐自动播放的问题
        autoPlayMusic() {
            let _this = this;
            /* 自动播放音乐效果，解决浏览器或者APP自动播放问题 */   
            function musicInBrowserHandler() {   
                _this.musicPlay(true);   
                document.body.removeEventListener('touchstart', musicInBrowserHandler);   
            }   
            document.body.addEventListener('touchstart', musicInBrowserHandler);   
            /* 自动播放音乐效果，解决微信自动播放问题 */   
            function musicInWeixinHandler() {   
                _this.musicPlay(true);   
                document.addEventListener("WeixinJSBridgeReady", function () {   
                    _this.musicPlay(true);   
                }, false);   
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);   
            }   
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);   
        },
        musicPlay(isPlay) {   
            var media = document.getElementById('audio');
            if (isPlay && media.paused) {
                media.play();   
            }   
            if (!isPlay && !media.paused) {   
                media.pause();   
            }   
        },
        toPlayVideo_1() {
            this.musicPlay(false)
        },
        toPlayVideo_2() {
            this.musicPlay(false)
        },
        toJump(val) {
            var media = document.getElementById('audio');
            this.swiper.autoplay = false
            this.swiper.allowSlideNext = true
            this.swiper.allowSlidePrev = true
            this.musicPlay(true)
        }
    }
}
</script>

<style lang="less" scoped>
    .pdlContent {
        width: 100%;
        height: 100%;
        margin: auto;
        position: relative;
        .endAudio {
            position: absolute;
            width: 100px;
            height: 20px;
            opacity: 0;
            top: 0;
            left: 0;
            z-index: 1;
        }
    }
    .swiperBox {
        width: 100%;
        height: 100%;
    }
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        .loadingBox {
            width: 3rem;
            height: 3rem;
            border: 0.06rem solid #fff;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 0.3rem;
        }
    }
</style>