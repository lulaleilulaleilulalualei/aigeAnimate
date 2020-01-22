<template>
    <div class="p003Content">
        <div ref="p003ContentBg" class="p003ContentBg"></div>
        <div ref="p003ContentBg_2" class="p003ContentBg_2"></div>
        <div class="p003ContentBg_3"></div>
        <transition name="p0034" @before-enter="handleBeforeEnterp0034" @enter="handleEnterp0034">
            <div v-if="p0034Show" class="p0034Img_2"><img src="../assets/img/p003-4.png" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'

export default {
    data() {
        return {
            p0034Show: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.p0034Show = true
        }, 1500)
    },
    methods: {
        handleBeforeEnterp0034(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterp0034(el, done) {
            const that = this
            Velocity(el, {
                translateX: '0.44rem',
                opacity: 1
            }, {
                duration: 800,
                complete: () => {
                    setTimeout(() => {
                        Velocity(this.$refs.p003ContentBg, {
                            opacity: 0
                        }, {
                            duration: 1000,
                            complete: () => {
                                setTimeout(() => {
                                    Velocity(this.$refs.p003ContentBg_2, {
                                        opacity: 0
                                    }, {
                                        duration: 1000,
                                        complete: () => {
                                            setTimeout(() => {
                                                that.$emit("toJump6", true)
                                                done()
                                            }, 1500)
                                        }
                                    })
                                }, 1500)
                            }
                        })
                    }, 1500)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .p003Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: -7.5rem;
        z-index: 20;
        .p003ContentBg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 30;
            background: url(../assets/img/p003-1.jpg) no-repeat center;
            background-size: cover;
        }
        .p003ContentBg_2 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            background: url(../assets/img/p003-2.jpg) no-repeat center;
            background-size: cover;
        }
        .p003ContentBg_3 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            background: url(../assets/img/p003-3.jpg) no-repeat center;
            background-size: cover;
        }
        .p0034Img_2 {
            position: absolute;
            bottom: 0.44rem;
            left: 0;
            z-index: 30;
            width: 2.46rem;
            height: 0.68rem;
        }
    }
</style>