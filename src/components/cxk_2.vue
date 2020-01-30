<template>
    <div class="fm2Content" @touchend="touchEnd">
        <div class="fm2ContentBg" :style="{backgroundImage: `url(${loadImgs.FM21.imgSrc.src})`}"></div>
        <transition name="fm22" @before-enter="handleBeforeEnterFm22" @enter="handleEnterFm22">
            <div v-if="fm22Show" class="fm2Img_2"><img :src="loadImgs.FM22.imgSrc.src" alt=""></div>
        </transition>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'
import { mapGetters , mapActions } from 'vuex';

export default {
    data() {
        return {
            fm22Show: false,
            startVal: 0,
            moveVal: 0
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
           if(val !== 1) {
              this.fm22Show = false
           }
       } 
    },
    mounted() {
        // setTimeout(() => {
        //     this.fm22Show = true
        // }, 1200)
    },
    methods: {
        touchEnd(evt) {
            if(!this.fm22Show) {
                this.fm22Show = true
            }
            this.startVal = 0
            this.moveVal = 0
        },
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
                duration: 1200,
                complete: () => {
                    that.$emit("toJump3", true)
                    done()
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
        right: 0;
        z-index: 20;
        .fm2ContentBg {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            background-repeat: no-repeat;
            background-position: center;
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