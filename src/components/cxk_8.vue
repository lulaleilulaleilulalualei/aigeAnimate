<template>
    <div class="p006Content">
        <div class="p006ContentBg"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
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
        right: -7.5rem;
        z-index: 20;
        .p006ContentBg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            background: url(../assets/img/P006.jpg) no-repeat center;
            background-size: cover;
        }
        
    }
</style>