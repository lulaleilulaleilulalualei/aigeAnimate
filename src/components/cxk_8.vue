<template>
    <div class="p006Content">
        <div class="p006ContentBg" :style="{backgroundImage: `url(${loadImgs.p006.imgSrc.src})`}"></div>
    </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'loadImgs'
        ])
    },
    mounted(){
        
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    .p006Content {
        width: 7.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 20;
        .p006ContentBg {
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
        
    }
</style>