<template>
    <div class="p002Content" @touchend="touchEnd">
        <transition name="p0022" @before-leave="handleBeforeLeavep00Bg" @leave="handleLeavep00Bg">
            <div v-if="poo2BgShow" ref="p002ContentBg" :style="{backgroundImage: `url(${loadImgs.p0021.imgSrc.src})`}" class="p002ContentBg"></div>
        </transition>
        <div class="p002ContentBg_2" :style="{backgroundImage: `url(${loadImgs.p0023.imgSrc.src})`}"></div>
        <transition name="p0022" @before-enter="handleBeforeEnterp002" @enter="handleEnterp002">
            <div v-if="p0022Show" class="p0022Img_2"><img :src="loadImgs.p0022.imgSrc.src" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'
import { mapGetters , mapActions } from 'vuex';

export default {
    data() {
        return {
            poo2BgShow: true,
            p0022Show: false
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
           if(val !== 3) {
                this.poo2BgShow = true
                this.p0022Show = false
            }
       } 
    },
    mounted() {
        
    },
    methods: {
        touchEnd(evt) {
            if(!this.p0022Show) {
                this.p0022Show = true
            }else {
                if(this.poo2BgShow) {
                    this.poo2BgShow = false
                }
            }
            this.startVal = 0
            this.moveVal = 0
        },
        handleBeforeLeavep00Bg(el) {
            el.style.opacity = 1
        },
        handleLeavep00Bg(el, done) {
            const that = this
            Velocity(el, {
                opacity: 0
            }, {
                duration: 800,
                complete: () => {
                        that.$emit("toJump5", true)
                        done()
                    }
                }
            )
        },
        handleBeforeEnterp002(el) {
            el.style.translateX = '0'
            el.style.opacity = 0
        },
        handleEnterp002(el, done) {
            Velocity(el, {
                translateX: '0.5rem',
                opacity: 1
            }, {
                duration:800,
                complete: done
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
        right: 0;
        z-index: 20;
        .p002ContentBg {
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
        .p002ContentBg_2 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            background-repeat: no-repeat;
            background-position: center;
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