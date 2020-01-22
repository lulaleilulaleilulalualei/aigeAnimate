<template>
    <div class="p005Content">
        <transition @before-leave="handleBeforeEnterVideo" @leave="handleEnterVideo">
            <div v-if="!isHideBg" class="p005ContentBg">
                <div class="toBtnYes" @click="toShowYesVideo"></div>
                <div class="toBtnNo" @click="toShowNoVideo"></div>
            </div>
        </transition>
        <div class="showVideoBox">
            <video v-if="yesVideo" ref="yerVideo" src="../assets/img/P5-3.mp4"></video>
            <video v-if="noVideo" ref="noVideo" src="../assets/img/P5-2.mp4"></video>
        </div>
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'

export default {
    data() {
        return {
            isHideBg: false,
            yesVideo: false,
            noVideo: false
        }
    },
    methods: {
        handleBeforeEnterVideo(el) {
            el.style.opacity = 1
        },
        handleEnterVideo(el, done) {
            const that = this
            Velocity(el, {
                opacity: 0
            }, {
                duration: 600,
                complete: done
            })
        },
        toShowYesVideo() {
            this.isHideBg = true
            this.yesVideo = true
            this.$emit("toPlayVideo", true)
            this.$nextTick(() => {
                this.$refs.yerVideo.play()
                this.$refs.yerVideo.onended = () => {
                    setTimeout(() => {
                        this.$emit("toJump8", true)
                    }, 1000)
                }
            })
        },
        toShowNoVideo() {
            this.isHideBg = true
            this.noVideo = true
            this.$emit("toPlayVideo", true)
            this.$nextTick(() => {
                this.$refs.noVideo.play()
                this.$refs.noVideo.onended = () => {
                    setTimeout(() => {
                        this.$emit("toJump8", true)
                    }, 1000)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .p005Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: -7.5rem;
        z-index: 20;
        .p005ContentBg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            background: url(../assets/img/P005-1.jpg) no-repeat center;
            background-size: cover;
            .toBtnYes {
                position: absolute;
                top: 2rem;
                left: 1.14rem;
                z-index: 30;
                width: 2rem;
                height: 1.6rem;
                background-color: transparent;
            }
            .toBtnNo {
                position: absolute;
                top: 2rem;
                right: 1rem;
                z-index: 30;
                width: 2rem;
                height: 1.6rem;
                background-color: transparent;
            }
        }
        .showVideoBox {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            video {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>