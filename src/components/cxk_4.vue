<template>
    <div class="p002Content">
        <div ref="p002ContentBg" class="p002ContentBg"></div>
        <div class="p002ContentBg_2"></div>
        <transition name="p0022" @before-enter="handleBeforeEnterp002" @enter="handleEnterp002">
            <div v-if="p0022Show" class="p0022Img_2"><img src="../assets/img/P002-2.png" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'

export default {
    data() {
        return {
            p0022Show: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.p0022Show = true
        }, 1200)
    },
    methods: {
        handleBeforeEnterp002(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterp002(el, done) {
            const that = this
            Velocity(el, {
                translateX: '0.5rem',
                opacity: 1
            }, {
                duration:800,
                complete: () => {
                    setTimeout(() => {
                        Velocity(this.$refs.p002ContentBg, {
                            opacity: 0
                        }, {
                            duration:1000,
                            complete: () => {
                                setTimeout(() => {
                                    that.$emit("toJump5", true)
                                    done()
                                }, 1500)
                            }
                        })
                    }, 2000)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .p002Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: -7.5rem;
        z-index: 20;
        .p002ContentBg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            background: url(../assets/img/p002-1.jpg) no-repeat center;
            background-size: cover;
        }
        .p002ContentBg_2 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            background: url(../assets/img/p002-3.jpg) no-repeat center;
            background-size: cover;
        }
        .p0022Img_2 {
            position: absolute;
            top: 0.5rem;
            left: 0;
            z-index: 20;
            width: 2.94rem;
            height: 1.52rem;
        }
    }
</style>