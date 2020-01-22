<template>
    <div class="pdlContent">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <cxk1 key="cxk1" v-if="isShowCxk1" @toJump2="toJump2"></cxk1>
            <cxk2 key="cxk2" v-if="isShowCxk2" @toJump3="toJump3"></cxk2>
            <cxk3 key="cxk3" v-if="isShowCxk3" @toJump4="toJump4"></cxk3>
            <cxk4 key="cxk4" v-if="isShowCxk4" @toJump5="toJump5"></cxk4>
            <cxk5 key="cxk5" v-if="isShowCxk5" @toJump6="toJump6"></cxk5>
            <cxk6 key="cxk6" v-if="isShowCxk6" @toJump7="toJump7" @toPlayVideo="toPlayVideo_1"></cxk6>
            <cxk7 key="cxk7" v-if="isShowCxk7" @toJump8="toJump8" @toPlayVideo="toPlayVideo_2"></cxk7>
            <cxk8 key="cxk8" v-if="isShowCxk8"></cxk8>
        </transition>
        <div class="endAudio">
            <audio id="audio" ref="audio" loop autoplay="autoplay" preload webkit-playsinline="true"  playsinline="true" src="../assets/img/P006_2.mp3"></audio>
        </div>
    </div>
</template>

<script>
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
        return {
            isShowCxk1: true,
            isShowCxk2: false,
            isShowCxk3: false,
            isShowCxk4: false,
            isShowCxk5: false,
            isShowCxk6: false,
            isShowCxk7: false,
            isShowCxk8: false,
        }
    },
    components: { cxk1, cxk2, cxk3, cxk4, cxk5, cxk6, cxk7, cxk8 },
    mounted() {
        const _this = this;
        setTimeout(() => {
            _this.autoPlayMusic();//调用所有浏览器自动音乐播放的函数
            _this.audioAutoPlay();//调用微信浏览器自动音乐播放的函数
        }, 200)
    },
    methods: {
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
        beforeEnter(el) {
            el.style.opacity = 0
            el.style.translateX = '0'
        },
        enter(el, done) {
            Velocity(el, {
                translateX: '-7.5rem',
                opacity: 1
            }, {
                duration: 1200,
                complete: done
            })
        },
        beforeLeave(el) {
            el.style.translateX = '0'
            el.style.opacity = 1
        },
        leave(el, done) {
            Velocity(el, {
                translateX: '-7.5rem',
                opacity: 0
            }, {
                duration: 1200,
                complete: done
            })
        },
        toPlayVideo_1() {
            this.musicPlay(false)
        },
        toPlayVideo_2() {
            this.musicPlay(false)
        },
        toJump2(val) {
            this.isShowCxk1 = false
            this.isShowCxk2 = true
        },
        toJump3(val) {
            this.isShowCxk2 = false
            this.isShowCxk3 = true
        },
        toJump4(val) {
            this.isShowCxk3 = false
            this.isShowCxk4 = true
        },
        toJump5(val) {
            this.isShowCxk4 = false
            this.isShowCxk5 = true
        },
        toJump6(val) {
            this.isShowCxk5 = false
            this.isShowCxk6 = true
        },
        toJump7(val) {
            this.musicPlay(true)
            this.isShowCxk6 = false
            this.isShowCxk7 = true
        },
        toJump8(val) {
            this.musicPlay(true)
            this.isShowCxk7 = false
            this.isShowCxk8 = true
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
    .slideFade-enter-active {
	    transition: all 1.2s ease;
	}
	.slideFade-enter, .slideFade-leave {
        opacity: 0;
		transform: translateX(7.5rem);
	}
</style>