<template>
    <div class="small-project full-project actual-project">
        <h2>{{Project.name}}</h2>
        <div class="info">
            <pauseableGif v-if="Project.GifInfo" :GifInfo="Project.GifInfo"/>
            <div v-if="Project.imgAlt" v-html="Project.imgAlt" class="projectImg-alt"></div>
			<img v-if="Project.img && !Project.imgAlt" :src="'assets/img/' + Project.img" class="projectImg">
            <img :src="'assets/img/' + Project.img" class="projectImg projectImg-backup" :style="[Project.imgAlt ? {} : {'display':'none'}]">
            <div class="info-text info-text-small">
                <p v-html="Project.info"></p>
                <a :href="Project.link" target="_blank">{{Project.linkText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import pauseableGif from '@/components/PausableGif.vue';

export default {
    components:{
        pauseableGif
    },
    props:{
        Project: Object
    }
}
</script>

<style scoped>
    .small-project{
        height: 400px;
    }
    .info-text-small{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img{
        max-height: 260px;
        width: auto;
    }

    .projectImg-backup{
        display: none;
    }

    @media screen and (max-width: 1000px) {
        .small-project{
            height: auto;
        }

        img{
            width: 95%;
            height: auto;
        }

        .projectImg-alt{
            display: none;
        }

        .projectImg-backup{
            display: inline;
        }
    }
</style>
