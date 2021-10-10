<template>
    <div>
        <img :src="'assets/img/' + filePath"
            @mouseleave="active = false" @mouseenter="active = true" @click="active=true">
    </div>
</template>

<script>
export default {
    props: {
        GifInfo : Object
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        filePath(){
            return this.active ? this.GifInfo.gif : this.GifInfo.img;
        }
    }
}
</script>

<style scoped>
    img{
        max-height: 260px;
        width: auto;
        border-radius: 15px;
    }

    @media screen and (max-width: 1000px) {
        img{
            width: 95%;
            height: auto;
        }
    }
</style>
