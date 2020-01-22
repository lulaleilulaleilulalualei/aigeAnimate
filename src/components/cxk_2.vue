<template>
    <div class="fm2Content">
        <div class="fm2ContentBg"></div>
        <transition name="fm22" @before-enter="handleBeforeEnterFm22" @enter="handleEnterFm22">
            <div v-if="fm22Show" class="fm2Img_2"><img src="../assets/img/FM2-2.png" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'

export default {
    data() {
        return {
            fm22Show: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.fm22Show = true
        }, 1200)
    },
    methods: {
        handleBeforeEnterFm22(el) {
            el.style.translateY = '0'
            el.style.opacity = 0
        },
        handleEnterFm22(el, done) {
            const that = this
            Velocity(el, {
                translateY: '-1.1rem',
                opacity: 1
            }, {
                duration: 1500,
                complete: () => {
                    setTimeout(() => {
                        that.$emit("toJump3", true)
                        done()
                    }, 1500)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .fm2Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: -7.5rem;
        z-index: 20;
        .fm2ContentBg {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            background: url(../assets/img/FM2-1.jpg) no-repeat center;
            background-size: cover;
        }
        .fm2Img_2 {
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 15;
            width: 1.64rem;
            height: 3.34rem;
            margin-left: -0.85rem;
        }
    }
</style>