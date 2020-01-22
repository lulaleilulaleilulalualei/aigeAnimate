<template>
    <div class="p004Content">
        <div :style="{opacity: isPlayVideo? 0: 1}">
            <div class="p004ContentBg"></div>
            <transition name="p0042" @before-enter="handleBeforeEnterp0042" @enter="handleEnterp0042">
                <div v-if="p0042ImgShow" class="p0042Img_2" @click="toPlayVideo"><img src="../assets/img/P004-2.png" alt=""></div>
            </transition>
        </div>
        <div class="videoBox">
            <video ref="video" src="../assets/img/P004-3.mp4"></video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            p0042ImgShow: false,
            isPlayVideo: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.p0042ImgShow = true
        }, 1200)
    },
    methods: {
        toPlayVideo() {
            this.isPlayVideo = true
            this.$refs.video.play()
            this.$emit("toPlayVideo", true)
            this.$refs.video.onended = () => {
                setTimeout(() => {
                    this.$emit("toJump7", true)
                }, 1000)
            }
        },
        handleBeforeEnterp0042(el) {
            el.style.translateY = '0'
            el.style.opacity = 0
        },
        handleEnterp0042(el, done) {
            let pageH = window.innerHeight
            Velocity(el, {
                translateY: -pageH/2 + 'px',
                opacity: 1
            }, {
                duration: 600,
                complete: done
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .p004Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: -7.5rem;
        z-index: 20;
        .p004ContentBg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            background: url(../assets/img/p004-1.jpg) no-repeat center;
            background-size: cover;
        }
        .p0042Img_2 {
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 30;
            width: 1.3rem;
            height: 1.3rem;
            margin-left: -0.65rem;
            margin-bottom: -0.65rem;
        }
        .videoBox {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            height: 100%;
            background-color: #000;
            display: flex;
            align-items: center;
            video {
                width: 100%;
                height: auto;
            }
        }
    }
</style>