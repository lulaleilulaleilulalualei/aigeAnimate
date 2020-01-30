<template>
    <div class="p003Content" @touchend="touchEnd">
        <transition name="p0034Bg" @leave-enter="handleBeforeLeavep0034Bg" @leave="handleEnterp0034Bg">
            <div v-if="p0034BgShow" ref="p003ContentBg" :style="{backgroundImage: `url(${loadImgs.p0031.imgSrc.src})`}" class="p003ContentBg"></div>
        </transition>
        <transition name="p0034Bg_2" @leave-enter="handleBeforeLeavep0034Bg_2" @leave="handleEnterp0034Bg_2">
            <div v-if="p0034Bg_2Show" ref="p003ContentBg_2" :style="{backgroundImage: `url(${loadImgs.p0032.imgSrc.src})`}" class="p003ContentBg_2"></div>
        </transition>
        <div class="p003ContentBg_3" :style="{backgroundImage: `url(${loadImgs.p0033.imgSrc.src})`}"></div>
        <transition name="p0034" @before-enter="handleBeforeEnterp0034" @enter="handleEnterp0034">
            <div v-if="p0034Show" class="p0034Img_2"><img :src="loadImgs.p0034.imgSrc.src" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'
import { mapGetters , mapActions } from 'vuex';

export default {
    data() {
        return {
            p0034Show: false,
            p0034BgShow: true,
            p0034Bg_2Show: true,
        }
    },
    computed: {
        ...mapGetters([
            'loadImgs'
        ])
    },
    props: {
        _activeIndex: {
            type: Number,
            default: 0
        }
    },
    watch: {
       _activeIndex(val) {
           if(val !== 4) {
                this.p0034BgShow = true
                this.p0034Bg_2Show = true
                this.p0034Show = false
            }
       } 
    },
    mounted() {
        
    },
    methods: {
        touchEnd(evt) {
            if(!this.p0034Show) {
                this.p0034Show = true
            }else {
                if(this.p0034BgShow) {
                    this.p0034BgShow = false
                }else {
                    if(this.p0034Bg_2Show) {
                        this.p0034Bg_2Show = false
                    }
                }
            }
            this.startVal = 0
            this.moveVal = 0
        },
        handleBeforeLeavep0034Bg(el) {
            el.style.opacity = 1
        },
        handleEnterp0034Bg(el, done) {
            Velocity(el, {
                    opacity: 0
                }, {
                    duration: 800,
                    complete: done
                }
            )
        },
        handleBeforeLeavep0034Bg_2(el) {
             el.style.opacity = 1
        },
        handleEnterp0034Bg_2(el, done) {
            const $this = this
            Velocity(el, {
                    opacity: 0
                }, {
                    duration: 800,
                    complete: () => {
                        $this.$emit("toJump6", true)
                        done()
                    }
                }
            )
        },
        handleBeforeEnterp0034(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterp0034(el, done) {
            Velocity(el, {
                translateX: '0.44rem',
                opacity: 1
            }, {
                duration: 800,
                complete: done
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
        right: 0;
        z-index: 20;
        .p003ContentBg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 30;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .p003ContentBg_2 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .p003ContentBg_3 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            background-repeat: no-repeat;
            background-position: center;
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