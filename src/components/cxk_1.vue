<template>
    <div class="fmContent">
        <div class="fmContentBg"></div>
        <transition name="fm2" @before-enter="handleBeforeEnterFm2" @enter="handleEnterFm2">
            <div v-if="fm2Show" class="fmImg_2"><img src="../assets/img/FM-2.png" alt=""></div>
        </transition>
        <transition name="fm3" @before-enter="handleBeforeEnterFm3" @enter="handleEnterFm3">
            <div v-if="fm3Show" class="fmImg_3"><img src="../assets/img/FM-3.png" alt=""></div>
        </transition>
        <transition name="fm4" @before-enter="handleBeforeEnterFm4" @enter="handleEnterFm4">
            <div v-if="fm4Show" class="fmImg_4"><img src="../assets/img/FM-4.png" alt=""></div>
        </transition>
        <transition name="fm5" @before-enter="handleBeforeEnterFm5" @enter="handleEnterFm5">
            <div v-if="fm5Show" class="fmImg_5"><img src="../assets/img/FM-5.png" alt=""></div>
        </transition>
        <transition name="fm6" @before-enter="handleBeforeEnterFm6" @enter="handleEnterFm6">
            <div v-if="fm6Show" class="fmImg_6"><img src="../assets/img/FM-6.png" alt=""></div>
        </transition>
        <transition name="fm7" @before-enter="handleBeforeEnterFm7" @enter="handleEnterFm7">
            <div v-if="fm7Show" class="fmImg_7"><img src="../assets/img/FM-7.png" alt=""></div>
        </transition>
        <transition name="fm8" @before-enter="handleBeforeEnterFm8" @enter="handleEnterFm8">
            <div v-if="fm8Show" class="fmImg_8"><img src="../assets/img/FM-8.png" alt=""></div>
        </transition>
        <transition name="fm9" @before-enter="handleBeforeEnterFm9" @enter="handleEnterFm9">
            <div v-if="fm9Show" class="fmImg_9"><img src="../assets/img/FM-9.png" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'

export default {
    data() {
        return {
            fm2Show: false,
            fm3Show: false,
            fm4Show: false,
            fm5Show: false,
            fm6Show: false,
            fm7Show: false,
            fm8Show: false,
            fm9Show: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.fm2Show = true
            setTimeout(() => {
                this.fm3Show = true
            }, 200)
        }, 1500)
    },
    methods: {
        // 动画一
        handleBeforeEnterFm2(el) {
            el.style.translateY = '0'
            el.style.opacity = 0
        },
        handleEnterFm2(el, done) {
            Velocity(el, {
                translateY: '-1.1rem',
                opacity: 1
            }, {
                duration: 1000,
                complete: done
            })
        },
        // 动画二
        handleBeforeEnterFm3(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm3(el, done) {
            const that = this
           Velocity(el, {
                translateX: '2.93rem',
                opacity: 1
            }, {
                duration: 1300,
                complete: () => {
                    that.fm4Show = true
                    done()
                }
            }) 
        },
        //动画三
        handleBeforeEnterFm4(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm4(el, done) {
            Velocity(el, {
                translateX: '-0.52rem',
                opacity: 1
            }, {
                duration: 600,
                complete: () => { //
                    setTimeout(() => {
                    this.fm5Show = true
                    setTimeout(() => {
                    this.fm6Show = true
                    setTimeout(() => {
                    this.fm7Show = true
                    setTimeout(() => {
                    this.fm8Show = true
                    setTimeout(() => {
                    this.fm9Show = true
                    }, 100)
                    }, 100)
                    }, 100)
                    }, 100)
                    }, 100)
                    done()
                }
            })
        },
        // 字体动画
        handleBeforeEnterFm5(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm5(el, done) {
            Velocity(el, {
                translateX: '-2rem',
                opacity: 1
            }, {
                duration: 800,
                complete: done
            })
        },
        handleBeforeEnterFm6(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm6(el, done) {
            Velocity(el, {
                translateX: '-1.6rem',
                opacity: 1
            }, {
                duration: 800,
                complete: done
            })
        },
        handleBeforeEnterFm7(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm7(el, done) {
            Velocity(el, {
                translateX: '-1.2rem',
                opacity: 1
            }, {
                duration: 800,
                complete: done
            })
        },
        handleBeforeEnterFm8(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm8(el, done) {
            Velocity(el, {
                translateX: '-0.8rem',
                opacity: 1
            }, {
                duration: 800,
                complete: done
            })
        },
        handleBeforeEnterFm9(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterFm9(el, done) {
            const that = this
            Velocity(el, {
                translateX: '-0.4rem',
                opacity: 1
            }, {
                duration: 800,
                complete: () => {
                    setTimeout(() => {
                        that.$emit("toJump2", true)
                        done()
                    }, 1500)
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
    .fmContent {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 10;
        .fmContentBg {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
            background: url(../assets/img/FM-1.jpg) no-repeat center;
            background-size: cover;
        }
        .fmImg_2 {
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 10;
            width: 1.64rem;
            height: 3.34rem;
            margin-left: -0.85rem;
        }
        .fmImg_3 {
            position: absolute;
            bottom: 2.64rem;
            left: 0;
            z-index: 12;
            width: 1.64rem;
            height: 0.2rem;
        }
        .fmImg_4 {
            position: absolute;
            top: 4.52rem;
            right: 0;
            z-index: 14;
            width: 1.18rem;
            height: 0.38rem;
        }
        .fmImg_5 {
            position: absolute;
            top: 4.9rem;
            right: 0;
            z-index: 16;
            width: 0.42rem;
            height: 0.4rem;
        }
        .fmImg_6 {
            position: absolute;
            top: 4.9rem;
            right: 0;
            z-index: 18;
            width: 0.42rem;
            height: 0.4rem;
        }
        .fmImg_7 {
            position: absolute;
            top: 4.9rem;
            right: 0;
            z-index: 20;
            width: 0.42rem;
            height: 0.4rem;
        }
        .fmImg_8 {
            position: absolute;
            top: 4.9rem;
            right: 0;
            z-index: 22;
            width: 0.42rem;
            height: 0.4rem;
        }
        .fmImg_9 {
            position: absolute;
            top: 4.9rem;
            right: 0;
            z-index: 23;
            width: 0.42rem;
            height: 0.4rem;
        }
    }
</style>