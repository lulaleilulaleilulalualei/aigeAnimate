<template>
    <div class="p001Content">
        <div class="p001ContentBg"></div>
        <transition name="p0012" @before-enter="handleBeforeEnterpoo112" @enter="handleEnterpoo112">
            <div v-if="p0012Show" ref="p001_2" class="p001_2"><img src="../assets/img/p001-2.png" alt=""></div>
        </transition>
        <transition name="poo13" @before-enter="handleBeforeEnterpoo113" @enter="handleEnterpoo113">
            <div v-if="p0013Show" class="p001_3"><img src="../assets/img/p001-3.png" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'

export default {
    data() {
        return {
            p0012Show: false,
            p0013Show: false
        }
    },
    computed: {
        currentH() {
            return window.innerHeight
        }
    },
    mounted() {
        setTimeout(() => {
            this.p0012Show = true
        }, 1200)
    },
    methods: {
        handleBeforeEnterpoo112(el) {
            el.style.translateY = '0'
            el.style.opacity = 0
        },
        handleEnterpoo112(el, done) {
            const $this = this
            Velocity(el, {
                translateY: $this.currentH/2 - (382 / 1350 * $this.currentH)/2 + 'px',
                opacity: 1
            }, {
                duration: 1200,
                complete: () => {
                    setTimeout(() => {
                        this.p0013Show = true
                        done()
                    }, 1500)
                }
            })
        },
        handleBeforeEnterpoo113(el) {
            el.style.translateY = '0'
            el.style.opacity = 0
        },
        handleEnterpoo113(el, done) {
            const that = this
            Velocity(this.$refs.p001_2, {
                translateY: (256 / 1334) * that.currentH + 'px',
            }, { duration: 1500, }, { delay: 500 })
            Velocity(el, {
                translateY: -(220 / 1334) * that.currentH + 'px',
                opacity: 1
            }, {
                duration: 1500,
                complete: () => {
                    setTimeout(() => {
                        that.$emit("toJump4", true)
                        done()
                    }, 1500)
                }
            })
            
        }
    }
}
</script>

<style lang="less" scoped>
    .p001Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: -7.5rem;
        z-index: 20;
        .p001ContentBg {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            background: url(../assets/img/p001-1.jpg) no-repeat center;
            background-size: cover;
        }
        .p001_2 {
            position: absolute;
            top: 0;
            left: 50%;
            z-index: 15;
            width: 2.22rem;
            height: 3.82rem;
            margin-left: -1.11rem;
        }
        .p001_3 {
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 15;
            width: 3rem;
            height: 3.8rem;
            margin-left: -1.5rem;
        }
    }
</style>