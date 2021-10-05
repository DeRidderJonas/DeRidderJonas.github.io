<template>
    <div class="small-project full-project actual-project">
        <h2>{{Project.name}}</h2>
        <div class="info">
            <div v-if="Project.imgAlt" v-html="Project.imgAlt"></div>
			<img v-else :src="'assets/img/' + Project.img" class="projectImg">
            <div class="info-text info-text-small">
                <p v-html="Project.info"></p>
                <a :href="Project.link" target="_blank">{{Project.linkText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
// import PortalProj from '@/components/PortalProject.vue';

export default {
    components:{
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
</style>
